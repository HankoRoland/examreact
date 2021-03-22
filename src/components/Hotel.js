import React, {useState} from "react";
import Subscription from './Subscription'

const Hotel = ({hotel}) => {
  const [show, setShow] = useState(false)
  const [showSub, setShowSub] = useState(false);
  
  
  return (
  <div>
    <h2>{hotel.name}</h2>

    {!show ? <button onClick={() => setShow(!show)} >Show More</button> : <button onClick={() => setShow(!show)} >Show Less</button>}

    
    {show && 
      <div>
        <h4>{hotel.city} ({hotel.stars})</h4>
        <button onClick={ ()=> setShowSub(true) }>Request more info about { hotel.name }</button>
      </div>

    }

    {showSub && <Subscription hotel={ hotel.name } setShowSub={setShowSub} />}

  </div>
  )
};

export default Hotel;
