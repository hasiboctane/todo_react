import React, { useContext } from 'react'
import { TodoItemContext } from '../store/todoItemStore';

const WelcomeMessage = () => {
    const { todoItems } = useContext(TodoItemContext);
    return (
        todoItems.length === 0 && <div className="text-2xl font-semibold text-sky-700">Enjoy Your Day</div>
    )
}

export default WelcomeMessage