import React from 'react'
import Navigation from './Navigation'
import ImageComponent from './ImageComponent'
export default function Contact(props) {
  return (
    <>
    <section className='col-md-6 m-2 bg-light'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                <ImageComponent id={props.contact.image} />
                </div>
                <div className='col-md-5'>
                    <input type='text' className='form-control m-2' disabled={props.disabled} placeholder='Contact ID' value={props.contact.id} />
                    <input type='text' className='form-control m-2'  disabled={props.disabled} placeholder='Contact Name' value={props.contact.name} />
                    <input type='text' className='form-control m-2'  disabled={props.disabled} placeholder='Contact Number' value={props.contact.mobileNumber} />
                </div>
                <div className='col-md-3'>
                    <Navigation id={props.contact.id}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
