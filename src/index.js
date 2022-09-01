import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import MyImage from './tire-icon.png'; 


const root = ReactDOM.createRoot(document.getElementById('root'));


const myfetch = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.json())
    .then((data)=> {

      //logica de creacion de elementos
      data.forEach((post) => {
          const li = document.createElement('li')
          li.setAttribute('id',`li${post.id}`);
          li.innerHTML =`
              <h4>${post.title}</h4>
              
              <button id='detalle${post.id}'>ver detalle</button>
              <button id='eliminar${post.id}'>eliminar</button>

            
              `
          document.getElementById('myList').append(li)

          //logica de eliminado de elementos
          let btnEliminar = document.getElementById(`eliminar${post.id}`);
          
          btnEliminar.addEventListener("click",() =>{
            console.log(`eliminaste ${li.id}`);
            document.getElementById(`li${post.id}`).remove();
          })

          //modal con detalles
          let btnDetalles = document.getElementById(`detalle${post.id}`);
          
          btnDetalles.addEventListener("click",() =>{
            console.log(`clickeaste ver detalle ${li.id}`);

            const popup = document.createElement('div');
            popup.setAttribute('id',`detalle${post.id}`);
            popup.classList.add("popup");
            li.innerHTML =`
              <h4>${post.title}</h4>
              <div>${post.body}</div>
              <div>boton cerrar</div>
              `
          li.append(popup)
          })
      })
    })

function myLogin(){
  return <div className='myLogin' id='back'>
    <div id='mainbox'>
            <div id='leftbox'>
                <div id='marca'>
                    <img src={MyImage} alt="icon" />
                    <h4>CleanMyCar</h4>
                </div>
                <div id='india'>India's first waterless car cleaning  company</div>
            </div>
            <div id='rightbox'>
                <a href="#" id='help'>Need help?</a>
                <form>
                    <h4>Log in</h4>
                    <label for="email">Email</label>
                    <input type="email" name="" id="email" placeholder="joe@email.com"/>
                    <label for="password">Password</label>
                    <input type="password" name="" id="pass" placeholder="Enter your password"/>
                    <a href="#" id='forgot'>forgot password?</a>
                    <input id='btnLogin' type="submit" value="Login"/>
                </form>
            </div>
        </div>
  </div>
}

function myApi(){
  return <div id='myApi'>
    <nav>
      <h2>Bienvenido!</h2>
      <button id='backBtn'>back</button>
    </nav>
    <ul id='myList'>
    </ul>
  </div>

}





root.render(
  <div id='myRoot'>
    {myLogin()}
    {myApi()}
  </div>
);
