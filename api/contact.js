import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import ContactMessage from '../models/ContactMessage';

// Mongoose connection caching
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) return cachedDb;
    
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    cachedDb = db;
    return db;
}

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ 
                error: 'Missing required fields' 
            });
        }

        // Connect to DB
        await connectToDatabase();

        // Save to MongoDB
        const newMessage = new ContactMessage({ name, email, message });
        await newMessage.save();

        // Send email notification
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `New contact message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
        };

        await transporter.sendMail(mailOptions);
        console.log('📧 Email notification sent');

        return res.status(200).json({ 
            success: true,
            message: 'Message received! Thank you for reaching out.' 
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ 
            error: 'Failed to process message. Please try again later.' 
        });
    }
}
