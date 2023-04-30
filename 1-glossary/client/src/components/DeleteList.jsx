import React from 'react';



const DeleteList = ({deleteWord, id})=>{


    return(
        <div>
            <button onClick={(event)=>{deleteWord(id)}}>Delete</button>
        </div>
    )
}

export default DeleteList;