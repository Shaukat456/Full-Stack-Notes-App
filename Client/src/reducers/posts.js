// eslint-disable-next-line import/no-anonymous-default-export
export default  (state=[],action) => {
    switch (action.type) {
        case 'FETCH_ALL':
        //now this payload can be accessed from any where 
        //sending this payload to every component 
            return action.payload;
        case 'CREATE_POST':
            return [ action.payload , ...state ]
        default:
            return state;
    }
}