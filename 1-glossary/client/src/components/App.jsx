import React, { useEffect } from "react";
import { useState } from "react";
import fakeData from '../../data'
import WordList from './WordList.jsx'
import AddWord from "./AddWord.jsx";
import Search from './Search.jsx'
import axios from 'axios';
// import dotenv from 'dotenv' 
// dotenv.config()

var url = `http://localhost:3000/api/glossary`



const App = (props) => {
    const [list, setList] = useState([])
    // console.log(list)

    const editWord = (id, newTerm, newDefn)=>{
        var editList = [...list]
        var index = editList.findIndex(prop => prop.id===id);
        editList[index].term = newTerm || list[index].term;
        editList[index].definition = newDefn || list[index].definition;
        setList(editList);
        APIPatch(editList[index])
    }

    const deleteWord = (id)=>{
        var propToDelete = list.filter(prop => prop.id===id);
        var newList= list.filter(prop => prop.id!=id);
        setList(newList);
        APIDelete(propToDelete[0]._id);
    }


    const APIPost = (data)=>{
        axios.post(url,data).then(()=>{
            console.log('Post successful')
        }).catch(err=>{
            console.error(err)
        });
    }

    const APIPatch = (newData)=>{
        var urlPlusid = `${url}/${newData._id}`
        axios.patch(urlPlusid, newData).then(()=>{
            console.log('update successful!')
        }).catch(err=>{
            console.error(err);
        })
    }

    const APIDelete = (id)=>{
        console.log('inside delete: ', id)
        var urlPlusid = `${url}/${id}`
        axios.delete(urlPlusid).then(()=>{
            console.log('Delete successful!')
        }).catch(err=>{
            console.error(err);
        })
        
    }

    const APIGetAll= () =>{
        axios.get(url).then(({data})=>{
            console.log('get request successful');
            console.log(data);
            setList(data);
        })
    }

    var [search, setSearch] = useState('')
    

    const searchHandler  = (value)=> {
        setSearch(value);
        console.log(search);
    }

    

    useEffect( ()=>{
        APIGetAll()
    },[])


    return (
    <div>
        <div> 
            <h2>Glossary</h2>
        </div>
        <div>
            <Search searchHandler={searchHandler}/>
        </div>
        <div> 
            <AddWord setList={setList} list={list} APIPost={APIPost} />
        </div>
        <div> 
            <WordList searchWord={search} glossary={list} editWord={editWord} deleteWord={deleteWord}/> 
        </div>
    </div>
    );
}

export default App;