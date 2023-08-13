import {  useEffect } from 'react'

import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";


export const App = () => {

  // useEffect(() => {
  //   setContacts(JSON.parse(localStorage.getItem('contacts')) || [])
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])



    return (
      <div className='phonebookBlock'>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );

};
