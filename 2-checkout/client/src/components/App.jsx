import React from 'react';
import { useState } from 'react';
import AddAccount from './AddAcount.jsx';
import ShipAddress from './ShipAddress.jsx';
import AddPayment from './AddPayment.jsx';
import Summary from './Summary.jsx'; 
import request from '../request.js';
import _ from 'underscore'
import axios from 'axios';




const App = ({cookie}) => { 
    const [checkout, showCheckout] = useState(true);
    const [account, showAccount] = useState(false);
    const [address, showAddress] = useState(false);
    const [payment, showPayment] = useState(false);
    const [summary, showSummary] = useState(false);
    const [summaryObj, setSummary] = useState({});
    const [username, setUsername] = useState('');


    
    const APIPostAccount = (obj) => {
        var url = `http://localhost:3000/signup`
        setUsername(obj.user_name)
        // obj.cokie = cookie;
        request.create(url,obj)
    }

    const APIPostAddress = (obj) => {
        var url = `http://localhost:3000/contact`
        obj.user_name = username;
        request.create(url,obj)
    }

    const APIPostPayment = (obj) => {
        var url = `http://localhost:3000/payment`
        obj.user_name = username;
        request.create(url,obj)
    }


    const APIGetSummary = () => {
        console.log('here')
        var url = `http://localhost:3000/info/${username}`
        axios.get(url).then((data)=>{
            console.log(data.data);
            setSummary(data.data)
            console.log('success!')
        }).catch(err=>{
            console.error(err)
        });
    }

    const openAccountPage = () => {
        showAccount(!account);
        showCheckout(false);
    }

    const openAddressPage = () => {
        showAddress(!address);
        showAccount(false);

    }

    const openPaymentPage = () => {
        showPayment(!payment)
        showAddress(false);
    }

    const openSummaryPage = () => {
        showSummary(!summary);
        showPayment(false);
        APIGetSummary();
        
    }

    return (
    <div>
        <div>
            {checkout? (<button onClick={openAccountPage}> CHECKOUT!!!!</button>) : null}
        </div>
        <div> 
            {account ? <AddAccount openAddressPage={openAddressPage} API={APIPostAccount}/>: null}
        </div>
        <div> 
            {address ? <ShipAddress openPaymentPage={openPaymentPage} API={APIPostAddress}/>: null}
        </div>
        <div> 
            {payment ? <AddPayment openSummaryPage={openSummaryPage} API={APIPostPayment}/>: null}
        </div>
        <div> 
            {summary ? <Summary summaryObj={summaryObj} showCheckout={showCheckout} showSummary={showSummary}/>: null}
        </div>
    </div>
    );
}
export default App;


