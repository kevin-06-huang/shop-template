import * as React from 'react';

import './Store.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class Store extends React.Component {
  public render() {
    return (
      <div className="Store">
        <header className="Store-header">
          <h1 className="Store-title">Template store</h1>
        </header>
        <nav className="navbar">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </nav>
        <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
      </div>
    );
  }
}

export default Store;
