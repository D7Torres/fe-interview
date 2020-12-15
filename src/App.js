import React from 'react';
import Tabs from './components/Tabs/Tabs.tsx';

const App = () => (
  <Tabs tabNames={['Bills', 'Transactions']}>
    <div>Tab 1 content</div>
    <div>Tab 2 content</div>
  </Tabs>
);

export default App;
