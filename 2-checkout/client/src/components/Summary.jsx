import React from 'react';
import SummaryListEntry from './SummaryListEntry.jsx';

const Summary = ({summaryObj, showCheckout, showSummary})=> {
    const submitHandler= (e)=> {
        e.preventDefault();
        showSummary(false)
        showCheckout(true);
    }
    return (
        <table>
            <thead>
                <tr>    
                    <th colspan="2">Summary of Purchase</th>
                </tr>
            </thead> 
            <tbody>
                {Object.keys(summaryObj).map(prop =>
                    <SummaryListEntry propName={prop} prop={summaryObj[prop]}/>    
                )}
            </tbody>
            <button type="submit" onClick={submitHandler}>Go to homepage</button>
        </table>     
    );

}
export default Summary;