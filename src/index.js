import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>KRCKA</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>
      <main>
        <h2>Welcome to KRCKA</h2>
        <p>Your trusted source for kosher certification information.</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} KRCKA. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
