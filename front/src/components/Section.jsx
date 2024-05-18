import { useEffect, useState } from "preact/hooks";
import Router from 'preact-router'

import Game from './Game'
import Edit from './Edit'

export default function Section(props) {
    const { section } = props;

    const [movies, setMovies] = useState({});

    useEffect(async () => {
        await fetch('http://192.168.1.32:4090/get_movies')
            .then(resp => resp.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div className="section">
            <div className={section}>
                <Router>
                    <Game path="/game" data={movies} />
                    <Edit path="/change_list" data={movies} />
                </Router>
            </div>
        </div>
    )
}

// 192.168.1.32:4090 - дом
// 192.168.9.192:4090 - работа
