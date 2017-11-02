const pushInt = (arr, flat) => {
    arr.forEach(function (item) {
        if (Number.isInteger(item)) {
            flat.push(item)
        } else if (Array.isArray(item)) {
            pushInt(item, flat)
        }
    })
    return flat
}

const flatten = (arr) => {
    if (Array.isArray(arr)) {
        return pushInt(arr, [])
    }
    return []
}

module.exports = flatten