import React, { Component } from 'react'
import { openMobileNav } from '../animations';

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.innerHeight - document.querySelector('#container').getBoundingClientRect().top - window.innerHeight * 0.4 > 0 && this.state.viewSection !== 0) this.setState({ current: 0 })
            if (window.innerHeight - document.querySelector('#history').getBoundingClientRect().top - window.innerHeight * 0.55 > 0 && this.state.current !== 1) this.setState({ current: 1 })
            if (window.innerHeight - document.querySelector('#portfolio').getBoundingClientRect().top - window.innerHeight * 0.6 > 0 && this.state.current !== 2) this.setState({ current: 2 })
            if (window.innerHeight - document.querySelector('#skills').getBoundingClientRect().top - window.innerHeight * 0.8 > 0 && this.state.current !== 3) this.setState({ current: 3 })
            if (window.innerHeight - document.querySelector('#contacts').getBoundingClientRect().top - window.innerHeight * 0.9 > 0 && this.state.current !== 4) this.setState({ current: 4 })
        })
    }

    handleMobileNavOpen = () => {
        openMobileNav(document.querySelector('#mobileNav'))
    }
    handleMobileNavClose = () => {
        document.querySelector('#mobileNav').style.display = 'none';
        document.querySelector('html').style.overflowY = 'scroll'
        document.querySelector('#open-burger').style.display = 'block';
        document.querySelector('#close-burger').style.display = 'none';
    }

    render() {
        if (window.innerWidth > 992) return (
            <nav id='desktop_nav' style={{ position: 'fixed', zIndex: 10, display: 'flex', transformOrigin: 'left', transform: 'rotate(-90deg) translate(-100%, 100%)' }}>
                <a href="#container" style={{ textDecoration: 'none', color: this.state.current === 0 ? 'white' : '#b7b3b3', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>ZOTOV</a>
                <a href="#history" style={{ textDecoration: 'none', color: this.state.current === 1 ? '#363BAE' : '#b7b3b3', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Our history</a>
                <a href="#portfolio" style={{ textDecoration: 'none', color: this.state.current === 2 ? '#363BAE' : '#b7b3b3', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Portfolio</a>
                <a href="#skills" style={{ textDecoration: 'none', color: this.state.current === 3 ? 'white' : '#b7b3b3', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Services</a>
                <a href="#contacts" style={{ textDecoration: 'none', color: this.state.current === 4 ? '#363BAE' : '#b7b3b3', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Contacts</a>
            </nav>
        )
        if (window.innerWidth <= 992) return (
            <div id='mobile_nav'>
                <svg id='open-burger' style={{ position: 'fixed', right: '5vw', top: '6.25vh', zIndex: '10' }} onClick={() => this.handleMobileNavOpen()} width='25' height='25'>
                    <line y1='1' y2='1' x2='25' style={{ stroke: this.state.current === 0 ? 'rgb(255,255,255)' : this.state.current === 1 ? 'black' : this.state.current === 2 ? 'black' : this.state.current === 3 ? 'white' : 'black' , strokeWidth: 2 }} />
                    <line y1='13' x2='25' y2='13' style={{ stroke: this.state.current === 0 ? 'rgb(255,255,255)' : this.state.current === 1 ? 'black' : this.state.current === 2 ? 'black' : this.state.current === 3 ? 'white' : 'black' , strokeWidth: 2 }} />
                    <line y1='24' y2='24' x2='25' style={{ stroke: this.state.current === 0 ? 'rgb(255,255,255)' : this.state.current === 1 ? 'black' : this.state.current === 2 ? 'black' : this.state.current === 3 ? 'white' : 'black' , strokeWidth: 2 }} />
                </svg>
                <div id='mobileNav' style={{
                    display: 'none',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    zIndex: '99',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    backgroundColor: 'rgba(54, 59, 174, 0.9)',
                }} onClick={() => this.handleMobileNavClose()}>
                    <svg id='close-burger' style={{ position: 'fixed', right: '5vw', top: '6.25vh', zIndex: '10' }} onClick={() => this.handleMobileNavClose()} width='25' height='25'>
                        <line y1='1' y2='24' x2='25' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                        <line y1='24' y2='1' x2='25' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                    </svg>
                    <nav>
                        <a href="#container" style={{ textDecoration: 'none', color: 'white', padding: '2.3vh 1.5vw', display: 'block', textAlign: 'center', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>ZOTOV</a>
                        <a href="#history" style={{ textDecoration: 'none', color: 'white', padding: '2.3vh 1.5vw', display: 'block', textAlign: 'center', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Our history</a>
                        <a href="#portfolio" style={{ textDecoration: 'none', color: 'white', padding: '2.3vh 1.5vw', display: 'block', textAlign: 'center', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Portfolio</a>
                        <a href="#skills" style={{ textDecoration: 'none', color: 'white', padding: '2.3vh 1.5vw', display: 'block', textAlign: 'center', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Services</a>
                        <a href="#contacts" style={{ textDecoration: 'none', color: 'white', padding: '2.3vh 1.5vw', display: 'block', textAlign: 'center', margin: '0 1vh', fontSize: '20px', fontWeight: '100' }}>Contacts</a>
                    </nav>
                </div>
            </div>
        )
    }
}
