import React from 'react';
import GoogleLogin from "react-google-login";

const Login = (props) => {
    const {onLoginGoogle} = props;
    return (
        <div >
            <GoogleLogin className='login'
                clientId={'698040199417-lebd8hi5gt2spp3ef0iaorl6r1lg2f1g.apps.googleusercontent.com'}
                 render={(props) => (
                    <div onClick={props.onClick} />
                    )}
                buttonText="Login"
                onSuccess={result => onLoginGoogle(result)}
                onFailure={result => console.log(result)}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;