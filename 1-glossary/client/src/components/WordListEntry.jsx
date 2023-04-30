import React from "react";
import EditList from "./EditList.jsx"
import DeleteList from "./DeleteList.jsx"

const WordListEntry = ({item, editWord, deleteWord}) => {

    return (
        <li>{item.term}:
            <ul> 
                <li>Definition: {item.definition} </li> <EditList editWord={editWord} id={item.id}/> <DeleteList deleteWord={deleteWord} id={item.id}/>
            </ul>
        </li>
    );

};
export default WordListEntry;