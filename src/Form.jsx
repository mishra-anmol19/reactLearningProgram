import React, { useRef } from "react";


function AddDetail(props){
  let {setData} = props

const nameRef = useRef();
const priceRef = useRef();
const descriptionRef = useRef();


  function handleValues(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const newMember = {
      id:"8",
      name,
      price,
      description,
    }
    setData(prevData => prevData.concat(newMember))
    nameRef.current.value = ""
    priceRef.current.value = ""
    descriptionRef.current.value = ""
  }

  return (
    <form className="addForm" onSubmit={handleValues}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} required></input>
      <input type="text" name="price" placeholder="Enter price" ref={priceRef} required></input>
      <input type="text" name="description" placeholder="Enter description" ref={descriptionRef} required></input>
      <button className="addButton">ADD</button>
    </form>
  )
}

export default AddDetail;