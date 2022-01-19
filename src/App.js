import './App.css';
import Things from './components/Things'
import {useState} from 'react'
import AddErrand from './components/AddErrand';

function App() {
  const [errand, setErrand] = useState(
    [{task: 'Finish this Assignment', status:true }]
  )
  
  const aNewErrand = (newErrand) =>{

    setErrand([...errand, newErrand])
  }

  const removeTask = (deleteIdx) =>{
    console.log(deleteIdx)

    const filterTask = errand.filter(( i, idx) => idx !== deleteIdx ? true:false)

    setErrand(filterTask)
  }

  const checkBox = (idx) =>{
    const updateErrand = [...errand];
      if(updateErrand[idx].status === true){
        updateErrand[idx].status = false
      } else{
        updateErrand[idx].status = true
      }
  
      setErrand(updateErrand)
  
    }


  return (
    <div className="App">
      <div>
        <AddErrand aNewErrand={aNewErrand}/>
      </div>
      <div>
        { errand.map ((toDo, idx)=>{
          return <Things 
            toDo={toDo} 
            key={idx}
            index={idx}
            removeTask={removeTask}
            checkBox={checkBox}
            />
          })
        }
      </div>
      </div>
  );
}

export default App;
