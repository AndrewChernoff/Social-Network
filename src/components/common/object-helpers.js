export let updateObjectInArray = (items, userID, objectPropName, newObj) => {
    return items.map(u => {
        if (u[objectPropName] === userID) {
            return { ...u, ...newObj }
        }
        return u;
    })
}