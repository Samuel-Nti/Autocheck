import React, { useState } from 'react';
import './CarTable.css'; // External CSS for styling
import AddCarForm from '../AddCarForm/AddCarForm';
import CarDetailsModal from './CarDetailsModal'; // Import the modal

const CarTable = () => {
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Camry', engine: '1.7 litre capacity', registration: 'GE-1023-12', serviceDate: '2024-01-15' },
    { id: 2, make: 'Honda', model: 'Accord', engine: '1.7 litre capacity', registration: 'GE-1023-12', serviceDate: '2024-02-20' },
    // Add more initial data here
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // Holds the selected car details

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
    setShowPopup(false);
  };

  const handleOpenModal = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="car-table-container">
      <button onClick={() => setShowPopup(true)} className="add-car-button">Add New Car</button>

      {/* Wrapping table in a container for horizontal scroll */}
      <div className="car-table-wrapper">
        <table className="car-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Make</th>
              <th>Model</th>
              <th>Engine Capacity</th>
              <th>Car Registration No.</th>
              <th>Service Date</th>
              <th>Action</th> {/* Add a column for the action button */}
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id}>
                <td data-label="ID">{car.id}</td>
                <td data-label="Make">{car.make}</td>
                <td data-label="Model">{car.model}</td>
                <td data-label="Engine Capacity">{car.engine}</td>
                <td data-label="Car Registration No.">{car.registration}</td>
                <td data-label="Service Date">{car.serviceDate}</td>
                <td data-label="Action">
                  {/* Wrap button in a div for better responsiveness */}
                  <div className="action-button-wrapper">
                    <button className="open-button" onClick={() => handleOpenModal(car)}>Open</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for adding a new car */}
      {showPopup && (
        <AddCarForm onAddCar={handleAddCar} onClose={() => setShowPopup(false)} />
      )}

      {/* Modal for car details */}
      {selectedCar && (
        <CarDetailsModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
};

export default CarTable;
