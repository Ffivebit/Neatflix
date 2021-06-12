import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext)
    const[emailAddress, setEmailAddress] = useState ('');
    const[password, setPassword] = useState ('');
    const[error, setError] = useState ('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
               history.push(ROUTES.BROWSE);
            })
            .catch((error)=> {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };
    return (
    <>
     <HeaderContainer>
         <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignin} method="POST">
                <Form.Input placeholder="Email address" value={emailAddress} onChange = {({target}) => setEmailAddress(target.value)} />

                <Form.Input autoComplete="off" type="password" placeholder="Password" value={password} onChange = {({target}) => setPassword(target.value)} />

                <Form.Submit disabled={isInvalid} type="submit">
                    Sign In
                </Form.Submit>
            </Form.Base>

            <Form.Text>New to NeatFlix? 
                <Form.Link to="/signup" > Sign up now.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
               This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More. 
            </Form.TextSmall>

         </Form>
     </HeaderContainer>
     <FooterContainer/>
    </>
    );
};
