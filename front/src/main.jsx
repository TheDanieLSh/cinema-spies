import { render } from 'preact'
import { useState } from 'preact/hooks'
import Router from 'preact-router'
import './styles.scss'

import Menu from './components/Menu'
import Section from './components/Section'

function App() {

    return (
        <Router>
            <Menu path="/" />
            <Section path="/section" />
        </Router>
    )
}

render(<App />, document.getElementById('app'));
