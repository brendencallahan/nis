import { useState, useEffect } from 'react';
import axios from 'axios';

async function getImage() {
      const resp = await axios.get('/api/results');
      const data = await resp.data;
      return data;
    }

export default function Results() {
  const [users, setUsers] = useState([]);

  setUsers(getImage());

  return <h1>{users.age}</h1>;
}
