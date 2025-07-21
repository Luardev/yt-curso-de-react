import { useEffect, useState } from "react";
import AddTask from "../componets/AddTask";
import Task from "../componets/Tasks";
import { v4 } from "uuid";
import H1 from "../componets/H1";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  // Sempre q algum valor do array (2ª parâmetro) for alterado ele executa a primeira função
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() =>{
  //   const loadfakedata = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     const data = await response.json()
  //     setTask(data)
  //   }
  //   loadfakedata();
  // }, []) //só executa uma vez no ao carregar a página

  // funcao que atualiza o status
  const onTaskClick = (taskid) => {
    const newtasks = tasks.map((task) => {
      if (task.id == taskid) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTask(newtasks);
  };


  const onTaskDelt = (taskid) => {
    const newtasks = tasks.filter(task => task.id != taskid)
    setTask(newtasks)
  }

  function onAddTaskSubmit(title,description){
    const newtasks = {
      id: v4(),
      title,
      description,
      isCompleted:false
    }
    setTask([
      ...tasks,
      newtasks
    ])
  }
  return (
    <>
      <div className="min-h-screen w-full bg-slate-400 flex justify-center p-6">
        <div className="w-[100%] md:w-[500px] space-y-4">
          <H1 className="text-3xl text-slate-100 font-bold text-center mb-3">
            Gerenciador de tarefas!
          </H1>
          <AddTask add={onAddTaskSubmit}/>
          <Task tasks={tasks} onTaskClick={onTaskClick} onTaskDelt={onTaskDelt}/>
        </div>
      </div>
    </>
  );
}

export default App;
