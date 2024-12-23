import React, { useState } from 'react';
import './AddCarForm.css'; // External CSS for styling

const AddCarForm = ({ onAddCar, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    make: '',
    model: '',
    engine: '',
    registration: '',
    serviceDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCar(formData);
  };

  return (
    <div className="add-car-form-overlay">
      <div className="add-car-form-content">
        <h3>Add New Car</h3>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input type="number" name="id" value={formData.id} onChange={handleChange} required />
          </label>
          <label>
            Make:
            <input type="text" name="make" value={formData.make} onChange={handleChange} required />
          </label>
          <label>
            Model:
            <input type="text" name="model" value={formData.model} onChange={handleChange} required />
          </label>
          <label>
            Engine Capacity:
            <input type="text" name="engine" value={formData.engine} onChange={handleChange} required />
          </label>

          <label>
            Registration:
            <input type="text" name="registration" value={formData.registration} onChange={handleChange} required />
          </label>

          <label>
            Service Date:
            <input type="date" name="serviceDate" value={formData.serviceDate} onChange={handleChange} required />
          </label>
          <button type="submit" className="submit-button">Add Car</button>
          <button type="button" onClick={onClose} className="close-button">Close</button>
        </form>
      </div>
    </div>
  );
};

export default AddCarForm;
