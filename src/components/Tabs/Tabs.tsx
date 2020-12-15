import React, { useState } from 'react';
import classnames from 'classnames';
import css from './Tabs.module.css';

interface TabsProps {
  children: React.ReactChild[];
  tabNames?: string[];
}

const renderTabs = (
  tabNames: string[],
  childrenLength: number,
  selectedTabIndex: number,
  setSelectedTabIndex: (index: number) => void,
): React.ReactNode[] => {
  const tabs: React.ReactNode[] = [];

  for (let i = 0; i < childrenLength; i += 1) {
    const tabName: string = tabNames[i] || `Tab ${i + 1}`;
    const classes: string = classnames(
      css.tab,
      { [css.tabSelected]: i === selectedTabIndex },
    );

    tabs.push(
      <button
        className={classes}
        key={tabName}
        type="button"
        onClick={() => { setSelectedTabIndex(i); }}
      >
        {tabName}
      </button>,
    );
  }

  return tabs;
};

const Tabs = ({ children, tabNames = [] }: TabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  if (!children || !children.length) {
    return <div>To use this component correctly you need to pass at least 2 children</div>;
  }

  return (
    <div className={css.tabsWrapper}>
      <div className={css.tabs}>
        {renderTabs(tabNames, children.length, selectedTabIndex, setSelectedTabIndex)}
      </div>
      <div className={css.contentWrapper}>{children[selectedTabIndex]}</div>
    </div>
  );
};

Tabs.defaultProps = {
  tabNames: [],
};

export default Tabs;
