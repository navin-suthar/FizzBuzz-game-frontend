// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/fizzbuzz', {
        values: input.split(',').map(value => parseInt(value.trim(), 10))
      });
      setOutput(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <input type="text" placeholder='Enter  values' value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div >
        <h2>Output:</h2>
        <ul>
          {output.map((item, index) => (
            <li key={index} style={{ listStyle: item === '' ? 'initial' : 'none' }}>
               {item.result}
              <ul>
                {item.divisions.map((division, idx) => (
                  <li key={idx}>{division}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
