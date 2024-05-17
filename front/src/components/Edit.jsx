export default function Edit(props) {
    const movies = props.data;

    return (
        <>
            <button>Добавить фильм</button>
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
