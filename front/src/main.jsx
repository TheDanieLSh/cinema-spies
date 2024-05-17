import { render } from 'preact'
// import { useEffect, useState } from 'preact/hooks'
import Router from 'preact-router'
import './styles.scss'

import Menu from './components/Menu'
import Section from './components/Section'

function App() {
    // const [IP, setIP] = useState('');

    // useEffect(() => {
    //     fetch('https://api.ipify.org?format=json')
    //         .then(resp => resp.json())
    //         .then(data => setIP(data))
    // }, []);

    // console.log(IP);

    return (
        <Router>
            <Menu path="/" />
            <Section path="/:section" />
        </Router>
    )
}

render(<App />, document.getElementById('app'));
