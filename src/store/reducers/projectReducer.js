const initState = {
    projects: [
        { id: '1', title: 'demo 1', content: 'blah blah 1' },
        { id: '2', title: 'demo 2', content: 'blah blah 2' },
        { id: '3', title: 'demo 3', content: 'blah blah 3' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Create Project', action.project);
            break;
        default:
            break;
    }
    return state
}

export default projectReducer;