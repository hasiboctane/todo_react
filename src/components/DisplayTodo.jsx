import React from 'react'
import TodoItem from './TodoItem'

const DisplayTodo = ({ todoItems, onDeleteItem }) => {
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
                            onDeleteItem={onDeleteItem}
                        />
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo