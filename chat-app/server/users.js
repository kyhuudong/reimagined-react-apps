const users = []

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.id === id);

    if(existingUser) {
        return {error: 'User name is taken'};
    }

    const user = {id, name, room};

    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.indexOf((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }

}

const getUser = (id) => { return users.find(user => user.id === id) }

const getUsersInRoom = (room) => { return users.filter(user => user.room === room)};

module.exports = { addUser, removeUser, getUser, getUsersInRoom};