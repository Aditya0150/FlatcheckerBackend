const Meeting = require('../models/Meeting');

const scheduleMeeting = async (req, res) => {
  const { title, date, clientEmail, inspectorEmail } = req.body;

  // Validate request body
  if (!date ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Generate a unique meeting link
    const meetingLink = `https://your-meeting-link.com/${Date.now()}`;

    // Create a new meeting instance
    const meeting = new Meeting({
      title,
      date,
      clientEmail,
      inspectorEmail,
      meetingLink,
    });

    // Save the meeting to the database
    await meeting.save();

    // Respond with success
    res.status(200).json({ message: 'Meeting scheduled successfully', meeting });
  } catch (error) {
    console.error('Error scheduling meeting:', error);

    // Handle different error types
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: 'Invalid meeting data' });
    } else {
      res.status(500).json({ error: 'Failed to schedule meeting' });
    }
  }
};

module.exports = { scheduleMeeting };
