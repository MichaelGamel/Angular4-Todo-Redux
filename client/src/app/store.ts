import { ADD_TODO, LOAD_TODOS } from './todos/actions/todo.actions';
import { ITodo } from './shared/models/ITodo.interface';

export interface IAppStore {
    todos: ITodo[]
}

export const INITIAL_STATE: IAppStore = {
    todos: []
}

export const rootReducer = (state: IAppStore = INITIAL_STATE, action): IAppStore => {
    switch (action.type) {
        case LOAD_TODOS:
            let todosData: ITodo[] = [
                { _id: 1, title: 'test 1', isCompleted: false },
                { _id: 2, title: 'test 2', isCompleted: true },
                { _id: 3, title: 'test 3', isCompleted: false }
            ]
            return Object.assign({}, state, { todos: todosData });
            
        case ADD_TODO:
            let todoItem: ITodo = {
                title: action.item
            };
            return Object.assign({}, state, { todos: state.todos.concat(todoItem) })
        default:
            return state;
    }
}