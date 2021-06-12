import React from 'react';
import {OptForm, Feature} from '../components';
import {FaqsContainer} from '../containers/faqs';
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer';
import {HeaderContainer} from '../containers/header'


export default function Home() {
    return(
        <>
        <HeaderContainer>
        <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime</Feature.SubTitle>
            <OptForm>
                    <OptForm.Input placeholder="Email Address"/>
                    <OptForm.Button>Try it Now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        </>
    )
}