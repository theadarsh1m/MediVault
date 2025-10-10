# 🏥 MediChain - Telemedicine & EHR Platform

MediChain is a **role-based web application** built with **Node.js, Express.js, MongoDB, and EJS**.  
It allows patients to manage their health data, doctors to update medical records, and admins to oversee the system securely.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)


🚀 Live Demo: [https://mediora.onrender.com](https://mediora.onrender.com)

---

## ✨ Features

- **🛡️ Role-Based Access** – Secure, distinct roles for **Patients**, **Doctors**, and **Admins**.
- **🔐 Secure Authentication** – User sign-up and login (in future will be handled by **Firebase Authentication**).
- **👤 Patient Profiles** – Patients can sign up, log in, and manage their own profile information.
- **🩺 Electronic Health Records (EHR)** – Verified doctors can view and update medical records (diagnoses, prescriptions, notes).
- **🗓️ Appointment Scheduling** – Patients can book and cancel appointments with doctors.
- **👮 Admin Verification** – Admins have oversight to approve doctor registration requests.
- **🎨 Responsive UI** – Built with **Bootstrap 5**, **Tailwind CSS** and custom EJS templates.
- **🌍 Deployed on Render** – Connected with **MongoDB Atlas** for cloud storage.

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, Bootstrap, Tailwind CSS 
- **Database:** MongoDB Atlas (Mongoose ODM)  
- **Authentication:** JWT based
- **Deployment:** Render  

---

## 📂 Project Structure
```
MediChain/
│── controllers/
│ └── authController.js
│── middleware/
│ └── authMiddleware.js
│── models/
│ ├── Doctor.js
│ ├── Hospital.js
│ └── Patient.js
│── routes/
│ ├── authRoutes.js
│ └── dashboardRoutes.js
│── views/
│ ├── 404.ejs
│ ├── doctorDashboard.ejs
│ ├── home.ejs
│ ├── hospitalDashboard.ejs
│ ├── login.ejs
│ ├── patientDashboard.ejs
│ └── signup.ejs
│── .env
│── connect.js
│── package.json
└── server.js
```


---

## ⚡ Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/theadarsh1m/MediChain.git
cd MediChain
```

### 2.Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```
# Server Configuration
PORT=5000

# MongoDB Connection
MONGODB_URI=your_mongodb_atlas_connection_string

JWT_SECRET=YourSuperSecretKey
JWT_EXPIRES_IN=7d
```
- ⚠️ Replace your_mongodb_atlas_connection_string and JWT_SECRET(for dev) with your own.

### 4. Start the server
```bash
npm start
```
## 📊 Screenshots


### Landing Page
<img width="1408" height="736" alt="medichain landing page" src="https://github.com/user-attachments/assets/652994c8-40af-45e0-8317-568fd2f08a15" />

### Dashboard 
_(Under development)_  



---

## ⭐ Contribute

Want to improve **MediChain**? Follow these steps to safely contribute:

1. **Fork the repo**  
2. **Create a new branch (`feature-xyz`)**  
   create a new branch for each feature or bug fix. Replace `feature-xyz` with a descriptive name like `fix-login-bug` or `add-appointment-feature`.

3. **Commit changes**  
   save your progress using `git commit -m "Describe your change"`.

4. **Open a Pull Request 🚀**  
   open a Pull Request (PR) from your branch to the main repository.


## Developers

- [Adarsh Sachan](https://www.linkedin.com/in/adarshsachan01/) 🔗
- [Abhinav Sahu](https://www.linkedin.com/in/abhinav-sahu-865a01297/) 🔗
- [Only Abhinav](https://www.linkedin.com/in/abhinav-kumar-10a942262/) 🔗

---
