import React, { useState } from 'react'

const AddTodo = ({ onNewItem }) => {
    const [name, setName] = useState()
    const [date, setDate] = useState()
    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleDateInput = (e) => {
        setDate(e.target.value)
    }
    const handleSubmitButton = () => {
        onNewItem(name, date)
        setName("")
        setDate("")
    }
    return (
        <div className="m-5	">
            <table className="mt-5 table-fluid">
                <tbody>
                    <tr className="flex justify-center items-center gap-2">
                        <td>
                            <input
                                className="py-1 px-3 rounded-full outline-none"
                                type="text"
                                placeholder="Add Task"
                                onChange={handleNameInput}
                                value={name}
                            />
                        </td>
                        <td>
                            <input
                                className="py-1 px-3 rounded-full outline-none"
                                type="date"
                                onChange={handleDateInput}
                                value={date}
                            />
                        </td>
                        <td>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-3 rounded hover:cursor-pointer"
                                type="submit"
                                onClick={handleSubmitButton}
                            > Add </button>
                        </td>
                    </tr>
                </tbody>


            </table>
        </div>
    )
}

export default AddTodo