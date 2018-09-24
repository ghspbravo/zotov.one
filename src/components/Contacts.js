import React, { Component } from 'react'

import telegram from '../resourses/social_telegram.png'
import backgroundBrand from './backgroundBrand';
import { getVH } from '../App';
import {  brandMoveContacts, contactsLoader } from '../animations';

export default class Contacts extends Component {
    componentDidMount() {
        brandMoveContacts('#contacts')
        contactsLoader()
    }
    render() {
        return (
            <section id='contacts'>
                <div style={{textAlign: 'center', zIndex: 5, position: 'relative'}}>
                    <h1 style={{marginTop: getVH(190), marginBottom: '10vh', fontSize: window.innerWidth < 992 ? window.innerWidth < 568 ? window.innerWidth < 400 ? '1.5rem' : '2rem' : '3rem' : null}}>Начнем опережать <br/> ваших конкурентов?</h1>
                    <a style={{textDecoration: 'none', color: 'black', fontSize: window.innerWidth < 992 ? window.innerWidth < 568 ? '1.8rem' : '2rem' : '3.75rem'}} href="mailto:info@zotov.one">info@zotov.one</a>
                    <p style={{marginTop: '25vh'}}>Екатеринбург, Ленина 66</p>
                    <a href="https://telegram.me/badoptimist"><img style={{marginTop: '2vh', userSelect: 'none'}} src={telegram} alt="telegram"/></a>
                </div>
                {backgroundBrand()}
            </section>
        )
    }
}
