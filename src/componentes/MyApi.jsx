import React from 'react';
import MyModal from './MyModal';
import Elim from './Elim';
import {useEffect, useState, useRef} from 'react';

function MyApi(){
 const [list, setList] = useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(setList);
 }, []);
  
 return (
   <div>
      {list.map(post => 
                    <li className='liInfoApi'  id={"li"+post.id} key={post.id}>
                        <h4>{post.title}</h4>
                         {/* <Button id={post.id}>Ver detalles</Button> 
                         <Modal>Aca</Modal>  */}
                         <MyModal  />
                        <Elim id={post.id}/>
                    </li>)}
    </div>
  );
}
export default MyApi;

