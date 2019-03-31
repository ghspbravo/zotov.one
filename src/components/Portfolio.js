import React, { Component } from 'react'
import { getVH, getVW } from '../App';

import ducatur_thumbnail from '../resourses/ducatur.png'
import guryanova_thumbnail from '../resourses/guryanova.png'
import katadze_thumbnail from '../resourses/katadze.png'
import thumbnail from '../resourses/later.png'
import nikitchuk_thumbnail from '../resourses/nikichuk.png'
import samprachka_thumbnail from '../resourses/samprachka.png'
import sdelanovmeste_thumbnail from '../resourses/sdelanovmeste.png'
import opora_thumbnail from '../resourses/opora.png'
import club811_thumbnail from '../resourses/club811.png'
import infloyd_thumbnail from '../resourses/infloyd.png'
import asopskov_thumbnail from '../resourses/asopskov.png'
import nscanner_thumbnail from '../resourses/nscanner.png'
import razoom_thumbnail from '../resourses/razoom.png'
import veltorf_thumbnail from '../resourses/veltorf.png'
import xxxweding_thumbnail from '../resourses/xxxweding.png'
import { portfolioLoader } from '../animations';

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0,
            hovered: false,
        }
    }

    componentDidMount() {
        portfolioLoader()
    }

    projects = [
        {
            title: 'KATADZE',
            task: 'Created a brand book, redesigned the site, a web-based platform for searching and creating guides in any part of the world.',
            tags: 'branding, design, development, seo',
            thumbnail: katadze_thumbnail,
            url: 'https://katadze.ru/'
        },
        {
            title: 'Opora Russia',
            task: 'Redesign and develop of the site, increase of attendance and recognition of the company, change of content filling system.',
            tags: 'design, development, seo',
            thumbnail: opora_thumbnail,
            url: 'http://opora66.ru'
        },
        {
            title: 'Club811',
            task: 'Developed a online store with sophisticated visualization elements.',
            tags: 'design, development',
            thumbnail: club811_thumbnail,
            url: 'http://club811.ru'
        },
        {
            title: 'Infloyd',
            task: 'Developed website for BI analytics and business visualisation studio company.',
            tags: 'design, development',
            thumbnail: infloyd_thumbnail,
            url: 'http://infloyd.ru/'
        },
        // {
        //     title: 'SdelanoVmeste',
        //     task: 'Developed a multi-page branding agency site.',
        //     tags: 'design, development',
        //     thumbnail: sdelanovmeste_thumbnail,
        //     url: 'http://sdelanovmeste.ru/demo'
        // },
        {
            title: 'ASO Pskov',
            task: 'Developed multipage website with functionality of store.',
            tags: 'development',
            thumbnail: asopskov_thumbnail,
            url: 'http://www.asopskov.ru/'
        },
        {
            title: 'Veltorf',
            task: 'Developed multipage website.',
            tags: 'development',
            thumbnail: veltorf_thumbnail,
            url: 'http://veltorf.com/'
        },
        {
            title: 'RaZOOM',
            task: 'Developed a website for perspective startup.',
            tags: 'design, development',
            thumbnail: razoom_thumbnail,
            url: 'http://razoom.expert/'
        },
        {
            title: 'Samprachka',
            task: 'Developed a website of the laundry company across Russia was developed with the integration of complex functional modules.',
            tags: 'design, development',
            thumbnail: samprachka_thumbnail,
            url: 'http://sam-prachka.ru/'
        },
        {
            title: 'Ducatur',
            task: 'Developed a website and web platform associated with the exchange crypto with sophisticated visualization elements.',
            tags: 'design, development',
            thumbnail: ducatur_thumbnail,
            url: 'https://ghspbravo.github.io/ducatur/'
        },
        {
            title: '3X',
            task: 'Developed a website for beautiful weddings place in Ekaterinburg.',
            tags: 'design, development',
            thumbnail: xxxweding_thumbnail,
            url: 'https://weddingekb.ru/'
        },
        {
            title: 'N-SCANNER',
            task: 'Developed a website for the residence search.',
            tags: 'design, development',
            thumbnail: nscanner_thumbnail,
            url: 'http://n-scanner.ru/'
        },
        {
            title: 'Sofia Nikitchuk',
            task: 'A design and a website that describes the activities of a supermodel with elements of a portfolio.',
            tags: 'design, development',
            thumbnail: nikitchuk_thumbnail,
            url: 'https://sofianikitchuk.github.io/'
        },
        // {
        //     title: 'Anastasia Guryanova',
        //     task: 'Developed website for a fitness model has been developed, with elements of a portfolio and description of activities.',
        //     tags: 'design, development',
        //     thumbnail: guryanova_thumbnail,
        //     url: 'https://ghspbravo.github.io/Guryanova/'
        // },
        // {
        //     title: 'MasterSobol',
        //     task: 'Developed a website, developed a web platform for selling fur raw materials through an online auction.',
        //     tags: 'design, development',
        //     thumbnail: thumbnail,
        //     url: null
        // },
        // {
        //     title: 'Alexey Savchuk',
        //     task: ' Developed website of a famous musician with a modern design.',
        //     tags: 'design, development',
        //     thumbnail: thumbnail,
        //     url: null
        // },
        // {
        //     title: 'KATADZE Shop',
        //     task: 'Developed online store selling clothes for a new youth brand.',
        //     tags: 'design, development, seo, branding',
        //     thumbnail: thumbnail,
        //     url: null
        // },
    ]

    render() {
        return (
            <section id='portfolio'>
                <h1 style={{ marginBottom: getVH(50) }}>Our works</h1>
                {window.innerWidth > 992
                    ? <div style={{ display: 'flex' }}>
                        <div style={{ padding: '0 5px', flex: '1 1 25%' }}>
                            <ul onMouseOver={() => this.setState({hovered: true})} onMouseLeave={() => this.setState({hovered: false})}>
                                {this.projects.map((project, index) => <li key={index} style={{ margin: '10px', padding: '5px', backgroundColor: index === this.state.current && !this.state.hovered ? '#363BAE' : null, cursor: 'pointer', color: index === this.state.current && !this.state.hovered ? 'white' : 'black' }}
                                    onClick={() => this.setState({ current: index })}><p>{project.title}</p></li>)}
                            </ul>
                        </div>
                        <div style={{ flex: '1 1 50%' }}>
                            <img src={this.projects[this.state.current].thumbnail} alt="project" style={{ height: getVH(350), width: '100%', objectFit: 'cover' }} />
                            <p style={{ color: '#A59292', width: '50%', marginLeft: 'auto' }}>
                                {this.projects[this.state.current].tags}
                            </p>
                        </div>
                        <div style={{ flex: '1 1 25%' }}>
                            <p style={{ height: getVH(350), paddingLeft: '5px', overflowY: 'auto' }}>
                                {this.projects[this.state.current].task}
                            </p>
                            <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? 'In development' : 'Visit'}</a>
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
                                <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ marginTop: '5vh', backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? 'In development' : 'Visit'}</a>
                            </div>
                        </div>
                        : <div style={{ display: 'flex', flexDirection: 'column', }}>
                            <div style={{ padding: '0 5px', flex: '1 1 100%', maxHeight: '60vh', overflowY: 'auto', }}>
                                <ul>
                                    {this.projects.map((project, index) => <li key={index} style={{ margin: '10px', padding: '5px', backgroundColor: index === this.state.current ? '#363BAE' : null, cursor: 'pointer', color: index === this.state.current ? 'white' : 'black' }}
                                        onClick={() => this.setState({ current: index })}><p>{project.title}</p></li>)}
                                </ul>
                            </div>
                            <div style={{ padding: '0 5px', flex: '1 1 100%', display: 'flex', flexWrap: 'wrap', marginTop: '5vh' }}>
                                <img src={this.projects[this.state.current].thumbnail} alt="project" style={{ marginBottom: '5vh', height: getVH(350), width: '100%', objectFit: 'cover' }} />
                                <p style={{ padding: '0 5px', flex: '2 1 100%' }}>
                                    {this.projects[this.state.current].task}
                                </p>
                                <p style={{ color: '#A59292', padding: '0 5px', flex: '1 2 100%', marginTop: '1vh' }}>
                                    {this.projects[this.state.current].tags}
                                </p>
                                <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ marginTop: '5vh', backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? 'In development' : 'Visit'}</a>
                            </div>
                        </div>
                }
            </section>
        )
    }
}
