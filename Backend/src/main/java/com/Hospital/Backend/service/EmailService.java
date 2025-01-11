package com.Hospital.Backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

  @Autowired
  private JavaMailSender mailSender;

  @Value("${spring.mail.username}")
  private String sender;

  public void sendWelcomeEmail(String recipientEmail, String name, String username, String password)
      throws MessagingException {

    String template = """
                <!DOCTYPE html>
        <html lang="en">

        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Beautiful Email</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f9;
            }

            .email-container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border: 1px solid #ddd;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .header {
              background-color: #007BFF;
              color: #ffffff;
              padding: 20px;
              text-align: center;
            }

            .header h1 {
              margin: 0;
              font-size: 24px;
            }

            .content {
              padding: 20px;
              line-height: 1.6;
              color: #000000;
            }
            h4 span{
              font-weight: 200;
            }

            .content p {
              font-weight: 300;
            }

            .footer {
              text-align: center;
              padding: 10px;
              background-color: #f4f4f9;
              color: #777777;
              font-size: 12px;
            }

            .button {
              display: inline-block;
              padding: 10px 20px;
              margin-top: 20px;
              background-color: #007BFF;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
            }

            .button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>

        <body>
          <div class="email-container">
            <div class="header">
              <h1>Newlife Hospital</h1>
            </div>
            <div class="content">
              <p>Dear <strong>{{name}}</p>
              <p>We are delighted to welcome you to NewLife Hospital. Below are your login credentials for accessing our secure online portal:</p>
              <div>
                <h4>Username : <span>{{username}}</span></h4>
                <h4>Password : <span>{{password}}</span></h4>
              </div>

              <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Newlife Hospital. All rights reserved.</p>
            </div>
          </div>
        </body>

        </html>""";

    String emailContent = template
        .replace("{{name}}", name)
        .replace("{{username}}", username)
        .replace("{{password}}", password);

    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);

    helper.setTo(recipientEmail);
    helper.setSubject("Welcome to NewLife Hospital");
    helper.setText(emailContent, true);

    mailSender.send(message);
  }

  public void sendAppointmentEmail(String toEmail,
      String name , String date , String time , String drname ) throws MessagingException {
    MimeMessage mimeMessage = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

    String template = """
            <!DOCTYPE html>
                          <html lang="en">
                          <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Appointment Confirmation</title>
                            <style>
                              body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f9f9f9;
                              }
                              .email-container {
                                max-width: 600px;
                                margin: 20px auto;
                                background: #ffffff;
                                border-radius: 10px;
                                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                              }
                              .header {
                                background-color: #0073e6;
                                color: #ffffff;
                                text-align: center;
                                padding: 5px;
                              }
                              .content {
                                padding: 20px;
                              }
                              .footer {
                                text-align: center;
                                padding: 10px;
                                font-size: 12px;
                                color: #777;
                              }
                              .button {
                                display: inline-block;
                                margin: 20px 0;
                                padding: 10px 20px;
                                background-color: #0073e6;
                                color: #ffffff;
                                text-decoration: none;
                                border-radius: 4px;
                              }
                              .button:hover {
                                background-color: #005bb5;
                              }
                              .details {
                                background: #f1f9ff;
                                border: 1px solid #cce7ff;
                                padding: 15px;
                                margin: 20px 0;
                                border-radius: 5px;
                              }
                            </style>
                          </head>
                          <body>
                            <div class="email-container">
                              <div class="header">
                                <h2>Appointment Confirmation</h2>
                              </div>
                              <div class="content">
                                <p>Dear <strong>{{name}}</strong>,</p>
                                <p>Your appointment has been successfully scheduled. Below are the details:</p>
                                <div class="details">
                                  <p><strong>Appointment Date:</strong> {{appointmentDate}}</p>
                                  <p><strong>Time:</strong> {{appointmentTime}}</p>
                                  <p><strong>Doctor:</strong> Dr. {{doctorName}}</p>
                                  <p><strong>Location:</strong> NewLife Hospital, Pune</p>
                                </div>
                                <p>Please arrive 15 minutes before your scheduled time and carry all relevant documents (if any).</p>
                                <p>Thank you for choosing NewLife Hospital. We look forward to serving you!</p>
                              </div>
                              <div class="footer">
                                <p>&copy; 2025 NewLife Hospital. All rights reserved.</p>
                              </div>
                            </div>
                          </body>
                          </html>
            
        """;
    String emailContent = template
            .replace("{{name}}", name)
            .replace("{{appointmentDate}}", date)
            .replace("{{appointmentTime}}", time)
            .replace("{{doctorName}}" , drname);

    helper.setTo(toEmail);
    helper.setSubject("Appointment Confirmation");
    helper.setText(emailContent, true); // Enables HTML

    mailSender.send(mimeMessage);
  }

}