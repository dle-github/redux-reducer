export function managePresents(state, action){
    state = state || {
        numberOfPresents: 0
    }
    return (
        action.type === 'INCREASE'
        ? {numberOfPresents: state.numberOfPresents + 1}
        : state
    )

}
