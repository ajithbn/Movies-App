import { createStore, combineReducers} from 'redux'
import moviesReduces from '../reducers/moviesReducer'
import { loadFromLocalStorage } from '../selector/movies'

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReduces
    }), loadFromLocalStorage())
    return store
}

export default configureStore