import React from "react";
import { useState } from "react";
import EditListEntry from "./EditListEntry.jsx";


const EditList = ({editWord, id}) => {
    const [edit,setEdit] = useState(false);

    const toggleEdit =()=>{
      setEdit(!edit)
      console.log(edit);
    }
  
    return (
        <div>
          <button onClick={toggleEdit}>Edit</button>  
          {edit ? <EditListEntry editWord={editWord} id={id}/> : null}
        </div>
    )

}

export default EditList;