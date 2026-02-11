import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const initializeAdmin = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const adminExists = users.find(u => u.email === "admin@mediconnect.com");
  
  if (!adminExists) {
    users.push({
      id: "25MCAG2",           
      name: "Group1",          
      email: "admin@mediconnect.com",
      password: "admin123",    
      role: "ADMIN"
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
};

initializeAdmin();

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)