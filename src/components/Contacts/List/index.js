import React from 'react'
import { useState } from 'react';
function List({contacts,setContacts,situation}) {
  return (
    <div className='main'>
      <ul className='todo-list'>
        {
          contacts.map((item,index)=>{
            if(situation === "All"){
              return(
                <li className={item.isActive ? ``:`completed`} keyd={index}>
                  <div className='view'>
                    <input className='toggle' checked={!item.isActive} type='checkbox' onChange={()=>{
                      let array = [...contacts];
                      array[index].isActive=!array[index].isActive;
                      setContacts(array)
                    }} />
                    <label>{item.listElement}</label>
                    <button className='destroy' onClick={()=>{
                      let array2= [...contacts]
                      array2= array2.filter(function(value){
                        return value !== array2[index];
                      });
                      console.log(array2);
                      setContacts(array2);
                    }}></button>
                  </div>
                </li>
              )
            }
            else if(situation === "Active"){
              if(item.isActive){
                return(
                  <li key={index}>
                    <div className='view'>
                    <input className='toggle' checked={!item.isActive} type='checkbox' onChange={()=>{
                      let array = [...contacts];
                      array[index].isActive=!array[index].isActive;
                      setContacts(array)
                    }} />
                    <label>{item.listElement}</label>
                    <button className='destroy' onClick={()=>{
                      let array2= [...contacts]
                      array2= array2.filter(function(value){
                        return value !== array2[index];
                      });
                      console.log(array2);
                      setContacts(array2);
                    }}></button>
                      
                    </div>

                  </li>
                )
              }
            }
            else if(situation === "Completed"){
              if(!item.isActive){
                return(
                  <li key={index}>
                    <div className='view'>
                    <input className='toggle' checked={!item.isActive} type='checkbox' onChange={()=>{
                      let array = [...contacts];
                      array[index].isActive=!array[index].isActive;
                      setContacts(array)
                    }} />
                    <label>{item.listElement}</label>
                    <button className='destroy' onClick={()=>{
                      let array2= [...contacts]
                      array2= array2.filter(function(value){
                        return value !== array2[index];
                      });
                      console.log(array2);
                      setContacts(array2);
                    }}></button>
                      
                    </div>

                  </li>
                
                  
                )
              }
            }
          })
        }

      </ul>
      
    </div>
  )
}

export default List
