// components/BillList.js
import React from 'react';
import clsx from 'clsx';

import styles from '../../../styles/BillList.module.css'; // Import your CSS file

const BillList = ({ bills }) => {
  return (
    <div className={styles.billList}>
      <h2>Bill List</h2>
      <table>
        <thead>
          <tr className={styles.billItem}>
            <th>Consumer</th>
            <th>Units</th>
            <th>Address</th>
            <th className={styles.status}>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills?.map((bill) => (
            <tr key={bill.id} className={styles.billItem}>
              <td>{bill.consumerNumber}</td>
              <td>{bill.units}</td>
              <td>{bill.address}</td>
              <td className={bill.status ? styles.paid : styles.notpaid}>{bill.status ? "Paid" : "Not Paid"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillList;
