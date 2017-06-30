import {
    ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR,
    FETCH_TODOS_SUCCESS, FETCH_TODOS_LOADING, FETCH_TODOS_ERROR
} from './todos/actions/todo.actions';
import { ITodo } from './shared/models/ITodo.interface';

export interface IAppStore {
    todos: ITodo[],
    isLoading: boolean,
    error: string
}

export const INITIAL_STATE: IAppStore = {
    todos: [],
    isLoading: false,
    error: null
}

export const rootReducer = (state: IAppStore = INITIAL_STATE, action): IAppStore => {
    switch (action.type) {
        case FETCH_TODOS_LOADING:
            return Object.assign({}, state, { isLoading: true });
        case FETCH_TODOS_SUCCESS:
            return Object.assign({}, state, { todos: action.todos, isLoading: false });
        case FETCH_TODOS_ERROR:
            return Object.assign({}, state, { error: 'Error during retriving the data', isLoading: false });

        case ADD_TODO_LOADING:
            return Object.assign({}, state, { isLoading: true });
        case ADD_TODO_SUCCESS:
            let todoItem: ITodo = {
                _id: action.item._id,
                title: action.item.title,
                description: action.item.description,
                isCompleted: action.item.isCompleted
            };
            return Object.assign({}, state, { todos: state.todos.concat(todoItem), isLoading: false });
        case ADD_TODO_ERROR:
            return Object.assign({}, state, { error: 'Error during adding the data', isLoading: false });

        default:
            return state;
    }
}