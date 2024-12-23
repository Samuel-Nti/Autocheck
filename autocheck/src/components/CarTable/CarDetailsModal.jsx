import React from 'react';
import './CarDetailsModal.css'; // External CSS for styling
import { NavLink } from 'react-router-dom';

const CarDetailsModal = ({ car, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Car Details</h3>
        <p><strong>ID:</strong> {car.id}</p>
        <p><strong>Make:</strong> {car.make}</p>
        <p><strong>Model:</strong> {car.model}</p>
        <p><strong>Engine Capacity:</strong> {car.engine}</p>
        <p><strong>Car Registration No:</strong> {car.registration}</p>
        <p><strong>Service Date:</strong> {car.serviceDate}</p>
        
        <div className="modal-buttons">
        <NavLink to="/card"className="navbar-item"> <button className="generate-card-button">Generate Card</button></NavLink>  
          <NavLink to="/generate"className="navbar-item"><button className="create-invoice-button">Create Invoice</button> </NavLink>
         
        </div>

        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CarDetailsModal;
