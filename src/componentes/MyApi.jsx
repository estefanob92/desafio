import React from 'react';
import MyModal from './MyModal';
import Elim from './Elim';
import {useEffect, useState} from 'react';

function MyApi(){
 const [list, setList] = useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(setList);
 }, []);
  
 return (
   <div id='MyApi'>
      <nav>Bienvenido!</nav>

      {list.map(post => 
                    <li className='liInfoApi'  id={"li"+post.id} key={post.id}>
                        <h5>{post.title}</h5>
                        <MyModal title={post.title} id={post.id} />
                        <Elim id={post.id}/>
                    </li>)}
    </div>
  );
}
export default MyApi;

