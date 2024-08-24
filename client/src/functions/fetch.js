const fetchLatest = async () => {
    try {
        const res = await fetch('/api/latest');
        return (await res.json())
    } catch (error) {
        console.log(error)
    }
}
const fetchByCollection = async (name) => {
    try {
        const res = await fetch(`/api/collection/${name}`);
        return (await res.json())
    } catch (error) {
        console.log(error)
    }
}

export {fetchLatest, fetchByCollection};