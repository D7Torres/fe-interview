import React from 'react';
import { mount } from 'enzyme/build';
import Bills from './Bills.tsx';

const BILLS = [
  {
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
  },
  {
    categoryId: 3,
    iconUrl:
      'https://pbs.twimg.com/profile_images/1026445460179955712/BWHmmzXt.jpg',
    id: '5a5caad4fe33900100fd8ed7',
    isBill: true,
    name: 'HSBC Mortgage',
    transactions: [
      {
        amount: 1023,
        date: '2018-01-01',
        id: 1,
      },
      {
        amount: 1023,
        date: '2018-02-01',
        id: 2,
      },
      {
        amount: 1023,
        date: '2018-03-01',
        id: 3,
      },
      {
        amount: 1023,
        date: '2018-04-01',
        id: 4,
      },
      {
        amount: 1023,
        date: '2018-05-01',
        id: 5,
      },
    ],
  },
  {
    categoryId: 2,
    iconUrl:
      'https://pbs.twimg.com/profile_images/877554474776244224/Hx0FkfBI.jpg',
    id: '5a5cab18fe33900100fd8ed8',
    isBill: true,
    name: 'Netflix',
    transactions: [
      {
        amount: 19,
        date: '2018-01-02',
        id: 6,
      },
      {
        amount: 19,
        date: '2018-02-02',
        id: 7,
      },
      {
        amount: 19,
        date: '2018-03-02',
        id: 8,
      },
      {
        amount: 19,
        date: '2018-04-02',
        id: 9,
      },
      {
        amount: 19,
        date: '2018-05-02',
        id: 10,
      },
    ],
  },
];

describe('Bills', () => {
  let wrapper;
  const getBills = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Bills bills={BILLS} getBills={getBills} />);
  });

  it('renders without crashing', () => {});

  it('renders the bills passed', () => {
    BILLS.forEach((bill, index) => {
      expect(wrapper.find('Bill').at(index).prop('bill')).toBe(bill);
    });
  });
});
