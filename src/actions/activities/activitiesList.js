export function fetchMAXIMIZING(id) {
    return {
        type: 'MAXIMIZE',
        id
    }
}

export function fetchMINIMIZING(id) {
    return {
        type: 'MINIMIZE',
        id
    }
}


export function fetchSET(id, data) {
    return {
        type: 'SET',
        id,
        data
    }
}

export function fetchREMOVE(id) {
    return {
        type: 'REMOVE',
        id
    }
}