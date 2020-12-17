import React, { useState } from 'react';
// @ts-ignore
import { Bill as BillInterface } from '../../domains/bills/typeInterfaces.ts';
import css from './Bill.module.css';

interface BillProps {
  bill: BillInterface;
}

const Bill = ({ bill }: BillProps) => {
  const [areTransactionsVisible, setAreTransactionsVisible] = useState(false);

  return (
    <div className={css.bill}>
      <button
        className={css.billName}
        onClick={() => setAreTransactionsVisible(!areTransactionsVisible)}
        type="button"
      >
        {bill.name}
      </button>
      <div className={css.transactionsCount}>{bill.transactions.length}</div>
      {areTransactionsVisible && (
        <div className={css.transactions}>
          {bill.transactions.map((transaction) => (
            <div key={transaction.id} className={css.transaction}>
              <div className={css.transactionDate}>{transaction.date}</div>
              <div className={css.transactionAmount}>
                {`£${transaction.amount}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bill;
