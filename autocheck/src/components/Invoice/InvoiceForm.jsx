import React, { useState } from 'react';
import './InvoiceForm.css'; // External CSS for styling

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    clientLogo: '',
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    invoiceNumber: '',
    invoiceDate: '',
    dueDate: '',
    services: [{ description: '', quantity: 1, unitPrice: 0 }],
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const handleServiceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedServices = [...invoiceData.services];
    updatedServices[index][name] = value;
    setInvoiceData({ ...invoiceData, services: updatedServices });
  };

  const addService = () => {
    setInvoiceData({
      ...invoiceData,
      services: [...invoiceData.services, { description: '', quantity: 1, unitPrice: 0 }],
    });
  };

  const removeService = (index) => {
    const updatedServices = [...invoiceData.services];
    updatedServices.splice(index, 1);
    setInvoiceData({ ...invoiceData, services: updatedServices });
  };

  const calculateTotal = () => {
    return invoiceData.services.reduce(
      (total, item) => total + parseFloat(item.unitPrice || 0) * parseFloat(item.quantity || 1),
      0
    );
  };

  const handleGenerateInvoice = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="invoice-form-container">
      <form className="invoice-form">
        <h2 style={{ color: '#d10a0a' }}>Generate Invoice</h2>

        {/* Client Logo Input */}
        <div className="form-group">
          <label>Client Logo URL:</label>
          <input
            type="text"
            name="clientLogo"
            value={invoiceData.clientLogo}
            onChange={handleInputChange}
            placeholder="Enter logo URL"
          />
        </div>

        {/* Client Info */}
        <div className="form-group">
          <label>Client Name:</label>
          <input
            type="text"
            name="clientName"
            value={invoiceData.clientName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Client Address:</label>
          <input
            type="text"
            name="clientAddress"
            value={invoiceData.clientAddress}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Client Phone:</label>
          <input
            type="text"
            name="clientPhone"
            value={invoiceData.clientPhone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Invoice Details */}
        <div className="form-group">
          <label>Invoice Number:</label>
          <input
            type="text"
            name="invoiceNumber"
            value={invoiceData.invoiceNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Invoice Date:</label>
          <input
            type="date"
            name="invoiceDate"
            value={invoiceData.invoiceDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={invoiceData.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Service Items */}
        <h3 style={{ color: '#ffcc00' }}>Services</h3>
        {invoiceData.services.map((service, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              name="description"
              value={service.description}
              onChange={(e) => handleServiceChange(index, e)}
              placeholder="Service description"
              required
            />
            <input
              type="number"
              name="quantity"
              value={service.quantity}
              onChange={(e) => handleServiceChange(index, e)}
              min="1"
              placeholder="Quantity"
              required
            />
            <input
              type="number"
              name="unitPrice"
              value={service.unitPrice}
              onChange={(e) => handleServiceChange(index, e)}
              min="0"
              placeholder="Unit Price"
              required
            />
            <button type="button" onClick={() => removeService(index)} className="remove-btn">
              Remove Service
            </button>
          </div>
        ))}

        <button type="button" onClick={addService} className="add-btn">
          Add Service
        </button>

        <button type="button" onClick={handleGenerateInvoice} className="generate-btn">
          Generate Invoice
        </button>
      </form>

      {/* Modal for Invoice Preview */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="invoice-header">
              {invoiceData.clientLogo && (
                <img src={invoiceData.clientLogo} alt="Client Logo" className="client-logo" />
              )}
              <div className="company-details">
                <h3 style={{ color: '#d10a0a' }}>Auto Service Company</h3>
                <p>1234 Main Street, City, Country</p>
                <p>+123 456 789</p>
              </div>
            </div>

            <div className="invoice-info">
              <div className="client-details">
                <h4>Bill To:</h4>
                <p>{invoiceData.clientName}</p>
                <p>{invoiceData.clientAddress}</p>
                <p>{invoiceData.clientPhone}</p>
              </div>
              <div className="invoice-meta">
                <p>Invoice #: {invoiceData.invoiceNumber}</p>
                <p>Invoice Date: {invoiceData.invoiceDate}</p>
                <p>Due Date: {invoiceData.dueDate}</p>
              </div>
            </div>

            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.description}</td>
                    <td>{service.quantity}</td>
                    <td>${parseFloat(service.unitPrice).toFixed(2)}</td>
                    <td>${(parseFloat(service.unitPrice) * parseFloat(service.quantity)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="invoice-total">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            </div>

            <div className="invoice-footer">
              <p>Thank you for your business!</p>
              <p>Please make payment by the due date.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;
