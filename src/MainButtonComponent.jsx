import React, { useEffect, useState } from 'react';
import axios from "axios";
import './common.css'
import Table from './Table';
import Products from './Products';




function MainButtonComponent() {
  const [showComponent, setShowComponent] = useState(false);
  const [addListButton, setAddListButton] = useState(true);
  const [showProductButton, setShowProductButton] = useState(false);
  const [fetchApiData, setFetchApiData] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => setFetchApiData(res.data))
    .catch(re => console.log('re===', re));
  }, [])

  const addItemsClick = () => {
      setShowComponent(false);
      setAddListButton(true);
      setShowProductButton(false);
      // var element = document.getElementsByClassName("additemBtn");
      // element.classList.add("clickAdditemBtn");
  };
  const showProductClick = () => {
      setShowComponent(true);
      setShowProductButton(true);
      setAddListButton(false);
      // var element = document.getElementsByClassName("showitemBtn");
      // element.classList.add("clickShowitemBtn");
      
    
  };
  return <>
    <div className='buttonWrapper'>
      <button className={`additemBtn ${addListButton ? 'additemBtnClick' : ''}`} onClick={addItemsClick}>Add Items List</button>
      <button className={`showitemBtn ${showProductButton ? 'showitemBtnClick' : ''}`} onClick={showProductClick}>Show Prodecut</button>
    </div>
    {showComponent ? <Products fetchApiData={fetchApiData}/> : <Table />}
  </>


}
export default MainButtonComponent;
