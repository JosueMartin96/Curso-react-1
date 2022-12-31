import React from "react";

function useLocalStorage(itemName,inicialValue){
    const [loading,setLoading] =React.useState(true);
    const [error,setError] =React.useState(false);
    const [item,setItem] =React.useState(inicialValue);
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
        
          if(!localStorageItem){
          
              localStorage.setItem(itemName,JSON.stringify(inicialValue));
              parsedItem=inicialValue;
          }else{
        
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      },1000);
    });
   
  
    const saveItem = (newItem)=>{
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
      
    };
  
    //si vas a devolver mas de 2 item se devulve un objeto {} en lugar de un arreglo []
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }
  

  export {useLocalStorage};