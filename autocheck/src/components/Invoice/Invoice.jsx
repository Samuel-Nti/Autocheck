import React from 'react';
import './Invoice.css'; // External CSS for styling

const Invoice = () => {
  const invoiceData = {
    clientLogo: 'client-logo.png', // Replace with your logo path or URL
    companyName: 'Auto Service Company',
    companyAddress: '1234 Main Street, City, Country',
    companyPhone: '+123 456 789',
    clientName: 'John Doe',
    clientAddress: '5678 Oak Avenue, City, Country',
    clientPhone: '+987 654 321',
    invoiceNumber: 'INV-001',
    invoiceDate: '2024-09-16',
    dueDate: '2024-10-16',
    services: [
      { description: 'Engine Oil Change', quantity: 1, unitPrice: 100 },
      { description: 'Gearbox Oil Replacement', quantity: 1, unitPrice: 120 },
      { description: 'Rear Axle Oil Replacement', quantity: 1, unitPrice: 110 },
    ],
  };

  const calculateTotal = () => {
    return invoiceData.services.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  };

  return (
    <div className="invoice-container">
      {/* Client Logo */}
      <div className="invoice-header">
        <img src={invoiceData.clientLogo} alt="Client Logo" className="client-logo" />
        <div className="company-details">
          <h2>{invoiceData.companyName}</h2>
          <p>{invoiceData.companyAddress}</p>
          <p>{invoiceData.companyPhone}</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="invoice-info">
        <div className="client-details">
          <h4>Bill To:</h4>
          <p><strong>{invoiceData.clientName}</strong></p>
          <p>{invoiceData.clientAddress}</p>
          <p>{invoiceData.clientPhone}</p>
        </div>
        <div className="invoice-meta">
          <p><strong>Invoice #:</strong> {invoiceData.invoiceNumber}</p>
          <p><strong>Invoice Date:</strong> {invoiceData.invoiceDate}</p>
          <p><strong>Due Date:</strong> {invoiceData.dueDate}</p>
        </div>
      </div>

      {/* Service Table */}
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
              <td>${service.unitPrice.toFixed(2)}</td>
              <td>${(service.unitPrice * service.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoice Total */}
      <div className="invoice-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>

      {/* Footer */}
      <div className="invoice-footer">
        <p>Thank you for your business!</p>
        <p>Please make payment by the due date.</p>
      </div>
    </div>
  );
};

export default Invoice;
