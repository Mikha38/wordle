const { legacy_createStore, combineReducers, bindActionCreators } = require("redux")

//initialState
const initialState = {
    word: '',
    attempts: [],
    isWinner: false
}

//Actions
const WORD = "WORD"
const ATTEMPTS = "ATTEMPTS"
const IS_WINNER = "IS_WINNER"

//Action Creators
const wordActionCreator = (word) => ({type: WORD, word})
const attemptsActionCreator = (attempts) => ({type: ATTEMPTS, attempts})
const isWinnerActionCreator = (isWinner) => ({type: IS_WINNER, isWinner})

//Reducers
function wordReducer(state = initialState.word, action){
    if(action.type === WORD){
        return action.word
    }
    return state
}
function attemptsReducer(state = initialState.attempts, action){
    if(action.type === ATTEMPTS){
        return action.attempts
    }
    return state
}
function isWinnerReducer(state = initialState.isWinner, action){
    if(action.type === IS_WINNER){
        return action.isWinner
    }
    return state
}

const reducers = combineReducers({
    word: wordReducer,
    attempts: attemptsReducer,
    isWinner: isWinnerReducer,
})

//Store
const store = legacy_createStore(reducers)
export default store

//MSTP & MDTP
export function mapStateToProps(){
    return function(state){
        return {
            word: state.word,
            attempts: state.attempts,
            isWinner: state.isWinner
        }
    }
}
export function mapDispatchToProps(){
    return function(dispatch){
        return {
            setWord: bindActionCreators(wordActionCreator, dispatch),
            setAttempts: bindActionCreators(attemptsActionCreator, dispatch),
            setIsWinner: bindActionCreators(isWinnerActionCreator, dispatch),
        }
    }
}


