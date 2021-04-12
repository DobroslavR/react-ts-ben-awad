import React from 'react';

import './App.css';
import { TextField } from './TextField';

function App() {
  return (
    <TextField text='hello' person={{ firstName: 'Hello', lastName: 'Wow' }}></TextField>
  );
}

export default App;
