import { useEffect, useState } from "preact/hooks";
import Router from 'preact-router'

import Game from './Game'
import Edit from './Edit'
import Exceptions from './Exceptions'

export default function Section(props) {
    const { section } = props;

    const [movies, setMovies] = useState({});

    useEffect(async () => {
        const resp = await fetch(/*'http://localhost:4090/get_movies'*/ 'movies.json');
        setMovies(await resp.json());
    }, []);

    return (
        <div className="section">
            <div className={section}>
                <Router>
                    <Game path="/game" data={movies} />
                    <Edit path="/change_list" data={movies} />
                    <Exceptions path="/exceptions" data={movies} />
                </Router>
            </div>
        </div>
    )
}
