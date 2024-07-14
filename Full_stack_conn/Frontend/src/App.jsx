import { useState,useEffect } from 'react'
import './App.css'
// const axios = require('axios') //this isnt working saying require is not defined in console
import axios from 'axios';

//cors => cross origin request error...if port number or url is different ana all :
function App() {
  const [jokes,setJokes] = useState([]);
  useEffect(() => {
    //data ko json vaigera me convert karne ki jarurat nahi hai..ye sab kaam axios handle kar leta hai..upper side on fetch
      axios.get('api/jokes') 
      //local host humesha thodi na likhenge..for that we use proxy..in vite.config file we have written proxy and it is object..key ke pehle vo sari value append kar deta hai..also aisa dikhata hai ki vo request usi url se aa rahi hai ..ye hota hai proxy ka fayda..  
      //agar create react app se banayi hoti to package json me update karna padta
      .then((response)=>{
        setJokes(response.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }, ); //dependancy array ki jarurat nahi hai
  return (
    <>
      <h1>Me and my FullStack</h1>
      <h2>JOKES : {jokes.length}</h2>
      {
        jokes.map((joke,index)=>( //agar paranthesis rehta to return karna padta hai..isiliye braccckets lagao...
          <div key ={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
