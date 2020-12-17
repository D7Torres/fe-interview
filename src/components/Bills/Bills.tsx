import React from 'react';
// Need the next comment to import using extension. Probably my project setup
// could be different to avoid these issues. But I cannot change the project
// setup everytime I encounter an issue like this, after all this is a short challenge
// @ts-ignore
import { Bill } from '../../domains/bills/typeInterfaces.ts';
import css from './Bills.module.css';

interface BillsProps {
  bills: Bill[];
}

const Bills = ({ bills }: BillsProps) => (
  <div>
    {bills.map((bill) => (
      <div key={bill.id} className={css.bill}>
        <div className={css.billName}>{bill.name}</div>
      </div>
    ))}
  </div>
);

export default Bills;
