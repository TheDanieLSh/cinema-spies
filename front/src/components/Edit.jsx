import AddFilmPopup from "./AddFilmPopup";
import { route } from "preact-router";

export default function Edit({ movies }) {
    const openPopup = () => {
        document.querySelector('.add-film-form').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    const statusChange = async (e) => {
        e.preventDefault();
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const payload = {};
        checkboxes.forEach(cb => payload[cb.name] = cb.checked);
        
        fetch('http://192.168.1.32:4090/change_st', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        }).then(() => route('/'));
    }

    return (
        <>
            <AddFilmPopup />
            <button onClick={() => openPopup()}>Добавить фильм</button>
            <form className="movie-list" onSubmit={(e) => statusChange(e)}>
                {Object.keys(movies).map(name => (
                    <div className="movie-list__item">
                        <label>{name}</label>
                        <input type="checkbox" name={name} checked={movies[name]} />
                    </div>
                ))}
                <button>Сохранить</button>
            </form>
        </>
    )
}
