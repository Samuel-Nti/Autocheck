import React, { useState } from "react";
import './AutoServiceForm.css';
import car from '../../assets/car.png';
import logo from '../../assets/shell.png';

const AutoServiceForm = () => {
  const initialFormData = {
    oilType: [],
    serviceDate: "",
    engineOil: "",
    gearboxOil: "",
    rearAxleOil: "",
    hydraulics: "",
    greasing: "",
    filters: [],
    nextOilChange: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPopup, setShowPopup] = useState(false);

  const oilOptions = [
    "Helix Ultra ECT C3 5W-30",
    "Helix Ultra 5W-40 SN PLUS",
    "Helix HX7 10W-40 SN CF",
    "Helix HX5 15W-40 SL CF",
  ];

  const filterOptions = [
    "Oil Filter",
    "Air Filter",
    "Hydraulic Filter",
    "Fuel Filter",
  ];

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...prevState[name], value]
        : prevState[name].filter((item) => item !== value),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const printPopup = () => {
    window.print();
  };

  return (
    <div className="service-form-container">
      <div className="car-image-section">
        <img src={car} alt="Car for service" className="car-image" />
      </div>

      <form className="service-form" onSubmit={handleSubmit}>
        <h2>AUTO CHECK CARD</h2>

        {/* Oil Type */}
        <h4>SELECT OIL TYPE</h4>
        <div className="section">
          <div className="checkbox-group">
            {oilOptions.map((oil) => (
              <label key={oil}>
                <input
                  type="checkbox"
                  name="oilType"
                  value={oil}
                  checked={formData.oilType.includes(oil)}
                  onChange={handleCheckboxChange}
                />
                {oil}
              </label>
            ))}
          </div>
        </div>

        {/* Date of Service */}
        <h4>DATE OF SERVICE</h4>
        <div className="section">
          <label>
            Service Date:
            <input type="date" name="serviceDate" onChange={handleChange} required />
          </label>
        </div>

        {/* Service Details */}
        <h4>SERVICE</h4>
        <div className="section">
          {["Engine Oil", "Gearbox Oil", "Rear Axle Oil", "Hydraulics", "Greasing"].map((service) => (
            <label key={service}>
              {service}:
              <input
                type="text"
                name={service.toLowerCase().replace(" ", "")}
                placeholder="km"
                onChange={handleChange}
                required
              />
            </label>
          ))}
        </div>

        {/* Filters */}
        <h4>SELECT FILTERS</h4>
        <div className="section">
          <div className="checkbox-group">
            {filterOptions.map((filter) => (
              <label key={filter}>
                <input
                  type="checkbox"
                  name="filters"
                  value={filter}
                  checked={formData.filters.includes(filter)}
                  onChange={handleCheckboxChange}
                />
                {filter}
              </label>
            ))}
          </div>
        </div>

        {/* Next Oil Change */}
        <h4>NEXT OIL CHANGE</h4>
        <div className="section">
          <label>
            Change Date:
            <input type="date" name="nextOilChange" onChange={handleChange} required />
          </label>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="company-logo">
        <img src={logo} alt="Service Company Logo" />
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="car-image-section">
              <img src={car} alt="Car for service" className="car-image" />
            </div>

            <h3>AUTO CHECK CARD</h3>
            <div className="popup-section">
              <h4>SELECT OIL TYPE</h4>
              {oilOptions.map((oil) => (
                <label key={oil}>
                  <input
                    type="checkbox"
                    value={oil}
                    checked={formData.oilType.includes(oil)}
                    readOnly
                  />
                  {oil}
                </label>
              ))}
            </div>

            <div className="popup-section">
              <h4>DATE OF SERVICE</h4>
              <p><strong>Date of Service:</strong> {formData.serviceDate}</p>
            </div>

            <div className="popup-section">
              <h4>SERVICE DETAILS</h4>
              {["engineOil", "gearboxOil", "rearAxleOil", "hydraulics", "greasing"].map((service) => (
                <p key={service}>
                  <strong>{service.replace(/([A-Z])/g, ' $1').trim()}:</strong> {formData[service]} km
                </p>
              ))}
            </div>

            <div className="popup-section">
              <h4>SELECT FILTERS</h4>
              {filterOptions.map((filter) => (
                <label key={filter}>
                  <input
                    type="checkbox"
                    value={filter}
                    checked={formData.filters.includes(filter)}
                    readOnly
                  />
                  {filter}
                </label>
              ))}
            </div>

            <div className="popup-section">
              <h4>NEXT OIL CHANGE</h4>
              <p><strong>Next Oil Change:</strong> {formData.nextOilChange}</p>
            </div>

            <div className="company-logo">
              <img src={logo} alt="Service Company Logo" />
            </div>

            <button onClick={() => { setShowPopup(false); resetForm(); }} className="close-popup-button">
              Close
            </button>
            <button onClick={printPopup} className="print-popup-button">
              Print
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoServiceForm;
