import React, {useState, useEffect} from "react";
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotel'
import Subscription from './components/Subscription'
import './App.css'

const App = () => {

  const [data, setData] = useState(null)

  const [loader, setLoader] = useState(true)
  
  const fetchData = () => {
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => {setData(data);setLoader(false)})
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
      
      <h1>Hotels</h1>

      {data && (
       <div>
         {data.map((hotel, i) => <Hotel hotel={hotel} key={i} />)}
       </div>
      ) }
    

      { loader
      && <LoadingMask />
      }


    </div>
  )
}

export default App
