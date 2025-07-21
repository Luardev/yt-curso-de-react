import { ChevronRightIcon, TrashIcon, Check} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Task({tasks,onTaskClick,onTaskDelt}) {

  const navigate = useNavigate()
  
  function onSeeDetailsClick(task){
    const query = new URLSearchParams();
    query.set('description',task.description);
    query.set('title',task.title)
    navigate(`/task?${query.toString()}`)
  }

  return (
  <ul className="space-y-1 p-6 bg-slate-200 rounded-md shadow">
    {tasks.length === 0 ? (
      <h1 className="text-center flex justify-center gap-2 text-slate-500 font-semibold"><Check />Sem tarefas</h1>
    ) : (
      tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-500 p-2 rounded-md text-white w-[180px] md:w-[357px] break-words text-left ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <Button 
          onClick={()=>{
            onSeeDetailsClick(task)
          }}
          >
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onTaskDelt(task.id)} ><TrashIcon /></Button>
        </li>
      ))
    )}
  </ul>
);

}
export default Task;
