import React, { Component } from 'react'
import { getVH, getVW } from '../App';
import backgroundBrand from './backgroundBrand';
import { brandMove, historyLoader } from '../animations';

export default class History extends Component {
    componentDidMount() {
        brandMove('#history')
        historyLoader()
    }
    render() {
        return (
            <section id='history' style={{ backgroundColor: 'white', }}>
                <div style={{position: 'relative', zIndex: 5}}>
                    <h1 id='history_title' style={{ textAlign: window.innerWidth > 568 ? 'right' : 'left', marginBottom: window.innerWidth > 992 ? getVH(200) : '10vh' }}>Наша история</h1>
                    <p style={{ maxWidth: window.innerWidth < 992 ? '100vw' : getVW(780), marginLeft: 'auto' }}>
                        Мы команда которая создает грамотно спроектированные, высокопроизводительные сайты с превосходным дизайном.  Любовь к делу — вот что движет ими. ZOTOV — это бесконечная вера в команду, без которой ничего бы не получилось. Поэтому мы постоянно ее развиваем, обеспечивая непрерывный рост вширь и вглубь.</p>
                    <h1 id='history_slogan' style={{ marginTop: window.innerWidth > 992 ? getVH(150) : '5vh', marginLeft: window.innerWidth > 568 ? getVW(150) : 0, fontWeight: '900' }}>ZOTOV <br /> — это уровень</h1>
                </div>
                {backgroundBrand()}
            </section>
        )
    }
}
