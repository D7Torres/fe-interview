import React from 'react';
import { mount } from 'enzyme/build';
import Tabs from './Tabs';

const CHILDREN = [
  <div>Child 1</div>,
  <div>Child 2</div>,
  <div>Child 3</div>,
];

describe('Tabs', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Tabs />);
  });

  it('renders without crashing', () => {});

  describe('When zero children are passed', () => {
    it('renders a warning message', () => {
      expect(wrapper.text()).toContain('To use this component correctly');
    });
  });

  describe('When one child is passed', () => {
    beforeEach(() => {
      wrapper.setProps({ children: CHILDREN[0] });
    });

    it('renders a warning message', () => {
      expect(wrapper.text()).toContain('To use this component correctly');
    });
  });

  describe('When more than one child is passed', () => {
    beforeEach(() => {
      wrapper.setProps({ children: CHILDREN });
    });

    it('renders the first child', () => {
      expect(wrapper.text()).toContain('Child 1');
    });

    it('does not render the other children', () => {
      const text = wrapper.text();
      expect(text).not.toContain('Child 2');
      expect(text).not.toContain('Child 3');
    });

    describe('And no tab names are passed', () => {
      it('renders default tab names', () => {
        expect(wrapper.find('.tabs').text()).toBe('Tab 1Tab 2Tab 3');
      });
    });

    describe('And some tabNames are passed', () => {
      const TABS = ['Bills', 'Transactions'];

      beforeEach(() => {
        wrapper.setProps({ tabNames: TABS });
      });

      it('renders the passed tab names and compleates with default tab names', () => {
        expect(wrapper.find('.tabs').text()).toBe('BillsTransactionsTab 3');
      });
    });

    describe.each([
      [0], [1], [2],
    ])('And a different tab than the first one is clicked', (tabIndex) => {
      beforeEach(() => {
        wrapper.find('.tab').at(tabIndex).simulate('click');
      });

      it('renders the corresponding children', () => {
        expect(wrapper.find('.contentWrapper').contains(CHILDREN[tabIndex]))
          .toBe(true);
      });
    });
  });
});
