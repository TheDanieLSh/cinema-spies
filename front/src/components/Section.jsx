import { useEffect, useState } from "preact/hooks";

export default function Section(props) {
    const { section } = props;

    const [movies, setMovies] = useState({});

    useEffect(async () => {
        const resp = await fetch(/*'http://localhost:4090/get_movies'*/ 'movies.json');
        setMovies(await resp.json());
    }, []);

    return (
        <div className="section">

        </div>
    )
}