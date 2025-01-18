// backend/routes/meetings.js
const express = require('express');
const router = express.Router();
const { scheduleMeeting } = require('../controllers/meetingcontroller');

// POST /api/meetings/schedule
router.post('/schedule', scheduleMeeting);

module.exports = router;
