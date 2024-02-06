import React, { useState } from "react";
import './inputData.css'

function InputData(){
  const [inputarr, setInputarr] = useState([])
  const [inputdata, setInputdata] = useState({name:"", rollNo:""})
  
  function changehandle(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  
  let {name, rollNo} = inputdata; 
  function changhandle(){
    setInputarr([...inputarr, {name, rollNo}])
    console.log(inputarr)
    console.log(inputdata)
    setInputdata({name:"", rollNo:""})
  }

  return <>
    <div className="App">
      <input type="text" autoComplete="off" name='name' value={inputdata.name} onChange={changehandle} placeholder=" Enter Name"/>
      <input type="text" autoComplete="off" name='rollNo' value={inputdata.rollNo} onChange={changehandle} placeholder=" Enter Roll No"/>
      <button onClick={changhandle}>Add It</button>


      <table border={1} width="100%" cellPadding={10} border-collapse="collapse">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Roll No</td>
          </tr>
          {
            inputarr.map(
              (info, ind)=>{
                return(
                  <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </div>
    
  </>
}

export default InputData;
