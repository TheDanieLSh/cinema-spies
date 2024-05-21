import { useState } from "preact/hooks";

let numberOfPlayers = null;
let givenRoleCount = 0;

export default function Game({ movies, total }) {
    const [stage, setStage] = useState('player_number');

    const submit = (e) => {
        e.preventDefault();
        const playersCount = new FormData(e.target).get('players_count');
        if (playersCount < 4) return;
        setStage('role_giving');
        numberOfPlayers = playersCount;
    }

    if (stage === 'role_giving') {
        const curMovie = Object.keys(movies)[Math.floor(Math.random() * total)];
    }

    return (
        <>
            {stage === 'player_number' &&
                <form onSubmit={(e) => submit(e)}>
                    <label>Введите количество игроков</label>
                    <input type="number" name="players_count" autocomplete="off"></input>
                    <button>Далее</button>
                </form>
            }
            {stage === 'role_giving' &&
                <div className="role">

                </div>
            }
        </>
    )
}
