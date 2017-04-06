export default function create_post(state = {} , action) {
	switch(action.type) {
		case 'CREATE_POST': 
			return { ...state, status: action.payload.statusText};
		default:
			return state;
	}
}