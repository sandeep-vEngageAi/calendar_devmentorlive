import './App.css';
import React, { useState } from 'react'

import Calendar from './Calendar'
import moment from 'moment';
function App() {
  const [value, setValue] = useState(moment());

  return (
    <div className="App">
      <Calendar
      value={value}
      onChange={setValue} />
      </div>
  );
}

export default App;
