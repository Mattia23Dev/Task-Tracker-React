import { useState } from 'react'
import Task from './task'

const Tasks = ({tasks, onDelete}) => {

    return(
        <>
           {tasks.map((task, index) => 
           (<Task key={index}  task={task}  onDelete={onDelete}/>))}
        </>
    )
}

export default Tasks