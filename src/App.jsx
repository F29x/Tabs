

import React, { useState } from 'react';
import './Tabs.css'; 
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="App">
      <h1>My Tabs App</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </button>
      </div>
      <div className="content">
        {activeTab === 0 ? <Page1 /> : null}
        {activeTab === 1 ? <Page2 /> : null}
        {activeTab === 2 ? <Page3 /> : null}
      </div>
    </div>
  );
};

export default App;

