import React from 'react'

const TodoItem = ({ id, name, date, onDeleteItem }) => {

    return (
        <table>
            <tbody>
                <tr className=" mt-3 flex justify-center items-center gap-5">
                    <td><p className=" bg-slate-50 py-1 px-3  text-purple-500">{name}</p></td>
                    <td><p className=" bg-slate-50 py-1 px-3  ">{date}</p></td>
                    <td>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold  py-1 px-3 rounded hover:cursor-pointer"
                            type="submit"
                            onClick={() => onDeleteItem(id)}
                        >Delete
                        </button>
                    </td>
                </tr >
            </tbody>


        </table>
    )
}

export default TodoItem