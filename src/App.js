import Contact from './Components/Contact';
import Navbar from './Components/navbar';
import Navigation from './Components/Navigation';
import ViewContact from './Components/ViewContact';
import EditContact from './Components/EditContact';
import AddContact from './Components/Addcontact';
import { Routes,Route, Navigate } from 'react-router-dom';
import ContactList from './Components/ContactList';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={<AddContact />} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact disabled={true} />} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact disabled={false} />} />
      </Routes>
    </div>
  )
}
export default App;
