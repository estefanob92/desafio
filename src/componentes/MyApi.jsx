import React from 'react'


export default function MyApi() {

    fetch('https://jsonplaceholder.typicode.com/posts')
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
            //id al popup
            popup.id=`popup${post.id}`;
            //clase al popup
            popup.className="popup";
            popup.innerHTML =`
              <h4>${post.title}</h4>
              <div>${post.body}</div>
              
              `
          document.getElementById('myApi').append(popup);
          }) 
      })
    })

  return (
    <div id='myApi'>
          <nav>
            <h2>Bienvenido!</h2>
            <button id='backBtn'>back</button>
          </nav>
          <ul id='myList'>
          </ul>
    </div>
  )
}
