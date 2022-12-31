import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  //si  creamos una funcion que recibe parametro
  //para invocarlo debemos convertirlo en una funcion
  //onclick ={()=>onclickButtom(string)}
 const onClickButton = ()=>{
    props.setOpenModal(prevState => !prevState);
 }
  return (
    <button 
        className="CreateTodoButton"
        onClick={onClickButton}
    
    >+</button>
  );
}

export { CreateTodoButton };