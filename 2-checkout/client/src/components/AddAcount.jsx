import React from 'react';


const AddAccount = ({openAddressPage, API}) => {
    const submitHandler= (e)=> {
        e.preventDefault();
        var accountObj = {
            user_name: e.target.user_name.value,
            email: e.target.email.value,
            user_password: e.target.user_password.value
        }
        openAddressPage();
        API(accountObj);

    }
    return (
    <div>
        <form onSubmit={submitHandler}>
            <table>
                <thead>
                    <tr>
                        <th colspan="2">Create Account!</th>
                    </tr>
                </thead>
                <tr><input id="user_name" type="text" placeholder='Enter Preffered Username'/></tr>
                <tr><input id="email"  type="text" placeholder='Enter email'/></tr>
                <tr><input id="user_password" type="password" placeholder='Enter preffered password'/></tr>
                <tr><input type="submit"/></tr>
            </table>
        </form>
    </div>
    );
}

export default AddAccount;
