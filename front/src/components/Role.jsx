import { useState } from "preact/hooks"
import { route } from "preact-router"

let x = 0;

export default function Role({ roles }) {
    const [interspace, setInterspace] = useState(false);

    const next = () => {
        setInterspace(!interspace);
        if (interspace == false) {
            x++
            setRole({ name: roles[x], index: x });
        }
    }

    const [role, setRole] = useState({ name: roles[x], index: x });

    if (x > roles.length) route('/');

    return (
        <div className="role" onClick={() => next()}>
            {
                interspace == false ? role.name : 'Узнай роль'
            }
        </div>
    )
}