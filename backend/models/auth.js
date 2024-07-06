const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, findUserByUsername } = require('../models/user');
const router = express.Router();

const secret = 'TLNT_PTD_secret'; 

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    findUserByUsername(username, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        createUser(username, password, (err, result) => {
            if (err) throw err;
            res.json({ msg: 'User registered successfully' });
        });
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    findUserByUsername(username, (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(400).json({ msg: 'User not found' });
        }
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
            res.json({ token });
        });
    });
});

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.id;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = {
    router,
    authMiddleware
};
