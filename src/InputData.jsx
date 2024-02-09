import React, { useState } from "react";
import './inputData.css'

function InputData(){
  const [inputarr, setInputarr] = useState([])
  const [inputdata, setInputdata] = useState({firstName:"", lastName:""})
  
  function changehandle(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  
  let {firstName, lastName} = inputdata; 
  function changhandle(){
    setInputarr([...inputarr, {firstName, lastName}])
    console.log(inputarr)
    console.log(inputdata)
    setInputdata({firstName:"", lastName:""})
  }

  return <>
    <div className="App">
      <div className="inputWrapper">
        <input type="text" autoComplete="off" name='firstName' value={inputdata.firstName} onChange={changehandle} placeholder=" Enter First Name"/>
        <input type="text" autoComplete="off" name='lastName' value={inputdata.lastName} onChange={changehandle} placeholder=" Enter Last Name"/>
        <button onClick={changhandle}>Add It</button>
      </div>


      <table className="dataTable" border={1} width="50%" cellPadding={10} border-collapse="collapse">
        <tbody>
          <tr>
            <td className="tdHadding">Full Name</td>
          </tr>
          {
            inputarr.map(
              (info, ind)=>{
                return(
                  <tr key={ind}>
                    <td className="tdData">{info.firstName} {info.lastName}</td>
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
