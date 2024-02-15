import React, {useState } from "react";
function Products(props) {
  console.log('props==============', props)
  let {fetchApiData} = props

  const [updateItem, setUpdateItem] = useState(0)
  const [note, setNote] = useState()
 
  const decreaseAddCartClick = () =>{
   setUpdateItem(prevState => updateItem + 1);
   if(updateItem >= 0 ){
    setNote(prevState => '');
  }
  
  }
  const increaseAddCartClick = () =>{
    setUpdateItem(prevState => updateItem - 1);
    if(updateItem == 0){
      setUpdateItem(prevState => 0);
      setNote(prevState => "Please Add Your Item");
    }
  }

  return(
    <>
    <div className="cartwrapper">
      <div className="itemcount">Items {updateItem}</div>
      <div className="noteText">{note}</div>
    </div>
    <div className="fetchDataMainWrapper">
      {fetchApiData.map((user, index)=>(
          <div className="fetchDataWrapper" key={index}>
            <div className="imageDiv"><img className="getImage" src={user.image} alt="getimage"></img></div>
            <div className="titleDiv">{user.title}</div>
            <div className="fetchPriceDiv">{user.price}</div>
            <div className="addCart">
              <button  onClick={() => increaseAddCartClick()} className="addCartButton">-</button>
              <div className="addItemTxt">Add Item</div>
              <button  onClick={() => decreaseAddCartClick()} className="addCartButton">+</button>
              </div>
          </div>
        ))
        }
    </div>
    </>
  )
}

export default Products;