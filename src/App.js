import React from 'react';
import {useState} from 'react';
import './App.css';
import Box from './Card';

function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [Buttonaction, setButtonAction,] = useState(false);
  const handleClick = () => {
    setButtonAction(true);
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setLoading(true);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section>
        <nav className="navdiv">
          <div>
             <h1 className='title'>UserCard</h1>
             <button className='titlebts'onClick={handleClick}>
                  Get Users
                </button>
          </div>         
        </nav>

        <div className="bodytextflex">
          <div className="mainflex">
            {Buttonaction ? (
              loading ? (
                <Box userData={userData} />
              ) :
               (
                <div className="loader">
                </div>
              )
            ) : (
              <div  >
                <p className="bodytext">Click on Get Users button to get users data</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;