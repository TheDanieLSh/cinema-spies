export default function AddFilmPopup() {
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const filmName = formData.get('movie')

        fetch('localhost:4090', {
            method: 'PUT',
            body: filmName,
        });

        document.querySelector('.add-film-form').style.display = 'none';
        document.getElementById('movieNameInput').value = '';
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