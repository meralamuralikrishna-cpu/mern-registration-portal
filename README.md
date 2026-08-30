# 🚀 MERN Registration Portal

A modern, full-stack **MERN (MongoDB, Express, React, Node.js)** user registration system with real-time form validation, dynamic state handling, responsive design, and cloud database integration via **MongoDB Atlas**.

---

## ✨ Features

- **⚡ Fast & Modern Frontend:** Built with React 19 and Vite for instant HMR.
- **📝 Controlled Form State:** Single dynamic change handler managing form state with ES6 computed property names.
- **🔒 Validation & Error Handling:** Client-side password matching validation and duplicate email check on the backend.
- **🎨 Responsive UI:** Clean card layout with responsive styling for mobile, tablet, and desktop screens.
- **🌐 RESTful API:** Express.js server providing `POST /register` and `GET /users` endpoints with CORS and JSON body-parser.
- **☁️ Cloud Database:** Connected to **MongoDB Atlas** using **Mongoose** schemas with automatic timestamps.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Vite, JavaScript (ES6+), CSS3 |
| **Backend** | Node.js, Express.js, CORS, Dotenv |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Tools** | VS Code, Git, Postman / Browser |

---

## 📁 Project Structure

```text
my-react-app/
├── backend/
│   ├── models/
│   │   └── User.js          # Mongoose User Schema
│   ├── .env                 # Environment variables (Mongo URI & Port)
│   ├── package.json         # Backend dependencies & scripts
│   └── server.js            # Express server & API routes
├── src/
│   ├── assets/              # Icons & static assets
│   ├── components/
│   │   ├── RegistrationForm.css  # Form component styles
│   │   └── RegistrationForm.jsx  # Main Registration Form component
│   ├── App.jsx              # Root component
│   ├── index.css            # Global stylesheet
│   └── main.jsx             # React entry point
├── index.html               # Vite HTML template
├── package.json             # Frontend dependencies & scripts
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Account (or local MongoDB)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-registration-portal.git
cd mern-registration-portal
```

---

### 2. Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5050
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.sc16txe.mongodb.net/registration_db?retryWrites=true&w=majority
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   *The server will run on `http://localhost:5050`.*

---

### 3. Frontend Setup

1. Open a **new terminal** and navigate back to the root folder:
   ```bash
   cd ..
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:5173`.*

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Health check endpoint |
| `POST` | `/register` | Registers a new user and saves to MongoDB Atlas |
| `GET` | `/users` | Retrieves all registered users (passwords excluded) |

### Sample `POST /register` Payload:
```json
{
  "fname": "Murali",
  "lname": "Krishna",
  "email": "murali@example.com",
  "phone": "+91 9876543210",
  "password": "securepassword123",
  "date": "2000-01-01",
  "gender": "Male"
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/mern-registration-portal/issues).

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).

---

### 👨‍💻 Author

**Murali Krishna**

