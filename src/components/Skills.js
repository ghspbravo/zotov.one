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
                    onClick={() => this.setState({ current: 0 })}>РАЗРАБОТКА</button>
                <button style={{ ...this.titleStyle, color: this.state.current === 1 ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 1 ? 'white' : 'transparent' }}
                    onClick={() => this.setState({ current: 1 })}>ДИЗАЙН</button>
                <button style={{ ...this.titleStyle, color: this.state.current === 2 ? '#363BAE' : 'white', transition: 'background-color 0.5s', backgroundColor: this.state.current === 2 ? 'white' : 'transparent' }}
                    onClick={() => this.setState({ current: 2 })}>БРЕНДИНГ</button>
                {this.state.current === 0
                    ? <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                        <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>Наша команда разрабатывает веб-сайты с 2015 года, и с тех пор продолжает совершенствоваться и улучшать навыки в этой сфере. При создании сайтов мы учитываем не только маркетинговую составляющую, но и большое внимание уделяем визуализации. </p>
                        <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>Чтобы понять наш подход к разработке сайтов, то достаточно ознакомиться с нашими работами, которые удостаиваются восхищения и выделяются среди работ конкурентов. Для нас любой сайт – это лицо компании, и эстетическая составляющая играет важную роль.</p>
                    </div>
                    : this.state.current === 1
                        ? <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>Дизайн — наша особенная любовь. Качественно оформленный сайт или приложение — мощный маркетинговый инструмент любого бизнеса, и мы с радостью поможем вам в разработке превосходного дизайна и визуальных образов. </p>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>Мы любим функциональный и современный интерфейс, с большим желанием внедрим все необходимые ваши пожелания и обеспечим максимальный user experience.</p>
                        </div>
                        : <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px' }}>Брендинг является немаловажной частью IT-продуктов. Это касается малого и большого бизнеса. Мы помогаем компаниям и стартапам определить основы бренда, что включает в себя айдентику, типографику и подготовку маркетинговой продукции. Это основной перечень услуг, который оказывает наша компания, что может полностью соответствовать вашим потребностям.</p>
                            <p style={{ flex: '1 1 50%', padding: window.innerWidth < 992 ? '0 10px' : '0 30px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>Как правило, мы создаем брендинг в комплексе с работами по разработке веб-сайтов или мобильных приложений. Поэтому если вы создаете продукт под ключ, то наше агентство сможет взять на себя решение всех задач, начиная от брендинга и заканчивая запуском вашего продукта.</p>
                        </div>
                }
            </section>
        )
        else return (
            <section id='skills' style={{ backgroundColor: '#363BAE', color: 'white' }}>
                <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white' }}>Разработка</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>Наша команда разрабатывает веб-сайты с 2015 года, и с тех пор продолжает совершенствоваться и улучшать навыки в этой сфере. При создании сайтов мы учитываем не только маркетинговую составляющую, но и большое внимание уделяем визуализации. </p>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>Чтобы понять наш подход к разработке сайтов, то достаточно ознакомиться с нашими работами, которые удостаиваются восхищения и выделяются среди работ конкурентов. Для нас любой сайт – это лицо компании, и эстетическая составляющая играет важную роль.</p>
                </div>

                <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white', marginTop: '20vh' }}>Дизайн</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>Дизайн — наша особенная любовь. Качественно оформленный сайт или приложение — мощный маркетинговый инструмент любого бизнеса, и мы с радостью поможем вам в разработке превосходного дизайна и визуальных образов. </p>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>Мы любим функциональный и современный интерфейс, с большим желанием внедрим все необходимые ваши пожелания и обеспечим максимальный user experience.</p>
                </div>

                <h1 style={{ ...this.titleStyle, color: '#363BAE', textAlign: 'center', backgroundColor: 'white', marginTop: '20vh' }}>Брендинг</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: window.innerWidth < 568 ? '10vh' : '20vh' }}>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px' }}>Брендинг является немаловажной частью IT-продуктов. Это касается малого и большого бизнеса. Мы помогаем компаниям и стартапам определить основы бренда, что включает в себя айдентику, типографику и подготовку маркетинговой продукции. Это основной перечень услуг, который оказывает наша компания, что может полностью соответствовать вашим потребностям.</p>
                    <p style={{ flex: window.innerWidth < 568 ? '1 1 100%' : '1 1 50%', padding: '0 5px', marginTop: window.innerWidth < 568 ? '4vh' : null }}>Как правило, мы создаем брендинг в комплексе с работами по разработке веб-сайтов или мобильных приложений. Поэтому если вы создаете продукт под ключ, то наше агентство сможет взять на себя решение всех задач, начиная от брендинга и заканчивая запуском вашего продукта.</p>
                </div>
            </section>
        )
    }
}
