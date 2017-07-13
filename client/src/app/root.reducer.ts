import { ITodo } from './shared/models/ITodo.interface';
import { tassign } from 'tassign';
import { ITodoState, TODO_INITIAL_STATE, todoReducer } from './todos/reducers/todo.reducer';
import { combineReducers } from 'redux';

export interface IAppState {
    todo?: ITodoState
}

export const INITIAL_STATE: IAppState = {
    todo: TODO_INITIAL_STATE
}


export const rootReducer = combineReducers({
    todo: todoReducer
});