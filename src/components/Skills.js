import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { skillsLoader } from '../animations';

class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      hovered: false
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
        <div onMouseOver={() => this.setState({ hovered: true })} onMouseLeave={() => this.setState({ hovered: false })} style={{ width: 'fit-content', marginLeft: 'auto' }}>
          <button style={{ ...this.titleStyle, color: this.state.current === 0 && !this.state.hovered ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 0 && !this.state.hovered ? 'white' : 'transparent' }}
            onClick={() => this.setState({ current: 0 })}>{this.props.t("skills.development.title").toUpperCase()}</button>
          <button style={{ ...this.titleStyle, color: this.state.current === 1 && !this.state.hovered ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 1 && !this.state.hovered ? 'white' : 'transparent' }}
            onClick={() => this.setState({ current: 1 })}>{this.props.t("skills.design.title").toUpperCase()}</button>
        </div>
        {this.state.current === 0
          ? <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>{this.props.t("skills.development.col1")}</p>
            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>{this.props.t("skills.development.col2")}</p>
          </div>
          : <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>{this.props.t("skills.design.col1")}</p>
            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>{this.props.t("skills.design.col2")}</p>
          </div>
        }
      </section>
    )
    else return (
      <section id='skills' style={{ backgroundColor: '#363BAE', color: 'white' }}>
        <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white' }}>{this.props.t("skills.development.title")}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
          <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>{this.props.t("skills.development.col1")}</p>
          <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>{this.props.t("skills.development.col2")}</p>
        </div>

        <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white', marginTop: '20vh' }}>{this.props.t("skills.design.title")}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
          <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>{this.props.t("skills.design.col1")}</p>
          <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>{this.props.t("skills.design.col2")}</p>
        </div>
      </section>
    )
  }
}

export default withTranslation()(Skills);