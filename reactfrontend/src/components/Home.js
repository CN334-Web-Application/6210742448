import './Home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [myinfos, setMyinfos] = useState([])

  useEffect(() => {
      async function getAllMyinfo() {
        try {
          const myinfos = await axios.get("http://127.0.0.1:8000/api/myinfo")
          setMyinfos(myinfos.data)
          console.log("myinfos: ",myinfos)
        } catch(error) {
          console.log(error)
        }
      }
      getAllMyinfo();
  }, [])

  return (
    <div className="Home">
      <div className='left'>
        {
          myinfos.length > 0 && (myinfos.map((item, key)=>(
            <div key={key} className="intro">
              <div>
                <h1>Hi, I'm {item.name}({item.nickname})</h1>
                <h1 className="job">{item.intro}</h1>
                <h1>based in Thailand</h1>
              </div>
              <div className='l-buttom'>
                <h1>Contact Me</h1>
                <h2>Email: {item.email}</h2>
                <h2>Phone: {item.phone}</h2>
              </div>
            </div>
          )))
        }
      </div>
      <div className='right'>
        <img src='../../assets/me.jpg' width={400}/>
      </div>
    </div>
  );
}

export default App;