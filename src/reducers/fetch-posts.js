const initial_state = {all: [], post: null};

export default function fetch_post(state = {} , action) {
	switch(action.type) {
		case 'GET_POSTS': 
			return { ...state, all: action.payload.data};
		default:
			return state;
	}
}