import React from "react";



const AddWord = ({setList, list, APIPost}) =>{

    const addToList = (event)=>{
        event.preventDefault();
        var idNum = Date.now();
        var word = event.target.term.value;
        var def= event.target.definition.value || 'A definition';
        var newList = [...list];
        var newObj= {id: idNum, term: word, definition: def}
        newList.push(newObj);
        setList(newList);
        APIPost(newObj);
    }

    return (
        <form onSubmit={addToList} >
            <input id="term" type="text" placeholder="Enter Word" /> 
            <input id="definition" type="text" placeholder="Enter Definition" /> 
            <input type="submit" text="Add Word"  />
        </form>
    )


}

export default AddWord;