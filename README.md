# 🚗 Kar_zone - Premium Car Rental Solution

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)

**Kar_zone** is a high-performance, full-stack car rental platform designed to provide a seamless experience for both customers and administrators. Built with the **MERN** stack and featuring advanced integrations like **Stripe** for secure payments and **Tailwind CSS 4** for cutting-edge aesthetics.

---

## 🌟 Key Features

### 👤 Customer Portal
- **Intuitive Discovery:** Browse an extensive fleet of vehicles with high-quality images and detailed specifications.
- **Advanced Filtering:** Search by make, model, category (Sedan, SUV, etc.), or availability status.
- **Secure Authentication:** Robust sign-up and login system powered by **JWT** and **Bcrypt**.
- **Simplified Booking:** User-friendly date selection and instant booking flow.
- **Integrated Payments:** Secure checkout via **Stripe** with real-time payment verification.
- **Booking Management:** Track active and past bookings directly from the user dashboard.

### 🛠️ Admin Dashboard
- **Inventory Control:** Full CRUD (Create, Read, Update, Delete) operations for the vehicle fleet.
- **Media Management:** Automated image uploads via **Multer** with smart file system cleanup.
- **Booking Oversight:** Centralized management of all customer reservations and payment statuses.
- **Real-time Updates:** Instant reflection of fleet availability across the platform.

---

## 💻 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19 (Vite), Tailwind CSS 4, React Router 7, Axios, Lucide Icons |
| **Admin** | React 19, Tailwind CSS 4, React Router, React Toastify |
| **Backend** | Node.js, Express 5, Mongoose, JWT, Bcrypt, Multer |
| **Database** | MongoDB Atlas (Cloud Persistence) |
| **Payments** | Stripe API Integration |
| **DevOps** | Dotenv, Morgan (Logging), Helmet (Security), Nodemon |

---

## 🏗️ Project Structure

```text
Kar_zone/
├── admin/                # React Admin Dashboard
│   ├── src/
│   │   ├── components/   # AddCar, ManageCar, Booking Table
│   │   └── App.jsx       # Admin Routing
├── backend/              # Node.js/Express API
│   ├── config/           # DB connection & Configuration
│   ├── controllers/      # Business logic (Auth, Cars, Payments)
│   ├── middleware/       # Auth guards & Media processing
│   ├── models/           # Mongoose Schemas (User, Car, Booking)
│   ├── routes/           # REST Endpoints
│   ├── uploads/          # Physical storage for vehicle assets
│   └── server.js         # API Entry Point
└── frontend/             # React User Application
    ├── src/
    │   ├── pages/        # Home, Catalog, Success/Cancel, MyBookings
    │   └── App.jsx       # Client Routing
```

---

## ⚡ Optimizations & Security

- **MVC Architecture:** Clean separation of concerns for high maintainability and scalability.
- **Security Headers:** Implemented **Helmet** middleware to secure HTTP headers.
- **Asset Integrity:** Automatic deletion of old image files when vehicle profiles are updated or deleted to prevent storage bloat.
- **Secure Sessions:** Stateless **JWT** authentication with HTTP-only potential and token expiration.
- **Performance:** Leveraging **Vite** for sub-second HMR and **Tailwind 4** for zero-runtime CSS optimization.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Stripe](https://stripe.com/) Developer account

### 1. Clone the repository
```bash
git clone https://github.com/Ayush546230/Kar_zone--A-fullstack-Project.git
cd Kar_zone
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_strong_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```
Run the server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin Setup
```bash
cd ../admin
npm install
npm run dev
```

---

## 📸 Screenshots & UI Showcase

### 🏠 Premium Hero Section
*Experience the next-gen fleet with a stunning, high-conversion landing page.*
<img src="screenshots/Screenshot 2026-03-19 223947.png" width="100%" alt="Home Page" />

### 🏎️ Luxury Car Collection
*A clean, filterable catalog showcasing the premium fleet with real-time availability.*
<img src="screenshots/Screenshot 2026-03-19 225548.png" width="100%" alt="Car Catalog" />

### 📅 Secure Booking Flow
*Intuitive reservation system with date validation and dynamic price calculation.*
<img src="screenshots/Screenshot 2026-03-19 224520.png" width="100%" alt="Booking Process" />

### 💳 Integrated Stripe Checkout
*Seamless and secure global payment processing powered by Stripe.*
<img src="screenshots/Screenshot 2026-03-19 224800.png" width="100%" alt="Stripe Payment" />

### 📊 Admin Booking Dashboard
*Centralized hub for managing reservations, tracking payments, and updating statuses.*
<img src="screenshots/Screenshot 2026-03-19 225300.png" width="100%" alt="Booking Dashboard" />

### ⚙️ Admin Fleet Management
*Powerful inventory control to add, update, or remove vehicles from the live fleet.*
<img src="screenshots/Screenshot 2026-03-19 225936.png" width="100%" alt="Fleet Management" />

### 🔐 Multi-page Experience
*Including specialized pages for Contact, User Signup, and Real-time Statistics.*
<p align="center">
  <img src="screenshots/Screenshot 2026-03-19 230034.png" width="32%" alt="Contact" />
  <img src="screenshots/Screenshot 2026-03-19 225159.png" width="32%" alt="Signup" />
  <img src="screenshots/Screenshot 2026-03-19 225144.png" width="32%" alt="Stats" />
</p>

---

## 🗺️ Roadmap
- [ ] Add Email notifications for booking confirmation.
- [ ] Implement multi-language support (i18n).
- [ ] Add User Profile editing and Avatar uploads.
- [ ] Implement Dynamic Pricing based on peak seasons.

---

## 📄 License
This project is licensed under the ISC License.

---
Developed with ❤️ by [Ayush Srivastava](https://github.com/Ayush546230)
