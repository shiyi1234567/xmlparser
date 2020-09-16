import React from 'react';
import './App.css';
import * as xmlparser from './xml-parser-master/xmlParser'
import axios from 'axios'
async function App() {
  const xmlData_b = await axios.get('wordxml/word.xml');
  debugger;
  const data = new xmlparser().parseFromString(xmlData_b.data);
  return (
    <div className="App">
     测试
    </div>
  );
}

export default App;
