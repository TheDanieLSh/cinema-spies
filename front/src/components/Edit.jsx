import { useState } from "preact/hooks";
import AddFilmPopup from "./AddFilmPopup";

export default function Edit(props) {
    const movies = props.data;

    const openPopup = () => {
        document.querySelector('.add-film-form').style.display = 'flex';
    }

    const [editState, editRerender] = useState(true);

    return (
        <>
            <AddFilmPopup parentState={editState} parentRerender={editRerender} />
            <button onClick={() => openPopup()}>Добавить фильм</button>
            <form className="movie-list">
                {Object.keys(movies).map(name => (
                    <div className="movie-list__item">
                        <label>{name}</label>
                        <input type="checkbox" checked={movies[name]} />
                    </div>
                ))}
                <button>Сохранить</button>
            </form>
        </>
    )
}
