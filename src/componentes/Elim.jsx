import React from 'react';

export default function Elim({id}) {

  return (
    <button id={id} onClick={()=> document.getElementById(`li${id}`).remove()}>Eliminar</button>
  )
}
