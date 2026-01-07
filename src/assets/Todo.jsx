import { useState } from 'react'
import { Delete, SquarePen } from "lucide-react";

function Todo() {

 const[activity,setActivity]=useState("")
 const[todo,setTodo] = useState([])
 const[visible,setVisible]= useState(false)
 const[index,setIndex] = useState(null)
   
//  add task
 const addTask =()=>{
   if(!activity.trim()) return
   const updatedTodo=[...todo,activity]
   setTodo(updatedTodo)
   setActivity("")
 }

//  delete
const deleteTask=(index)=>{
  const updatedTodo = todo.filter((_,i)=> i!==index)
  setTodo(updatedTodo)
}

// edit 
const editTodo =(index)=>{
  setVisible(true)
  setActivity(todo[index])
  setIndex(index)
}

// save edit 
const saveEdits =()=>{
  const currentTodo = [...todo]
  currentTodo[index] = activity
  setTodo(currentTodo)
  setActivity("")
  setVisible(false)
  setIndex(null)
}

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-100 to-amber-300 flex justify-center items-center p-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📝 Todo List
        </h2>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input 
            type="text"
            value={activity}
            onChange={(e)=>setActivity(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400"
          />

          {visible ? (
            <button
              onClick={saveEdits}
              className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg font-medium"
            >
              Save
            </button>
          ) : (
            <button
              onClick={addTask}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 rounded-lg font-medium"
            >
              Add
            </button>
          )}
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todo.map((task,i)=>(
            <div
              key={i}
              className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition"
            >
              
              <div className="flex items-center gap-3">
                <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">
                  {i+1}
                </span>
                <p className="text-gray-800 font-medium">
                  {task}
                </p>
              </div>

              <div className="flex gap-3">
                <Delete
                  size={18}
                  className="cursor-pointer text-red-500 hover:scale-110 transition"
                  onClick={()=>!visible && deleteTask(i)}
                />

                <SquarePen
                  size={18}
                  className="cursor-pointer text-blue-500 hover:scale-110 transition"
                  onClick={()=>editTodo(i)}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Todo
