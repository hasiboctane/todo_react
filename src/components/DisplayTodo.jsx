import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoItemContext } from '../store/todoItemStore';

const DisplayTodo = () => {
    const { todoItems, deleteItem } = useContext(TodoItemContext);
    return (
        <div>
            {
                todoItems.map((todoItem) => {
                    return (
                        <TodoItem
                            key={todoItem.id}
                            id={todoItem.id}
                            name={todoItem.name}
                            date={todoItem.date}
                            onDeleteItem={deleteItem}
                        />
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo