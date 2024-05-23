import { render } from 'preact'
import { useState } from 'preact/hooks'
import Router from 'preact-router'
import './styles.scss'

import Menu from './components/Menu'
import Section from './components/Section'

function App() {
    const IP = '192.168.9.192:4090';

    return (
        <Router>
            <Menu path="/" />
            <Section path="/:section" IP={IP} />
        </Router>
    )
}

render(<App />, document.getElementById('app'));

// 192.168.1.32:4090 - дом
// 192.168.9.192:4090 - работа


// const [IP, setIP] = useState('');

    // useEffect(() => {
    //     fetch('https://api.ipify.org?format=json')
    //         .then(resp => resp.json())
    //         .then(data => setIP(data))
    // }, []);

    // console.log(IP);