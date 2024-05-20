export default function AddFilmPopup({ parentState, parentRerender }) {
    const submit = (e) => {
        // e.preventDefault();
        const formData = new FormData(e.target);
        const filmName = formData.get('movie');

        fetch('http://192.168.9.192:4090/add', {
            method: 'PUT',
            headers: {'Content-Type': 'text/plain'},
            body: filmName,
        });
    }

    return (
        <div className="add-film-form">
            <form onSubmit={(e) => submit(e)} autocomplete="off">
                <input type="text" name="movie" id="movieNameInput"></input>
                <button>Добавить</button>
            </form>
            <button className="add-film-form__close-btn" onClick={() => {document.querySelector('.add-film-form').style.display = 'none';}}>Закрыть</button>
        </div>
    )
}