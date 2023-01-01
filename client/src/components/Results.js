import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Results() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/api/results');
      const data = await resp.data;
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {users.map((data) => {
          return (
            <li key={data.username}>
              Username is {data.username} Age is {data.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
