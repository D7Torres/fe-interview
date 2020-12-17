import React from 'react';
// Need the next comment to import using extension. Probably my project setup
// could be different to avoid these issues. But I cannot change the project
// setup everytime I encounter an issue like this, after all this is a short challenge
// @ts-ignore
import { Bill } from '../../domains/bills/typeInterfaces.ts';
// @ts-ignore
import Tabs from '../Tabs/Tabs.tsx';
// @ts-ignore
import Bills from '../Bills/Bills.tsx';

interface AllBillsProps {
  bills: Bill[];
  fetchBills: () => void;
}

const AllBills = ({ bills, fetchBills }: AllBillsProps) => {
  React.useEffect(() => {
    fetchBills();
  }, []);

  const trueBills = bills.filter((bill) => bill.isBill);
  const potentialBills = bills.filter((bill) => !bill.isBill);

  return (
    <Tabs tabNames={['True Bills', 'Potential Bills']}>
      <Bills bills={trueBills} />
      <Bills bills={potentialBills} />
    </Tabs>
  );
};

export default AllBills;
