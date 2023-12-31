
import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import DisplayTodo from './components/DisplayTodo'
import WelcomeMessage from './components/WelcomeMessage'
import { TodoItemContext } from './store/todoItemStore'

function App() {
  const initialTodoItems = [
    {
      id: 1,
      name: 'GAME',
      date: '23/2/2023',
    },
    {
      id: 2,
      name: 'Movie',
      date: '23/2/2023',
    },
    {
      id: 3,
      name: 'DDD',
      date: '23/2/2023',
    },
  ]
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (name, date) => {
    // const newTodoItems = [...todoItems, { id: todoItems.length + 1, name: name, date: date }]
    // setTodoItems(newTodoItems)
    setTodoItems((currentValue) => {
      return [...currentValue, { id: todoItems.length + 1, name: name, date: date }]
    })
  }

  const deleteItem = (itemId) => {
    const newTodoItems = todoItems.filter(item => item.id !== itemId)
    setTodoItems(newTodoItems)
  }
  return (
    <>
      <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
        <div className=' bg-slate-300 h-[100vh] flex flex-col  items-center'>
          <h2 className='text-3xl font-semibold underline text-purple-500 mt-3'>To-Do App</h2>
          <AddTodo />
          <WelcomeMessage />
          <DisplayTodo />
        </div>
      </TodoItemContext.Provider>

    </>
  )
}

export default App
