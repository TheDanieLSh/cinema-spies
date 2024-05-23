import { useEffect, useState } from "preact/hooks";
import Router from 'preact-router'

import Game from './Game'
import Edit from './Edit'

export default function Section({ section, IP }) {

    const [data, setData] = useState({});

    useEffect(async () => {
        await fetch(`http://${IP}/get_movies`)
            .then(resp => resp.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="section">
            <div className={section}>
                {Object.keys(data) != 0 &&

                    <Router>
                        <Game path="/game" movies={data.movies} total={data.total} />
                        <Edit path="/change_list" movies={data.movies} IP={IP} />
                    </Router>
                }
            </div>
        </div>
    )
}
