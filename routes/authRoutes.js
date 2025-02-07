const express = require('express');
const { registerUser, loginUser, getUserProfile, logoutUser, forgotPassword, resetPassword } = require('../controllers/authController');
const upload = require('../middleware/upload');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', upload.single('profileImage'), registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/logout', logoutUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
