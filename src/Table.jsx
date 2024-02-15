import React, { useState } from "react";
import Data from "../data.json";
import './Table.css'
import AddDetail from "./Form";

function Table() {

  const [data, setData] = useState(Data)
  
  return (
    <div className="wrapper">
      <AddDetail setData={setData} />

      <div className="mainDiv">
        {data.map((current, ind)=>(
          <div className="itemDivWrapper" key={ind}>
            <div className="itemDiv">{current.name}</div>
            <div className="desDiv">{current.description}</div>
            <div className="priceDiv">{current.price}</div>
            <div className=""><button className="deleteButton" onClick={() => handleDelete(current.id)}>Delete</button></div>
          </div>
        ))
        }
      </div>
    </div>
  )

  function handleDelete(id) {
    const updateData = data.filter((d) => id !== d.id)
    setData(updateData)
    setData(prevState => updateData);
  }
}

export default Table;