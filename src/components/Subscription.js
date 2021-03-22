import React, {useState, useEffect} from "react";
import LoadingMask from './LoadingMask'

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [hotel, setHotel] = useState("")


  const sendSubscribe = (e) => {
    e.preventDefault();  

    setLoader(true) 
    setShow(!show)

    fetch("api/hotels/subscribe", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, hotel: hotel})

    })
    
 
  };
  
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false)
  
  
  return (
  <div>

    { !show 
     && (
     <form onSubmit={(e) => sendSubscribe(e)}>
       <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
       />

       <input
        type="submit" 
        value="Submit"
        disabled={ !(email.includes('@') && email.includes('.'))}
       />
     </form>
      ) 
      }
    
    { loader
      && <LoadingMask />
    }

  
  </div>
)
};

export default Subscription;