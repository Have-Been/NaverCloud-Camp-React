import React from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';

const TodoList = ({todos}) => {
  return (
    <div className='TodoList'>
        {todos && todos.map(todo => 
            <TodoListItem key={todo.id} todo={todo}/>
        )}
    </div>
  );
};

export default TodoList;