import React from 'react';


const EditListEntry = ({editWord,id}) => {

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(e.target.term.value)
            editWord(id,e.target.term.value,e.target.definition.value);
        }}>
            <input id="term" type="text" placeholder='Edit Word'/>
            <input id="definition" type="text" placeholder='Edit Definition'/>
            <input type="Submit"/>
        </form>    

    )


}

export default EditListEntry;