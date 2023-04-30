import React from 'react';

const AddPayment = ({openSummaryPage,API}) => {
    const submitHandler= (e)=> {
        e.preventDefault();
        var paymentObj = {
            creditcard_num: e.target.creditcard_num.value,
            expire_date: e.target.expire_date.value,
            cvv: e.target.cvv.value,
            billing_zipcode: e.target.billing_zipcode.value,
        }
        API(paymentObj);
        openSummaryPage();
        
    }
    return (
        <div>
            <h1>Enter Payment Info</h1> 
            <form onSubmit={submitHandler}>
                <input id="creditcard_num" type="text" placeholder='Add Credit Card Info' />
                <input id="expire_date" type="text" placeholder='Add Expire Date' />
                <input id="cvv" type="text" placeholder='Add cvv' />
                <input id="billing_zipcode" type="text" placeholder='Add Billing Zip code' />
                <input type="submit" />
            </form>
        </div>
    );

}

export default AddPayment;