import axios from 'axios';


var request = {

    create: (url,data) => {
        axios.post(url,data).then(()=>{
            console.log('success!')
        }).catch(err=>{
            console.error(err)
        });
    }

    // retrieve: (url) => {
    //     axios.get(url).then(()=>{
    //         console.log('success!')
    //     }).catch(err=>{
    //         console.error(err)
    //     });
    // }
}

export default request;