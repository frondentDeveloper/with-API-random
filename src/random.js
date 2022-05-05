import React, {useState} from 'react';

function Random(props) {

    const [minVal, setMinVal] = useState("")
    const [maxVal, setMaxVal] = useState("")
    const [random, setRandom] = useState("")

    const handelRandom = () =>{
        setRandom(Math.floor(Math.random()* (maxVal - minVal + 1)+ minVal))
    };

    return (
        <>
           <div className="container">
               <div className="col-md-10 offset-sm-1">
                   <p>Random number:
                       <span>{random}</span>
                   </p>
               </div>
               <div className="numContainer">
                   <div>
                       <p>Min:</p>
                       <input type="text" value={minVal} onChange={(e)=>setMinVal(e.target.value)}/>
                   </div>
                   <div>
                       <p>Max:</p>
                       <input type="text" value={maxVal} onChange={(e)=>setMaxVal(e.target.value)}/>
                   </div>
                   <button onClick={handelRandom} className="btn btn-success mt-2">
                       Start
                   </button>
               </div>
           </div>
        </>
    );
}

export default Random;