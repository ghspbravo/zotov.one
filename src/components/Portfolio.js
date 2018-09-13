import React, { Component } from 'react'
import { getVH, getVW } from '../App';

import ducatur_thumbnail from '../resourses/ducatur.png'
import guryanova_thumbnail from '../resourses/guryanova.png'
import katadze_thumbnail from '../resourses/katadze.png'
import thumbnail from '../resourses/later.png'
import nikitchuk_thumbnail from '../resourses/nikichuk.png'
import samprachka_thumbnail from '../resourses/samprachka.png'
import sdelanovmeste_thumbnail from '../resourses/sdelanovmeste.png'
import { portfolioLoader } from '../animations';

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
        }
    }

    componentDidMount() {
        portfolioLoader()
    }

    projects = [
        {
            title: 'KATADZE',
            task: 'Создан брендбук, выполнен редизайн сайта, создана веб-платформа поиска и создания гидов в любой точке мира.',
            tags: 'брендинг, дизайн, разработка, seo',
            thumbnail: katadze_thumbnail,
            url: 'https://katadze.ru/'
        },
        {
            title: 'SdelanoVmeste',
            task: 'Разработан многостраничный сайт брендингового агентства.',
            tags: 'дизайн, разработка',
            thumbnail: sdelanovmeste_thumbnail,
            url: 'http://sdelanovmeste.ru/demo'
        },
        {
            title: 'Samprachka',
            task: 'Разработан сайт компании прачечных по всей России с интеграцией сложных функциональных модулей.',
            tags: 'дизайн, разработка',
            thumbnail: samprachka_thumbnail,
            url: 'http://sam-prachka.ru/'
        },
        {
            title: 'Ducatur',
            task: 'Разработан сайт и веб-платформа связанной с обменом криптновалюты с сложными элементами визуализации.',
            tags: 'дизайн, разработка',
            thumbnail: ducatur_thumbnail,
            url: 'https://ghspbravo.github.io/ducatur/'
        },
        {
            title: 'София Никитчук',
            task: 'Разработан дизайн и сайт рассказывающий о деятельности модели с элементами портфолио.',
            tags: 'дизайн, разработка',
            thumbnail: nikitchuk_thumbnail,
            url: 'https://sofianikitchuk.github.io/'
        },
        {
            title: 'Анастасия Гурьянова',
            task: 'Разработан сайт для фитнес модели, с элементами портфолио и описанием деятельности.',
            tags: 'дизайн, разработка',
            thumbnail: guryanova_thumbnail,
            url: 'https://ghspbravo.github.io/Guryanova/'
        },
        {
            title: 'MasterSobol',
            task: 'Создан сайт, разработана веб-платформу для продажи мехового сырья через онлайн аукцион.',
            tags: 'дизайн, разработка',
            thumbnail: thumbnail,
            url: null
        },
        {
            title: 'Опора России',
            task: 'Выполнен редизайн сайта, повышение посещаемости и узнавания компании, изменение системы наполнения контентом.',
            tags: 'дизайн, разработка, seo',
            thumbnail: thumbnail,
            url: null
        },
        {
            title: 'Алексей Савчук',
            task: 'Разработан блог известного музыканта с современным дизайном.',
            tags: 'дизайн, разработка',
            thumbnail: thumbnail,
            url: null
        },
        {
            title: 'KATADZE Shop',
            task: 'Разработан интернет-магазин по продаже одежды нового молодежного бренда.',
            tags: 'дизайн, разработка, seo, брендинг',
            thumbnail: thumbnail,
            url: null
        },
    ]

    render() {
        return (
            <section id='portfolio'>
                <h1 style={{ marginBottom: getVH(50) }}>Портфолио</h1>
                {window.innerWidth > 992
                    ? <div style={{ display: 'flex' }}>
                        <div style={{ padding: '0 5px', flex: '1 1 25%' }}>
                            <ul>
                                {this.projects.map((project, index) => <li key={index} style={{ margin: '10px', padding: '5px', backgroundColor: index === this.state.current ? '#363BAE' : null, cursor: 'pointer', color: index === this.state.current ? 'white' : 'black' }}
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
                            <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? 'В разработке' : 'Посмотреть'}</a>
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
                                <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ marginTop: '5vh', backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? 'В разработке' : 'Посмотреть'}</a>
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
                                <a id='project_link_button' target='blank' href={this.projects[this.state.current].url} style={{ marginTop: '5vh', backgroundColor: '#363BAE', transition: 'background-color 0.3s', color: 'white', padding: '25px', textDecoration: 'none', display: 'block', width: 'fit-content' }}>{this.projects[this.state.current].url === null ? 'В разработке' : 'Посмотреть'}</a>
                            </div>
                        </div>
                }
            </section>
        )
    }
}
