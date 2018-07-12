import * as React from 'react';
import './Store.css';

class Store extends React.Component {
  public render() {
    return (
      <div className="Store container">
        <header className="Store-header">
          <h1 className="Store-title">Template store</h1>
          <nav>
            <div className="navTab container">
                <ul>
                  <li><a href="default.asp">Home</a></li>
                  <li><a href="news.asp">News</a></li>
                  <li><a href="contact.asp">Contact</a></li>
                  <li><a href="about.asp">About</a></li>
                </ul>           
            </div>
          </nav>        
        </header>       
      </div>
    );
  }
}

export default Store;
