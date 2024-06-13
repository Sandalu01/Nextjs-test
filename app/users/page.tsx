
import React, { use } from 'react';

interface User {

id:number;
name:string;

}



//server components
// fetching data from backend
const UserPage = async() => {
   const resp=await  fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}}
    //after npm run build==>npm start
    
    //when  chaching the rendering at bulid -- static rendering(server)
    //chaching the data
    
   );
   const res=await  fetch("https://jsonplaceholder.typicode.com/users",{cache: 'no-store'}
    // without chaching
  //server-side renders at runtime --- dynamic rendering(server)
   //after npm run build==>npm start

   );

   const userdata:User=await resp.json();


  return (<>
   <h1>user page data</h1>
   <p>{new Date().toLocaleTimeString()}</p>
   <ul>
        {userdata.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
  </>

   
  )
}

export default UserPage
