import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [myinfos, setMyinfos] = useState([])

  useEffect(() => {
      async function getAllMyinfo() {
        try {
          const myinfos = await axios.get("http://127.0.0.1:8000/api/myinfo")
          console.log("myinfos: ",myinfos)
          setMyinfos(myinfos)
        } catch(error) {
          console.log(error)
        }
      }
      getAllMyinfo();
  }, [])

  return (
    <div className="App">
      <h1>This is frontend</h1>
    </div>
  );
}

export default App;
