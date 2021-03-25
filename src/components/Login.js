import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase'

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <LoginContainer>
            <LoginInner>
                <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="" ></img>
                <h1> Sign In to Sunmkim </h1>
                <p> sunmkim.slack.com </p>

                <Button onClick={signIn}>
                     Sign In to Google </Button>
            </LoginInner>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div `
    display:grid;
    place-items:center;
    height:100vh;
    background-color:#f8f8f8;
`;

const LoginInner = styled.div` 
    padding: 100px;
    text-align:center;
    background-color:white;
    border-radius:10px;
    box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img { 
        object-fit:contain;
        height:100px;
        margin-bottom:20px;
    } 
    > button {
        margin-top:50px;
        text-transform:inherit !important ;
        background-color:green !important ;
        color:white;

        
    }
`;
