import AddFilmPopup from "./AddFilmPopup";
import { route } from "preact-router";

export default function Edit({ movies, IP }) {
    const openPopup = () => {
        document.querySelector('.add-film-form').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    const statusChange = async (e) => {
        e.preventDefault();
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const payload = {};
        checkboxes.forEach(cb => payload[cb.name] = cb.checked);

        fetch(`http://${IP}/change_st`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        }).then(() => route('/'));
    }

    const deleteItem = (e) => {
        if (confirm('Удалить этот фильм?')) {
            fetch(`http://${IP}/del`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'text/plain' },
                body: e.target.textContent,
            }).then(() => window.location.replace(window.location.pathname));
        }
    }

    return (
        <>
            <AddFilmPopup IP={IP} />
            <button onClick={() => openPopup()}>Добавить фильм</button>
            <form className="movie-list" onSubmit={(e) => statusChange(e)}>
                {Object.keys(movies).map(name => (
                    <div className="movie-list__item">
                        <label onClick={(e) => deleteItem(e)}>{name}</label>
                        <input type="checkbox" name={name} checked={movies[name]} />
                    </div>
                ))}
                <button>Сохранить</button>
            </form>
        </>
    )
}
