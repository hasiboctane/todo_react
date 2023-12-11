import React, { useContext, useRef, useState } from 'react'
import { TodoItemContext } from '../store/todoItemStore';

const AddTodo = () => {

    // Using useState Hook
    // const [name, setName] = useState()
    // const [date, setDate] = useState()
    // const handleNameInput = (e) => {
    //     setName(e.target.value)
    // }
    // const handleDateInput = (e) => {
    //     setDate(e.target.value)
    // }

    // Using useRef Hook
    const todoNameElement = useRef();
    const todoDateElement = useRef();
    const { addNewItem } = useContext(TodoItemContext)
    const handleSubmitButton = (event) => {
        event.preventDefault()
        const name = todoNameElement.current.value
        const date = todoDateElement.current.value
        addNewItem(name, date)
        todoNameElement.current.value = ""
        todoDateElement.current.value = ""
        // setName("")
        // setDate("")
    }
    return (
        <form className="m-5" onSubmit={handleSubmitButton}>
            <table className="mt-5 table-fluid">
                <tbody>
                    <tr className="flex justify-center items-center gap-2">
                        <td>
                            <input
                                className="py-1 px-3 rounded-full outline-none"
                                type="text"
                                placeholder="Add Task"
                                ref={todoNameElement}
                            // onChange={handleNameInput}
                            // value={name}
                            />
                        </td>
                        <td>
                            <input
                                className="py-1 px-3 rounded-full outline-none"
                                type="date"
                                ref={todoDateElement}
                            // onChange={handleDateInput}
                            // value={date}
                            />
                        </td>
                        <td>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-3 rounded hover:cursor-pointer"
                                type="submit"
                            > Add </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default AddTodo