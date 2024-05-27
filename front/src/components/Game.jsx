import { useState } from "preact/hooks";
import Role from "./Role";

let numberOfPlayers = null;

export default function Game({ movies, total }) {
    const [stage, setStage] = useState('player_number');

    const submit = (e) => {
        e.preventDefault();
        const playersCount = new FormData(e.target).get('players_count');
        if (playersCount < 4) return;
        setStage('role_giving');
        numberOfPlayers = +playersCount;
    }

    let roles = [];

    if (stage == 'role_giving') {
        const curMovie = Object.keys(movies)[Math.floor(Math.random() * total)];
        roles = new Array(numberOfPlayers).fill(curMovie);
        roles[Math.floor(Math.random() * numberOfPlayers)] = 'Шпион';
    }

    return (
        <>
            {stage == 'player_number' &&
                <form onSubmit={(e) => submit(e)}>
                    <label>Введите количество игроков</label>
                    <input type="number" name="players_count" autocomplete="off"></input>
                    <button>Далее</button>
                </form>
            }
            {stage == 'role_giving' &&
                <Role roles={roles} />
            }
        </>
    )
}
