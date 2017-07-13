import {
    FETCH_TODOS_SUCCESS, FETCH_TODOS_LOADING, FETCH_TODOS_ERROR,
    ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR,
    DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR,
    TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_ERROR
} from '../../todos/actions/todo.actions';
import { ITodo } from '../../shared/models/ITodo.interface';
import { tassign } from 'tassign';

export interface ITodoState {
    todos: ITodo[],
    isLoading: boolean,
    error: string
}

export const TODO_INITIAL_STATE: ITodoState = {
    todos: [],
    isLoading: false,
    error: null
}


class Todo {
    constructor(private state: ITodoState, private action) { }

    startLoading() {
        return tassign(this.state, { isLoading: true });
    }

    fetchTodosSuccess() {
        return tassign(this.state, { todos: this.action.todos, isLoading: false });
    }

    fetchTodosError() {
        return tassign(this.state, { error: 'Error during retriving the data', isLoading: false });
    }

    addTodoSuccess() {
        let todoItem: ITodo = {
            _id: this.action.item._id,
            title: this.action.item.title,
            description: this.action.item.description,
            isCompleted: this.action.item.isCompleted
        };
        return tassign(this.state, { todos: this.state.todos.concat(todoItem), isLoading: false });
    }

    addTodoError() {
        return tassign(this.state, { error: 'Error during adding the data', isLoading: false });
    }

    deleteTodoSuccess() {
        return tassign(this.state, { todos: this.state.todos.filter((t: ITodo) => t._id !== this.action.todo._id), isLoading: false });
    }

    deleteTodoError() {
        return tassign(this.state, { error: 'Error during deleting the data', isLoading: false });
    }


    toggleTodoSuccess() {
        let todo: ITodo = this.state.todos.find(t => t._id === this.action.id);

        // Now, we need to find the position of this item in the array. 
        var index = this.state.todos.indexOf(todo);

        return tassign(this.state, {
            todos: [
                ...this.state.todos.slice(0, index),
                tassign(todo, { isCompleted: !todo.isCompleted }),
                ...this.state.todos.slice(index + 1),
            ]
            , isLoading: false
        });
    }

    toggleTodoError() {
        return tassign(this.state, { error: 'Error during update the data', isLoading: false });
    }
}

export const todoReducer = (state: ITodoState = TODO_INITIAL_STATE, action): ITodoState => {
    let todo = new Todo(state, action);
    switch (action.type) {
        case FETCH_TODOS_LOADING: return todo.startLoading();
        case FETCH_TODOS_SUCCESS: return todo.fetchTodosSuccess();
        case FETCH_TODOS_ERROR: return todo.fetchTodosError();

        case ADD_TODO_LOADING: return todo.startLoading();
        case ADD_TODO_SUCCESS: return todo.addTodoSuccess();
        case ADD_TODO_ERROR: return todo.addTodoError();

        case DELETE_TODO_LOADING: return todo.startLoading();
        case DELETE_TODO_SUCCESS: return todo.deleteTodoSuccess();
        case DELETE_TODO_ERROR: return todo.deleteTodoError();

        case TOGGLE_TODO_LOADING: return todo.startLoading();
        case TOGGLE_TODO_SUCCESS: return todo.toggleTodoSuccess();
        case TOGGLE_TODO_ERROR: return todo.toggleTodoError();

        default:
            return state;
    }
}