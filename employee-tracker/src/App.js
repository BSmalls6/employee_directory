import React from 'react';
import './App.css';
import Directory from "./pages/directory"
import Table from "./utils/table";

function App() {
  return (
    <div className="App">
      <Directory/>
      <Table/>
    </div>
  );
}

export default App;