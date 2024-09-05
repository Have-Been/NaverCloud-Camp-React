import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import '../scss/TodoListItem.scss';

const TodoListItem = ({todo}) => {
  return (
    <div className='TodoListItem'>
        <div className='checkbox'>
            <MdCheckBoxOutlineBlank/>
            <div className='text'>{todo.text}</div>
        </div>
        <div className='remove'>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  );
};

export default TodoListItem;