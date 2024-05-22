export default function AddFilmPopup() {
    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const filmName = formData.get('movie');

        fetch('http://192.168.1.32:4090/add', {
            method: 'PUT',
            headers: {'Content-Type': 'text/plain'},
            body: filmName,
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