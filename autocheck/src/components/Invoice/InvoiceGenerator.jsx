import React, { useState } from 'react';
import './InvoiceGenerator.css';

const ProductRow = ({ product, index, handleProductChange }) => (
  <tr key={index}>
    <td>
      <input
        type="number"
        value={product.quantity}
        onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
      />
    </td>
    <td>
      <input
        value={product.product}
        onChange={(e) => handleProductChange(index, 'product', e.target.value)}
      />
    </td>
    <td>
      <input
        type="number"
        value={product.unitPrice}
        onChange={(e) => handleProductChange(index, 'unitPrice', e.target.value)}
      />
    </td>
    <td>{product.amount}</td>
  </tr>
);

const InvoiceModal = ({
  receiptNumber, date, products, total, customerName, vehicleReg, toggleModal, showModal
}) => {
  if (!showModal) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>INVOICE DETAILS</h2>
        <p>Receipt Number: {receiptNumber}</p>
        <p>Date: {date}</p>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow key={index} product={product} />
            ))}
          </tbody>
        </table>
        <h3 className="total">Total: {total}</h3>
        <p>Customer Name: {customerName}</p>
        <p>Vehicle Registration: {vehicleReg}</p>
        <div className="signature-section">
          <p>______________________________</p>
          <p>Signature and Stamp</p>
        </div>
        <footer>
          <p>Thanks for doing business with us, please come again</p>
          <p>GO WELL GO SHELL</p>
        </footer>
        <div className="modal-actions">
          <button onClick={toggleModal}>Close</button>
          <button onClick={() => window.print()}>Print</button>
          <button>Send to Email</button>
          <button>Scan QR Code</button>
        </div>
      </div>
    </div>
  );
};

const InvoiceGenerator = () => {
  const [receiptNumber, setReceiptNumber] = useState('');
  const [date, setDate] = useState('');
  const [products, setProducts] = useState([{ quantity: '', product: '', unitPrice: '', amount: '' }]);
  const [customerName, setCustomerName] = useState('');
  const [vehicleReg, setVehicleReg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);

  const addProduct = () => {
    setProducts([...products, { quantity: '', product: '', unitPrice: '', amount: '' }]);
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    if (field === 'quantity' || field === 'unitPrice') {
      newProducts[index].amount = (newProducts[index].quantity * newProducts[index].unitPrice) || 0;
    }
    setProducts(newProducts);
    calculateTotal(newProducts);
  };

  const calculateTotal = (products) => {
    const newTotal = products.reduce((sum, product) => sum + parseFloat(product.amount || 0), 0);
    setTotal(newTotal);
  };

  const toggleModal = () => {
    if (!receiptNumber || !date || !customerName) {
      alert("Please fill in all the required fields.");
      return;
    }
    setShowModal(!showModal);
  };

  return (
    <div className="invoice-generator">
      <h1>SPINTEX INDUSTRIAL SHELL STATION</h1>
      <p>Company Name: <strong>LATCHVIEW VENTURES - (BENZGATE)</strong></p>
      <p>Customer Service Number: <strong>0207 0150 000</strong></p>
      <p>For Customer Complaints: <strong>0242 508 864</strong></p>

      <div className="form-section">
        <div className="form-group">
          <label>RECEIPT NO.: </label>
          <input value={receiptNumber} onChange={(e) => setReceiptNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={index}
                product={product}
                index={index}
                handleProductChange={handleProductChange}
              />
            ))}
          </tbody>
        </table>

        <button onClick={addProduct}>Add Product</button>
        <h3 className="total">Total: {total}</h3>

        <div className="form-group">
          <label>Customer Name: </label>
          <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Vehicle Registration (GE-1234-23): </label>
          <input value={vehicleReg} onChange={(e) => setVehicleReg(e.target.value)} />
        </div>

        <button onClick={toggleModal}>Generate Invoice</button>

        <InvoiceModal
          receiptNumber={receiptNumber}
          date={date}
          products={products}
          total={total}
          customerName={customerName}
          vehicleReg={vehicleReg}
          toggleModal={toggleModal}
          showModal={showModal}
        />
      </div>
    </div>
  );
};

export default InvoiceGenerator;
