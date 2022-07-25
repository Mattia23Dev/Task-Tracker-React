import Header from './components/header'
import react from 'react'
import {useState, useEffect} from 'react'
import Tasks from './components/tasks'
import AddTask from './components/addTasks'
import { FaFileExcel } from 'react-icons/fa'
import Footer from './components/footer'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

useEffect (() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTask(tasksFromServer)
  }

  getTasks()
}, [])


//Fetch tasks
const fetchTasks = async() => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

//Add task 
const addTasks = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', 
  {
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()
  setTask([...tasks, data])
}

//Delete Task
const deleteTask = async (id) => {
   await fetch(`http://localhost:5000/tasks/${id}`,
   {
    method: 'DELETE',
   })

    setTask(tasks.filter((task) => task.id !== id ))
}

  return (
  <Router>
    <div className='container'>
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTasks} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks To Show'
      )}
      <Footer />
    </div>
  </Router>  
  )
}


export default App;
