# MERN Finance Dashboard using Machine Learning Predictions

![Project Preview](https://github.com/user-attachments/assets/7d247f7d-04cf-45f8-99c9-53c1f77cffab) <!-- Replace with your project image -->

A fully functional **Finance Dashboard** built using the **MERN** stack, integrating **Machine Learning** for future financial predictions. This project demonstrates the power of modern web development with **Vite**, **Redux Toolkit**, **Material UI**, and **Recharts** on the frontend. The backend leverages **Node.js**, **Express.js**, and **MongoDB**, offering seamless data management and advanced analytics.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Progressive Web App](#progressive-web-app)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo: [Finance Dashboard Demo](https://mern-finance-ml-app.netlify.app/) <!-- Add your deployed app link here -->

## Features

- Financial dashboard with real-time data
- **Machine Learning** model predictions for financial growth
- Interactive and responsive charts using **Recharts**
- Advanced state management with **Redux Toolkit**
- **Progressive Web App (PWA)** enabled for offline usage
- Authentication and role-based access
- API integration with third-party financial data
- Modern UI with **Material UI** components
- Fast and efficient development with **Vite**

## Tech Stack

### Frontend:
- React.js (Vite)
- Redux Toolkit
- Tailwind CSS / Material UI
- Recharts for data visualization
- Axios for API requests

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Machine Learning Model (custom integration)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MERN-Finance-Dashboard.git
   cd MERN-Finance-Dashboard
   ```

2. Install dependencies for the backend:
   ```bash
      cd backend
      npm install

```

3. Install dependencies for the frontend:
    ```bash
cd frontend
npm install

```

4. Create a .env file in the backend directory and add the following environment variables:
  ```
      MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-secret-key>
   ```

5. Run both frontend and backend:
   ```bash
       # Run frontend
          cd frontend
          npm run dev
          
          # Run backend
          cd backend
          npm run dev
    ```



## Progressive Web App
This app is built as a Progressive Web App (PWA), allowing it to be used offline and installed on any device. You can make it accessible even without an active internet connection, and it's ready to serve as a native app experience.

### To test it:

  Open the web app in Chrome.
  Click the install icon (a plus symbol) in the address bar to install the app on your device.
  Access it offline anytime!

## SCREESNSHOTS:
<!-- <img width="959" alt="image" src="https://github.com/user-attachments/assets/5c78256d-9b59-4c7a-9dfd-1c5ae9f4a58e">
 --> Dashboard with real-time data visualization and financial insights

<!-- <img width="959" alt="image" src="https://github.com/user-attachments/assets/6a238f49-742b-4e66-8432-e612fe322bbd">
 --> Machine Learning-based financial predictions

### Usage
 1. Users can log in and view financial data in real-time.
 2. Machine learning predictions are available to help forecast financial growth.
 3. Charts provide a graphical view of financial trends.

### Contributing
We welcome contributions to enhance the features or improve code quality. Please fork the repository and submit pull requests.

### License
This project is licensed under the MIT License. See the LICENSE file for details.


