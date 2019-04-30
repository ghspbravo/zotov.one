import React, { Component } from 'react'
import { getVH, getVW } from '../App';

import { portfolioLoader } from '../animations';

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0,
            hovered: false,

            loaded: false
        }
    }

    projects = []

    componentDidMount() {
        portfolioLoader()

        fetch('https://zotov.one/content/portfolio-eng.json', {
            headers: { 'content-type': 'application/json' }
        }).then(response => response.json())
            .then(data => {
                this.projects = data
                this.setState({ loaded: true })
            })
            .catch(console.error)
    }

    render() {
        return this.state.loaded
        ? (
            <section id='portfolio'>
                <h1 style={{ marginBottom: getVH(50) }}>Our works</h1>
                {window.innerWidth > 992
                    ? <div style={{ display: 'flex' }}>
                        <div style={{ padding: '0 5px', flex: '1 1 25%' }}>
                            <ul onMouseOver={() => this.setState({ hovered: true })} onMouseLeave={() => this.setState({ hovered: false })}>
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
                            <div style={{ padding: '0 5px', flex: '1 1 100%' }}>
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
        : (
            <section id='portfolio'>
                <p>Loading...</p>
            </section>
        )
    }
}
