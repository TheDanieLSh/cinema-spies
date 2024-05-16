export default function Menu() {
    return (
        <div className="menu">
            <a className="start-game" href="/game">Начать игру</a>
            <a className="change-list" href="/change_list">Изменить список</a>
            <a className="exceptions" href="exceptions">Исключения</a>
        </div>
    )
}