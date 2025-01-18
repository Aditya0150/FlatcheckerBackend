const nodemailer = require('nodemailer');

async function sendMeetingEmail(clientEmail, inspectorEmail, meetingDetails) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: [clientEmail, inspectorEmail],
    subject: 'Your Flat Inspection Meeting is Scheduled',
    html: `
      <h3>Your meeting has been scheduled</h3>
      <p><strong>Date:</strong> ${meetingDetails.date}</p>
      <p><strong>Time:</strong> ${meetingDetails.time}</p>
      <p><strong>Meeting Link:</strong> <a href="${meetingDetails.meetingLink}">${meetingDetails.meetingLink}</a></p>
      <p>Please join the meeting using the link above at the scheduled time.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Meeting email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendMeetingEmail;
