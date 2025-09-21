# 🏥 MediVault: Telemedicine & EHR Platform

> A role-based web application for **patients, doctors, and hospitals** to manage medical records, appointments, and health data securely.

---

## ✨ Features (Current Progress)

- [x] Node.js + Express backend setup  
- [x] MongoDB Atlas connection (with Mongoose)  
- [x] EJS view engine configured  
- [x] Role-based User Models (`Patient`, `Doctor`, `Hospital`)  
- [x] `/auth/signup` route to register users based on role  

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (Mongoose ODM)  
- **Templating Engine:** EJS  
- **Auth (Planned):** JWT / Firebase Auth  
- **Frontend (Future):** React + Tailwind  

---

## 📂 Project Structure

```bash
server/
│── server.js              # Entry point
│── connect.js             # MongoDB connection
│── routes/
│    └── authRoutes.js     # Signup/Login routes
│── controllers/
│    └── authController.js # Business logic
│── models/
│    ├── patient.js
│    ├── doctor.js
│    └── hospital.js
│── views/                 # EJS templates
│── .env                   # Environment variables
│── package.json

```
## ⚙️ Installation & Setup

# Clone repository
git clone https://github.com/<your-username>/medivault.git
cd medivault

# Install dependencies
npm install

# Setup environment variables
touch .env

.env file example:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster-url/medivault
JWT_SECRET=SuperSecret
JWT_EXPIRES_IN=1d

# Run the server:
```
npm start
```
