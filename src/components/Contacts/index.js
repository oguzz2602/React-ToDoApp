import React from 'react'
import { useState } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
function Contacts() {
    const [contacts,setContacts] = useState([]);
    const [situation, setSituation]=useState("All");

    console.log(contacts);
  return (
    <div>
        <Header contacts={contacts} setContacts={setContacts} />
        <List contacts={contacts} setContacts={setContacts} situation={situation} />
        <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation} />
      
    </div>
  )
}

export default Contacts
