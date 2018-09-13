import React, { Component } from 'react';

import Header from './components/Header'
import History from './components/History'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<main>
				<Navbar />
				<Header />
				<History />
				<Portfolio />
				<Skills />
				<Contacts />
			</main>
		);
	}
}

export default App;

export const getVH = px => px / (900 * 0.01) + 'vh'
export const getVW = px => px / (1400 * 0.01) + 'vw'