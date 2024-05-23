export default function AddFilmPopup({ IP }) {
    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const filmName = formData.get('movie');

        fetch(`http://${IP}/add`, {
            method: 'PUT',
            headers: { 'Content-Type': 'text/plain' },
            body: filmName.trim(),
        }).then(() => {
            window.location.replace(window.location.pathname);
        });
    }

    return (
        <div className="add-film-form">
            <form onSubmit={(e) => submit(e)} autocomplete="off">
                <input type="text" name="movie" id="movieNameInput"></input>
                <button>Добавить</button>
            </form>
            <button className="add-film-form__close-btn" onClick={() => {
                document.querySelector('.add-film-form').style.display = 'none';
                document.body.style.overflow = 'visible';
            }}>Закрыть</button>
        </div>
    )
}