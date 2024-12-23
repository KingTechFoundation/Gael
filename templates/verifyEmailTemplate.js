function verifyEmailTemplate(verificationUrl, fullName) {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            text-align: center;
            background: linear-gradient(135deg, #007bff, #0056d3);
            color: white;
            padding: 25px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px 30px;
            color: #333;
          }
          .content p {
            margin: 15px 0;
            line-height: 1.6;
          }
          .button {
            display: inline-block;
            background-color: #007bff;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            margin: 20px 0;
          }
          .button:hover {
            background-color: #0056d3;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            background-color: #f4f4f4;
            padding: 15px;
            color: #666;
          }
          .footer a {
            color: #007bff;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>🎉 Welcome to Virtual Lost-and-Found System! 🧳</h1>
          </div>
          <div class="content">
            <p>Hi ${fullName},</p>
            <p>
              Thank you for joining <strong>Virtual Lost-and-Found System (VLFS)</strong>, the platform where lost items find their way back to you! We are excited to have you onboard and help you locate or report lost items in your community, public places, or institutions. 😊
            </p>
            <p>
              To get started, please verify your email address by clicking the button below:
            </p>
            <a href="${verificationUrl}" class="button">Verify Email</a>
            <p>
              If you didn't create this account, no action is required. Feel free to ignore this email.
            </p>
            <p>
              Need assistance? Contact our support team anytime at 
              <a href="tel:+250785351610">+250 785 351 610</a> or via email at 
              <a href="mailto:gaellemamy94@gmail.com">gaellemamy94@gmail.com</a>.
            </p>
          </div>
          <div class="footer">
            <p>
              &copy; 2024 Virtual Lost-and-Found System. All rights reserved.<br>
              Designed with ❤️ to help reunite lost items with their owners.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

module.exports = verifyEmailTemplate;
