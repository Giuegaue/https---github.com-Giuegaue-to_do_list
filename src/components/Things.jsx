import React from 'react';
import AddErrand from './AddErrand';

const Things = (props) => {
  
  const {toDo} = props
  return <div>
    {toDo.task}
    <input 
    type="checkbox" 
    checked={toDo.status}
    onChange={()=> props.checkBox(props.index) }
    />
    <button onClick = {()=>props.removeTask(props.index)}>
      Delete
    </button>
  </div>;
};

export default Things;
