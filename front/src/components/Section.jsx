export default async function Section() {
    const resp = await fetch('');
    const movies = await resp.json();
    console.log(movies);

    return (
        <div className="section">

        </div>
    )
}