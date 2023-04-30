import React from "react";
import WordListEntry from "./WordListEntry.jsx";


const WordList = ({searchWord, glossary, editWord, deleteWord}) => {
    var filteredDict = glossary.filter(word=>{
        var term = word.term
        if(searchWord === '') return word;
        return term.toLowerCase().includes(searchWord.toLowerCase());
    })

    // console.log(glossary);
    return (
        <div>
            <ol>
            {filteredDict.map(item=><WordListEntry item={item} editWord={editWord} deleteWord={deleteWord} />)}
            </ol>
        </div>
    )
}

export default WordList;

