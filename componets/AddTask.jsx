import { useState } from "react"
import Input from "./Input";

function AddTask({add}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return(
        <>
        <div className="space-y-1 p-6 flex flex-col gap-2 bg-slate-200 rounded-md shadow">
            <Input 
            placeholder="Digite o título da tarefa" 
            value={title}
            onChange={function(event){setTitle(event.target.value)}}
            ></Input>
            <Input 
            placeholder="Digite a descrição da tarefa" 
            value={description}
            onChange={function(event){setDescription(event.target.value)}}
            ></Input>
            <button
            className="bg-blue-400 rounded-md p-2 text-white"
            onClick={()=>{
                if(!title.trim() || !description.trim()){
                    return alert('Preencha os 2 campos!')
                }
                add(title,description)
                setTitle('')
                setDescription('')
            }}
            >Adicionar</button>
        </div>
        </>
    )
}
export default AddTask