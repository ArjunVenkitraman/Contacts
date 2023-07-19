import React from 'react'

const Contacts = ({contacts,deleteContact,favToggle}) => {
  
  return (
    <>
   <div className="col-4 mt-3">
    <div className="card shadow-sm w-100">
      <div className="card-header">
        <div className="row">
          <div className="col-6">{contacts.name}</div>
          <div className="col-2 offset-4" onClick={()=>{favToggle(contacts.id)}}>
          <i className={contacts.fav?"fas fa-star text-warning":"far fa-star text-warning"}></i>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className='list-group-item'>{contacts.phone}</li>
        <li className='list-group-item'>{contacts.email}</li>
        <li className='list-group-item'>
          <button onClick={()=>{deleteContact(contacts.id)}} type='button' className='btn btn-outline-danger'>
            Delete
          </button>
        </li>
      </ul>
      </div>
    </div>
   </>
  )
}

export default Contacts