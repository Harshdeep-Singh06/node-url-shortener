const sessionIdToUserMap = new Map();

function setUser(id, user){
    sessionIdToUserMap.set(id, user)
}

function getUser(id){
    return sessionIdToUsserMap.get(id);
}

module.exports = {
    setUser,
    getUser,

}