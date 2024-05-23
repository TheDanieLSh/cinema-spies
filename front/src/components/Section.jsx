import { useEffect, useState } from "preact/hooks";
import Router from 'preact-router'

import Game from './Game'
import Edit from './Edit'

export default function Section(props) {
    const { section } = props;

    const [data, setData] = useState({});

    useEffect(async () => {
        await fetch('http://192.168.9.192:4090/get_movies')
            .then(resp => resp.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="section">
            <div className={section}>
                {Object.keys(data) != 0 &&
                
                    <Router>
                        <Game path="/game" movies={data.movies} total={data.total} />
                        <Edit path="/change_list" movies={data.movies} />
                    </Router>
                }
            </div>
        </div>
    )
}

// 192.168.1.32:4090 - дом
// 192.168.9.192:4090 - работа
