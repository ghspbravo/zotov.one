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
          <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            {this.projects.map((project, index) => <div className='portfolio-item' key={index} style={{ width: '50%', padding: '5px' }}
              onClick={() => this.setState({ current: index })}>
              <a style={{ textDecoration: 'none' }} target='_blank' href={this.projects[this.state.current].url} >
                <p className='portfolio-item__title'>{project.title}</p>
                <p style={{ marginTop: '20px', fontSize: '14px', color: '#A59292' }}>{this.projects[this.state.current].tags}</p>
              </a>
            </div>)}
          </div>
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