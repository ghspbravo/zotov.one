import React, { Component } from 'react'

import Logo from '../resourses/Logo.png'
import customBG from '../customBG'
import { loader, loadContent } from '../animations';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

const languages = {
  en: "en",
  ru: "ru"
};

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLang: i18next.language // default language
    }
    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  brandStyle = {
    fontSize: '15vh',
    color: 'white',
  }

  componentDidMount() {
    if (window.pageYOffset === 0 && document) loader()
    customBG()
  }

  onLanguageChange() {
    const newLang = this.state.currentLang.includes(languages.ru) ? languages.en : languages.ru;
    this.setState({
      currentLang: newLang
    });
    this.props.i18n.changeLanguage(newLang);
  }

  render() {
    return (
      <section id='container' style={{ userSelect: 'none', backgroundColor: '#363BAE', display: 'flex', flexDirection: window.innerWidth > 992 ? 'row' : 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <a onClick={this.onLanguageChange} style={{ position: 'absolute', padding: '20px', top: '10px', left: window.innerWidth < 992 ? '5vw' : null, right: window.innerWidth > 992 ? '10px' : null, zIndex: 10, color: 'white', textDecoration: 'none' }} >
          {this.state.currentLang.includes(languages.ru) ? "ENG" : "RU"}
        </a>
        <div id="output" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '0', }}></div>
        <img onLoad={() => loadContent()} src={Logo} alt="logo" style={{
          zIndex: 5,
          width: '60vh',
          minWidth: '220px',
          objectFit: 'contain',
          maxHeight: '90vh',
          position: window.innerWidth > 992 ? 'absolute' : 'relative',
          bottom: window.innerWidth > 992 ? '20vh' : 0,
        }} />
        {window.innerWidth > 992
          ? <span className='digital' style={{
            zIndex: 5,
            ...this.brandStyle,
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            width: '100vh',

            textShadow: '20px -20px 2px rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            left: window.innerWidth > 1200 ? '78vw' : '88vw',
            top: 0
          }}>DIGITAL</span>
          : <p className='digital' style={{ marginTop: '2vh', zIndex: 5, fontSize: '5rem', color: 'white', textShadow: '5px -10px 2px rgba(0, 0, 0, 0.5)', }}>DIGITAL</p>}
        {window.innerWidth > 992
          ? <span className='agency' style={{
            zIndex: 5,
            ...this.brandStyle,
            display: 'block',
            width: '100%',

            textShadow: '20px 0px 2px rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            bottom: '2vh',
          }}>AGENCY</span>
          : <p className='agency' style={{ zIndex: 5, fontSize: '5rem', color: 'white', textShadow: '5px -10px 2px rgba(0, 0, 0, 0.5)', }}>AGENCY</p>}
      </section>
    )
  }
}

export default withTranslation()(Header);