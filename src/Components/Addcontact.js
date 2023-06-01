import React,{useEffect,useState} from 'react'
import { ContactService } from '../Services/ContactService';

export default function Addcontact() {
    let[state,setState] =useState({
        contacts:[],
        error : ''
    });
    useEffect(()=>{
        async function fetchdata(){
        const response = ContactService.GetPhones();
        setState(contacts=response.data);
        }
    },[])
    fetchdata()
  return (
    <div>
        <p>{contacts}</p>
    </div>
  )
}

