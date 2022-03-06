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
    <div className='hi'>
      <div className="Home">
        <div className='left'>
          <img src='../../assets/me.jpg' width={400}/>
        </div>
        <div className='right'>
          {
            myinfos.length > 0 && (myinfos.map((item, key)=>(
              <div key={key} className="intro">
                <div>
                  <h1>Hi, I'm {item.name}({item.nickname})</h1>
                  <h1 className="job">{item.intro}</h1>
                  <h1>based in Thailand</h1>
                </div>
                
                {/*<div className='r-buttom'>
                  <h1>Contact Me</h1>
                  <h2>Email: {item.email}</h2>
                  <h2>Phone: {item.phone}</h2>
                </div>*/}
                <div className='container'>
                  <div className='card-contact'>
                    <div className='text-card'>
                      <h2>Contact Me</h2>
                      <div className='email'>
                        <h3>Email: {item.email}</h3>
                      </div>
                      <div className='phone'>
                        <h3>Phone: {item.phone}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )))
          }
        </div>
      </div>
    </div>      
  );
}

export default App;