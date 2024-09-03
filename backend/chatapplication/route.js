const express = require('express');
const router = express.Router();
const Message = require('./model');

// Get all messages between two users
router.get('/api/messages/:userID/:otherUserID', async (req, res) => {
    const { userID, otherUserID } = req.params;
    try {
        const messages = await Message.find({
            $or: [
                { sender: userID, receiver: otherUserID },
                { sender: otherUserID, receiver: userID }
            ]
        }).sort({ timestamp: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching messages' });
    }
});

// Save a new message
router.post('/messages', async (req, res) => {
    const { sender, receiver, message } = req.body;

    if (!sender || !receiver || !message) {
        return res.status(400).json({ error: 'Sender, receiver, and message are required.' });
    }

    try {
        const newMessage = new Message({ 
            sender,
            receiver,
            message,
            timestamp: new Date()
        });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(500).json({ error: 'Error saving message' });
    }
});

module.exports = router;
