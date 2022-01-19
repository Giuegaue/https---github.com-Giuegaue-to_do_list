import React, {useState} from 'react';


const AddErrand = (props) => {

    const [newTask, setNewTask] = useState('')

    const submitTask = (e) =>{
        e.preventDefault();
        console.log(newTask)

        const myNewTask = {
            task: newTask,
            status: false
        }
        props.aNewErrand( {task: newTask, status: false});
        
    }

  return <div>
    <form onSubmit={submitTask}>
        <input 
        type="text" 
        onChange={e => setNewTask(e.target.value)} 
        value={newTask}
        />
        <button>Add</button>
    </form>
  </div>;
};

export default AddErrand;
