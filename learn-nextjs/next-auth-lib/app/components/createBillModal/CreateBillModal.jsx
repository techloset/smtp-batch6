"use client"
import React, { useState } from 'react';
import styles from '../../../styles/CreateBillModal.module.css'; // Import your CSS file

const CreateBillModal = ({ isOpen, onClose, onCreate }) => {
  const [consumerNumber, setConsumerNumber] = useState('');
  const [units, setUnits] = useState('');
  const [address, setAddress] = useState('');

  const [status, setStatus] = useState('');

  const handleCreate = async () => {
    try {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "units": parseInt(units),
        "consumerNumber": consumerNumber,
        "address": address,
        "status": false
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      await fetch("http://localhost:3000/api/bills", requestOptions)

      alert("Succesfully data created")
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.show : ''}`}>
      <h2>Create Bill</h2>
      <label>Consumer Number:</label>
      <input type="text" value={consumerNumber} onChange={(e) => setConsumerNumber(e.target.value)} />
      <br />

      <label>Units:</label>
      <input type="text" value={units} onChange={(e) => setUnits(e.target.value)} />
      <br />



      <label>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />

      <label>Status:</label>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      <br />
      <button onClick={handleCreate}>Create</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CreateBillModal;
