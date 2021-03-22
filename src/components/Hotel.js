import React, {useState} from "react";

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


  </div>
  )
};

export default Hotel;