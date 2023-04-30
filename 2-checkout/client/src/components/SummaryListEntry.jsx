import React from 'react';


const SummaryListEntry = ({propName, prop})=> (
    <tr>
        <td>{propName}</td> <td>{prop}</td>
    </tr>
)
export default SummaryListEntry;