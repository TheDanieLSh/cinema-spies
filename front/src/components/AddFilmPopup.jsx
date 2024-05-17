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
    }

    return (
        <div className="add-film-form">
            <form onSubmit={(e) => submit(e)}>
                <input type="text" name="movie"></input>
                <button>Добавить</button>
            </form>
        </div>
    )
}