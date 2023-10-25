const URL = 'http://localhost:3000/api'


export async function getEvents() {

    const res = await fetch(`${URL}/events`)
    const data = await res.json()

    return data
}
export async function getEventById(id: string) {

    const res = await fetch(`${URL}/events/${id}`)
    const data = await res.json()

    return data
}

export async function getTickets() {

    const res = await fetch(`${URL}/tickets`)
    const data = await res.json()

    return data
}

export async function postEvent(event: any) {
    const res = await fetch(`${URL}/events`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
    });

    const data = await res.json()

    return data
}