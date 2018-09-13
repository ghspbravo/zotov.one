import React, { Component } from 'react'
import { skillsLoader } from '../animations';

export default class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0,
        }
    }

    componentDidMount() {
        skillsLoader()
    }

    titleStyle = {
        fontSize: window.innerWidth < 568 ? '12vw' : '7vw',
        border: 'none',
        outline: 'none',
        display: 'block',
        marginLeft: 'auto'
    }

    render() {
        if (window.innerWidth > 568) return (
            <section id='skills' style={{ backgroundColor: '#363BAE', color: 'white' }}>
                <button style={{ ...this.titleStyle, color: this.state.current === 0 ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 0 ? 'white' : 'transparent' }}
                    onClick={() => this.setState({ current: 0 })}>DEVELOPMENT</button>
                <button style={{ ...this.titleStyle, color: this.state.current === 1 ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 1 ? 'white' : 'transparent' }}
                    onClick={() => this.setState({ current: 1 })}>DESIGN</button>
                <button style={{ ...this.titleStyle, color: this.state.current === 2 ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 2 ? 'white' : 'transparent' }}
                    onClick={() => this.setState({ current: 2 })}>BRANDING</button>
                {this.state.current === 0
                    ? <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                        <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>Our team has been developing websites since 2015, and has since continued to improve and improve its skills in this field. When creating websites, we take into account not only the marketing component, but also pay great attention to visualization. </p>
                        <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>
                            To understand our approach to the development of sites, it is enough to get acquainted with our works, which are awarded admiration and stand out among the works of competitors. For us, any site is the face of the company, and the aesthetic component plays an important role.</p>
                    </div>
                    : this.state.current === 1
                        ? <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>Design is our special love. Qualitatively designed website or application is a powerful marketing tool of any business, and we will gladly help you in developing an excellent design and visual images. </p>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>We love a functional and modern interface, with great desire we will implement all your desired wishes and provide the maximum user experience.</p>
                        </div>
                        : <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>Branding is an important part of IT products. This applies to small and large businesses. We help companies and start-ups identify the brand basics, which includes identity, typography and preparation of marketing products. This is the main list of services that our company provides, which can fully meet your needs.</p>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>As a rule, we create branding in conjunction with work on the development of websites or mobile applications. Therefore, if you create a turnkey product, our agency will be able to take on the solution of all tasks, from branding to the launch of your product.</p>
                        </div>
                }
            </section>
        )
        else return (
            <section id='skills' style={{ backgroundColor: '#363BAE', color: 'white' }}>
                <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white' }}>Development</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>Our team has been developing websites since 2015, and has since continued to improve and improve its skills in this field. When creating websites, we take into account not only the marketing component, but also pay great attention to visualization. </p>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>To understand our approach to the development of sites, it is enough to get acquainted with our works, which are awarded admiration and stand out among the works of competitors. For us, any site is the face of the company, and the aesthetic component plays an important role.</p>
                </div>

                <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white', marginTop: '20vh' }}>Design</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>Design is our special love. Qualitatively designed website or application is a powerful marketing tool of any business, and we will gladly help you in developing an excellent design and visual images. </p>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>We love a functional and modern interface, with great desire we will implement all your desired wishes and provide the maximum user experience.</p>
                </div>

                <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white', marginTop: '20vh' }}>Branding</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>Branding is an important part of IT products. This applies to small and large businesses. We help companies and start-ups identify the brand basics, which includes identity, typography and preparation of marketing products. This is the main list of services that our company provides, which can fully meet your needs.</p>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>As a rule, we create branding in conjunction with work on the development of websites or mobile applications. Therefore, if you create a turnkey product, our agency will be able to take on the solution of all tasks, from branding to the launch of your product.</p>
                </div>
            </section>
        )
    }
}
