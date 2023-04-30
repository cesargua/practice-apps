import React from 'react';


const ShipAddress = ({openPaymentPage, API}) => {
    const submitHandler= (e)=> {
        e.preventDefault();
        var addressObj= {
            user_address: e.target.user_address.value,
            user_city: e.target.user_city.value,
            user_state: e.target.user_state.value,
            user_zipcode: e.target.user_zipcode.value,
            user_phonenumber: e.target.user_phonenumber.value
        }
        API(addressObj);
        openPaymentPage();
    }
    return (
        <div>
            <h1>Enter Shipping Address</h1> 
            <form onSubmit={submitHandler} > 
                <input id="user_address" type="text" placeholder='Enter Street Address' />
                <input id="user_city" type="text" placeholder='Enter City' />
                <input id="user_state" type="text" placeholder='Enter State' />
                <input id="user_zipcode" type="text" placeholder='Enter zipcode' />
                <input id="user_phonenumber" type="text" placeholder='Enter Phone Number' />
                <input type="submit" />
            </form>
        </div>
    );

}

export default ShipAddress;