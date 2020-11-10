//REDUX REVIEW
//Redux is a global state manager
//Redux Dataflow is what's going on
//The store holds the reducer and state and through the dispatch it takes the action that the user is doing
//The user does something and it goes to the reducer
//The action causes something to change the state
//Middleware is any function that runs between a request coming in and an endpoint 
//Middleware example: app.use(express.json()) -- every time an axios request comes in it has to go through app.use(express.json())

//when redux first starts, this is what is stored 
const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
}

//Action Type or Action Constant
const SET_MOVIE_INFO = "SET_MOVIE_INFO"

//Action Creator or Action Builder
//Think of this as the setState of Redux - it doesn't do all of the same things
//The functions here is where your components will use to change the initialState
//Every Action Creator/Builder needs to return an object with two keys for properties: type and payload
//They take in whatever info you're using and return an Action Object
export const setMovieInfo = (title, poster, rating) => {
    return (
        {
            type: "SET_MOVIE_INFO",
            paylod: {title, poster, rating}
        }
    )
}

//This is the actual reducer which is a function
//Every action that comes into the reducer has a type, for each action constant do one thing
//if state is undefined then pass in initialState is what state=initialState means
const moviesReducer = (state = initialState, action) => {
    switch(action, type) { //What gets returned in the Action Builder function goes into the reducer as an action - that's why when you call type it is action.type
        case SET_MOVE_INFO:
            return {...state, ...action.payload}
        default: //This is default case; If none of the action types are in this reducer, just return normal state
            return state
    }
}

export default moviesReducer