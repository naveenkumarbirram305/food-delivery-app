import React from 'react'

const IndexedDB = () => {


  const request = indexedDB.open('CRM', 1);
  // request.onerror = (event) => {
  //   console.error(`Database error: ${event.target.errorCode}`);
  // };

  // request.onsuccess = (event) => {
  //   console.error(`Database Success: ${event.target}`);
  // };
  request.onupgradeneeded = (event) => {
    let db = event.target.result;
    console.log("db",db)

    // create the Contacts object store 
    // with auto-increment id
    let store = db.createObjectStore('Contacts', {
      autoIncrement: true
    });

    // create an index on the email property
    let index = store.createIndex('email', 'email', {
      unique: true
    });
  };

  function insertContact(db, contact) {
    // create a new transaction
    const txn = db.transaction('Contacts', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Contacts');
    //
    let query = store.put(contact);

    // handle success case
    query.onsuccess = function (event) {
        console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
        console.log(event.target.errorCode);
    }

    // close the database once the 
    // transaction completes
    txn.oncomplete = function () {
        db.close();
    };
}
  request.onsuccess = (event) => {
    const db = event.target.result;

    insertContact(db, {
        email: 'john.doe@outlook.com',
        firstName: 'John',
        lastName: 'Doe'
    });

    insertContact(db, {
        email: 'jane.doe@gmail.com',
        firstName: 'Jane',
        lastName: 'Doe'
    });
};

  return (
    <div>\INDEXED</div>
  )
}
export default IndexedDB
