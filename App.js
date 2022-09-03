import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function App() {
  const [data,setData]=useState([]);
  const [isOpen, setisOpen] = useState(false)
  const [selectedCard, setselectedCard] = useState({})

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
    .then((result)=>{
    result.json().then((resp)=>{
     setData(resp) 
    });

    })

},[])
  return (
<>
    <div className="center container">
    <Modal isOpen={isOpen} data={selectedCard}/>
    {
      data.map((item)=>{
        return <Card data={item} setselectedCard={setselectedCard}/>
      })
    }
    </div>
    
</>

  );
}

export default App;
