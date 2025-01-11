# Hospital Management System

## Overview

The Hospital Management System (HMS) is a web-based application designed to streamline various hospital functions, including appointment scheduling, patient records management, staff management, billing, and communication. The system is built using Java, Spring Boot, React.js, Hibernate, and MySQL, and it includes an AI chatbot to enhance user experience by providing real-time assistance.

## Features

- **Automated Appointment Scheduling**: Allows patients to book, cancel, and manage appointments easily.
- **Centralized Patient Records**: A unified system to store and access patient data efficiently.
- **Streamlined Staff Management**: Admins can manage staff schedules, roles, and information.
- **Integrated Billing System**: Tracks billing details and generates invoices for patients.
- **AI Chatbot**: Provides real-time assistance to users (patients and staff) to answer common queries.
- **Role-Based Dashboards**: Separate dashboards for doctors, administrators, and patients, each tailored to their specific roles and needs.
- **Secure Login and Role-Based Access Control**: Ensures only authorized personnel can access sensitive information.
- **Data Encryption**: All sensitive data is encrypted to ensure privacy and security.
- **Email Integration**: Automated email notifications for appointment confirmations and updates.
- **Responsive UI/UX**: Optimized for both desktop and mobile devices for a seamless experience.
- **Deployed on AWS**: The application is hosted on AWS for scalability and high availability.

## Technologies Used

- **Java**: Backend development.
- **Spring Boot**: Framework for building the backend REST API.
- **React.js**: Frontend development for building dynamic and responsive UIs.
- **Hibernate**: ORM (Object-Relational Mapping) tool for database interaction.
- **MySQL**: Database for storing hospital data, such as patient records, appointments, and billing information.
- **AWS**: Cloud deployment platform for scalability and reliability.
- **AI Chatbot**: Implemented using a natural language processing tool for real-time assistance.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/hospital-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd hospital-management-system
    ```

3. **Backend (Java, Spring Boot)**:
    - Navigate to the `backend` directory:
      ```bash
      cd backend
      ```
    - Ensure that you have Java 8+ installed on your machine.
    - Build and run the Spring Boot application:
      ```bash
      mvn clean install
      mvn spring-boot:run
      ```

4. **Frontend (React.js)**:
    - Navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```
    - Install the necessary npm packages:
      ```bash
      npm install
      ```
    - Start the React development server:
      ```bash
      npm start
      ```

5. **Database (MySQL)**:
    - Ensure that MySQL is installed and running.
    - Create a database called `hospital_management`.
    - Import the SQL schema provided in the repository to set up the required tables.

6. **Configure Environment Variables**:
    - Set up the necessary environment variables for the Spring Boot application (such as database credentials, AWS configurations, etc.) in the `application.properties` or `.env` file.

## Usage

1. **Patient View**: Patients can view available doctors, book appointments, and access their medical records.
2. **Doctor View**: Doctors can manage their schedules, view patient history, and update treatment details.
3. **Admin View**: Administrators can manage users, staff schedules, view reports, and track billing information.
4. **AI Chatbot**: The chatbot can assist users with common questions about appointments, services, and general hospital information.

## Example Output

- **Automated Appointment Scheduling**: Patients receive email confirmations when an appointment is booked.
- **Patient Dashboard**: Displays upcoming appointments, medical records, and payment status.
- **Doctor Dashboard**: Shows scheduled appointments and patient details.
- **Admin Dashboard**: Includes staff management, billing reports, and hospital analytics.

## Deployment

The application is deployed on AWS, ensuring high availability and scalability. You can configure it to run on AWS EC2 instances, RDS for the database, and S3 for static file storage.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your changes and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Spring Boot](https://spring.io/projects/spring-boot) for building the backend.
- [React.js](https://reactjs.org/) for frontend development.
- [Hibernate](https://hibernate.org/) for ORM-based database interaction.
- [MySQL](https://www.mysql.com/) for database management.
- [AWS](https://aws.amazon.com/) for cloud hosting.
- [AI Chatbot Framework](https://www.chatbot.com/) for implementing the chatbot feature.

