import React, { Component } from 'react'
import { getVH, getVW } from '../App';

import { portfolioLoader } from '../animations';

import spinner from '../resourses/spinner.gif';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

let currentLang = i18next.language;
class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.desktopImageRef = React.createRef();
    this.mobileImageRef = React.createRef();

    this.state = {
      current: 0,
      hovered: false,

      loaded: false
    }
  }

  projects = [];

  prevIndex = -1;

  componentDidMount() {
    portfolioLoader();
    this.fetchPortfolio();
  }

  fetchPortfolio() {
    fetch(`https://zotov.one/content/${i18next.language === 'ru' ? 'portfolio.json' : 'portfolio-eng.json'}`, {
      headers: { 'content-type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
        this.projects = data;
        this.setState({ loaded: true });
      })
      .catch(console.error);
  }

  componentDidUpdate() {
    if (currentLang !== i18next.language) {
      currentLang = i18next.language;
      this.fetchPortfolio();
    }

    if (this.prevIndex !== this.state.current) {
      try {
        const cacheImg = document.createElement("img");
        const cacheSrc = this.projects[this.state.current].thumbnail;
        cacheImg.src = cacheSrc;

        if (this.desktopImageRef.current) {
          this.desktopImageRef.current.src = spinner;
          this.desktopImageRef.current.style.objectFit = "contain";
        }

        if (this.mobileImageRef.current) {
          this.mobileImageRef.current.src = spinner;
          this.mobileImageRef.current.style.objectFit = "contain";
        }


        cacheImg.addEventListener("load", () => {
          if (this.desktopImageRef.current) {
            this.desktopImageRef.current.style.objectFit = "cover";
            this.desktopImageRef.current.src = cacheSrc;
          }
          if (this.mobileImageRef.current) {
            this.mobileImageRef.current.style.objectFit = "cover";
            this.mobileImageRef.current.src = cacheSrc;
          }
        })

        this.prevIndex = this.state.current;
      }
      catch (e) { }
    }
  }

  render() {
    return this.state.loaded
      ? (
        <section id='portfolio'>
          <h1 style={{ marginBottom: getVH(50) }}>{this.props.t("portfolio.title")}</h1>
          {window.innerWidth > 992
            ? <div style={{ display: 'flex' }}>
              <div style={{ padding: '0 5px', flex: '1 1 25%' }}>
                <ul onMouseOver={() => this.setState({ hovered: true })} onMouseLeave={() => this.setState({ hovered: false })}>
                  {this.projects.map((project, index) => <li key={index} style={{ margin: '10px', padding: '5px', backgroundColor: index === this.state.current && !this.state.hovered ? '#363BAE' : null, cursor: 'pointer', color: index === this.state.current && !this.state.hovered ? 'white' : 'black' }}
                    onClick={() => this.setState({ current: index })}><p>{project.title}</p></li>)}
                </ul>
              </div>
              <div style={{ flex: '1 1 50%' }}>
                <img ref={this.desktopImageRef} data-src={this.projects[this.state.current].thumbnail} alt="project" style={{ height: getVH(350), width: '100%', objectFit: 'cover' }} />
                <p style={{ color: '#A59292', width: '50%', marginLeft: 'auto' }}>
                  {this.projects[this.state.current].tags}
                </p>
              </div>
              <div style={{ flex: '1 1 25%' }}>
                <p style={{ height: getVH(350), paddingLeft: '5px', overflowY: 'auto' }}>
                  {this.projects[this.state.current].task}
                </p>
                <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? this.props.t("portfolio.buttons.soon") : this.props.t("portfolio.buttons.open")}</a>
              </div>
            </div>
            : window.innerWidth > 568
              ? <div style={{ display: 'flex' }}>
                <div style={{ padding: '0 5px', flex: '1 1 25%' }}>
                  <ul>
                    {this.projects.map((project, index) => <li key={index} style={{ margin: '10px', marginLeft: '-30px', padding: '5px', backgroundColor: index === this.state.current ? '#363BAE' : null, cursor: 'pointer', color: index === this.state.current ? 'white' : 'black' }}
                      onClick={() => this.setState({ current: index })}><p>{project.title}</p></li>)}
                  </ul>
                </div>
                <div style={{ padding: '0 5px', flex: '1 1 75%', display: 'flex', flexWrap: 'wrap' }}>
                  <img src={this.projects[this.state.current].thumbnail} alt="project" style={{ marginBottom: '5vh', height: getVH(350), width: '100%', objectFit: 'cover' }} />
                  <p style={{ padding: '0 5px', flex: '2 1 100%' }}>
                    {this.projects[this.state.current].task}
                  </p>
                  <p style={{ color: '#A59292', padding: '0 5px', flex: '1 2 100%', marginTop: '2vh' }}>
                    {this.projects[this.state.current].tags}
                  </p>
                  <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ marginTop: '5vh', backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? this.props.t("portfolio.buttons.soon") : 'Посмотреть'}</a>
                </div>
              </div>
              : <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div style={{ padding: '0 5px', flex: '1 1 100%' }}>
                  <ul>
                    {this.projects.map((project, index) => <li key={index} style={{ margin: '10px', padding: '5px', backgroundColor: index === this.state.current ? '#363BAE' : null, cursor: 'pointer', color: index === this.state.current ? 'white' : 'black' }}
                      onClick={() => this.setState({ current: index })}><p>{project.title}</p></li>)}
                  </ul>
                </div>
                <div style={{ padding: '0 5px', flex: '1 1 100%', display: 'flex', flexWrap: 'wrap', marginTop: '5vh' }}>
                  <img ref={this.mobileImageRef} data-src={this.projects[this.state.current].thumbnail} alt="project" style={{ marginBottom: '5vh', height: getVH(350), width: '100%', objectFit: 'cover' }} />
                  <p style={{ padding: '0 5px', flex: '2 1 100%' }}>
                    {this.projects[this.state.current].task}
                  </p>
                  <p style={{ color: '#A59292', padding: '0 5px', flex: '1 2 100%', marginTop: '1vh' }}>
                    {this.projects[this.state.current].tags}
                  </p>
                  <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ marginTop: '5vh', backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? this.props.t("portfolio.buttons.soon") : 'Посмотреть'}</a>
                </div>
              </div>
          }
        </section>
      )
      : (
        <section id="portfolio">
          <p>{this.props.t("common.loading")}...</p>
        </section>
      )
  }
}

export default withTranslation()(Portfolio);