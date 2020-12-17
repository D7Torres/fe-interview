import React from 'react';
// Need the next comment to import using extension. Probably my project setup
// could be different to avoid these issues. But I cannot change the project
// setup everytime I encounter an issue like this, after all this is a short challenge
// @ts-ignore
import { Bill as BillInterface } from '../../domains/bills/typeInterfaces.ts';
// @ts-ignore
import Bill from '../Bill/Bill.tsx';

interface BillsProps {
  bills: BillInterface[];
}

const Bills = ({ bills }: BillsProps) => (
  <div>
    {bills.map((bill) => (
      <Bill key={bill.id} bill={bill} />
    ))}
  </div>
);

export default Bills;
