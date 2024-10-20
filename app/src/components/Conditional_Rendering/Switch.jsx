

export default function Switch() {
    let statuses = null;

    switch (statuses) {
        case true:
            return <button>Sign out</button>
        case false:
            return <button>Sign in</button>
        default:
            return <button>Loading...</button>
    }
}
