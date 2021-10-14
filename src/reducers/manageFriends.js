export function manageFriends(state, action){
    state = state || {
        friends: []
    }
    switch (action.type) {
        case "ADD_FRIEND":
            console.log('addFriend')
            const friends = state.friends
            const friend = action.friend
            console.log(friends)
            console.log({ friends: friends.push(friend) })
        case 'REMOVE_FRIEND':
            const filtered = state.friends.filter((friend) => friend.id != action.id)
            return {friends: filtered}
        default:
            return state
      }
}
