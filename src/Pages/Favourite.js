import React from 'react'
import Contacts from '../Components/Contacts'

const Favorite = ({contacts,deleteContact,favToggle}) => {
  return (
   <>
   <div className='container my-5'>
      <div className="row justify-content my-5">
          {contacts.map((singleContact)=>{
            return (
              singleContact.fav && (
                <Contacts
                key={singleContact.id}
                favToggle={favToggle}
                deleteContact={deleteContact}
                contacts={singleContact}
                />
              )
            )
          })}
          {contacts.filter(single=>single.fav).length === 0 && <h1>No Contacts Found</h1>}
        </div>
      </div>
   </>
  )
}

export default Favorite