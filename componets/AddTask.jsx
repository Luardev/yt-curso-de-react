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
            maxLength={38}
            value={title}
            onChange={function(event){setTitle(event.target.value)}}
            ></Input>
            <textarea
            className="px-4 resize-none border rounded-md border-slate-300 py-2 focus:outline focus:outline-slate-400 focus:rounded-md"
            rows={3} 
            placeholder="Digite a descrição da tarefa"
            value={description}
            onChange={function(event){setDescription(event.target.value)}}
            ></textarea>
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