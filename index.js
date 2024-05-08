// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
    const myPromise = new Promise((resolve, reject) => {
        console.log(getUserData);
    })
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
const result = {
    
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
          street: string,
          suite: string,
          city: string,
          zipcode: string,
          geo: {
            lat: string,
            lng: string
          }
        },
        phone: string,
        website: string,
        company: {
          name: string,
          catchPhrase: string,
          bs: string
        }
    }
    
}
  


