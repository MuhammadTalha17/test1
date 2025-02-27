import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('2022-01-01');
  const [endDate, setEndDate] = useState('2022-01-31');

  useEffect(() => {
    const fetchAnomalyData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/anomalies?startDate=${startDate}&endDate=${endDate}`,
          {
            mode:'no-cors',
            
          }
        );
        const data = await response.json();
        setData(data);
        
      } catch (error) {
        throw error;
      }
    }

    fetchAnomalyData();
  },
  [startDate, endDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <h1>Anomalies</h1>
      <form>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
        <br />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
        <br />
        <button type="button" onClick={() => window.location.reload()}>Refresh</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.date}</td>
              <td>{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App
