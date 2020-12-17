import React from 'react';
import { mount } from 'enzyme/build';
import Bill from './Bill.tsx';

const BILL = {
  categoryId: 2,
  iconUrl:
    'https://pbs.twimg.com/profile_images/787957563463725056/duc0g4fp.jpg',
  id: '5a5caa8efe33900100fd8ed6',
  isBill: true,
  name: 'Sky TV',
  transactions: [
    {
      amount: 82.17,
      date: '2018-01-01',
      id: 41,
    },
    {
      amount: 82.17,
      date: '2018-02-01',
      id: 42,
    },
    {
      amount: 82.17,
      date: '2018-03-01',
      id: 43,
    },
    {
      amount: 82.17,
      date: '2018-04-01',
      id: 44,
    },
    {
      amount: 82.17,
      date: '2018-05-01',
      id: 45,
    },
  ],
};

describe('Bills', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Bill bill={BILL} />);
  });

  it('renders without crashing', () => {});

  it('renders the name of the bill', () => {
    expect(wrapper.find('.billName').text()).toBe(BILL.name);
  });

  it('does not render the transactions', () => {
    expect(wrapper.find('.transactions').exists()).toBe(false);
  });

  describe('When the name or transaction title are clicked', () => {
    beforeEach(() => {
      wrapper.find('.billName').simulate('click');
    });

    it('renders the transactions of the bills', () => {
      BILL.transactions.forEach((transaction, index) => {
        expect(
          wrapper
            .find('.transaction')
            .at(index)
            .find('.transactionDate')
            .text(),
        ).toBe(transaction.date);
        expect(
          wrapper
            .find('.transaction')
            .at(index)
            .find('.transactionAmount')
            .text(),
        ).toBe(`£${transaction.amount}`);
      });
    });

    describe('And the name or transactions title are clicked again', () => {
      beforeEach(() => {
        wrapper.find('.billName').simulate('click');
      });

      it('does not render the transactions', () => {
        expect(wrapper.find('.transactions').exists()).toBe(false);
      });
    });
  });
});
