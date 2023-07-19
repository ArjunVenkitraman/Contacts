import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import Favorite from './Pages/Favourite';

function App() {
  const [contacts, setContacts] = useState([])

  const formSub = async (data) => {
    const res = await fetch("https://contact-kw0f.onrender.com/contacts", {
      method: "POST",
      headers: { "Content-type": "application/json", },
      body: JSON.stringify(data),
    });
    const newData = await res.json();
    if(res.ok){
    setContacts([...contacts, newData]);
  }
  }
  useEffect(() => {
    const getContacts = async ()=>{
      const contactsFromServer = await fetchContact();
      setContacts(contactsFromServer)
    };
    getContacts()
  }, []);

  const fetchContact= async ()=>{
    const res = await fetch("https://contact-kw0f.onrender.com/contacts");
    const data = await res.json();
    return data;
  };

  const deleteContact = async (id) => {
   
      const res = await fetch(`https://contact-kw0f.onrender.com/contacts/${id}`,{
        method:"DELETE",
      });
      if(res.status=== 200){
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
    setContacts(newContact)
  }
  }; 

  const getCon= async (id)=>{
    const res = await fetch(`https://contact-kw0f.onrender.com/contacts/${id}`);
    const data = await res.json();
    return data;
  };
  
  const favToggle = async (id) => {

    const singleCon = await getCon(id);
    const updTask = {...singleCon,fav:!singleCon.fav};

    const res =await fetch(`https://contact-kw0f.onrender.com/contacts/${id}`,{
      method: "PUT",
      headers:{"Content-type":"application/json",},
      body:JSON.stringify(updTask),
    });

    if(res.status === 200){
    let updatedContact = contacts.map((singleContact) => {
      return singleContact.id === id ? { ...singleContact, fav: !singleContact.fav } : singleContact
    })
    setContacts(updatedContact)
  }
}
  
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
        <Route exact path="/favorite" element={<Favorite contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
      </Routes>
    </>
  );
}

export default App;
