import React from 'react';

const JWToken = () => {
    const [JWT, setJWT] = React.useState([]);
    fetch('http://127.0.0.1:8000/api-token-auth/',{
         method: "POST",
         headers:{
             'content-type' : 'application/json'
         },
         body: JSON.stringify({
             'username':'manager',
             'password':'1234'
         })
     }).then(res => res.json).then(data => {
         console.log(data);
        setJWT(data);
     });
    console.log(JWT)
    return JWT;
};

export default JWToken;