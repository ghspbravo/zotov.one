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
                    <h1 id='history_title' style={{ textAlign: window.innerWidth > 568 ? 'right' : 'left', marginBottom: window.innerWidth > 992 ? getVH(200) : '10vh' }}>Our history</h1>
                    <p style={{ maxWidth: window.innerWidth < 992 ? '100vw' : getVW(780), marginLeft: 'auto' }}>
                    We are a team that creates competently designed, high-performance sites with excellent design. Love of action - that's what drives them. <span style={{fontWeight: 700}}>ZOTOV</span> is an endless faith in the team, without which nothing would have happened. Therefore, we constantly develop it, ensuring continuous growth in breadth and depth.</p>
                    <h1 id='history_slogan' style={{ marginTop: window.innerWidth > 992 ? getVH(150) : '5vh', marginLeft: window.innerWidth > 568 ? getVW(150) : 0, fontWeight: '900' }}>ZOTOV <br /> — is the quality</h1>
                </div>
                {backgroundBrand()}
            </section>
        )
    }
}
