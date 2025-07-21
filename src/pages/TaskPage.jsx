import { useSearchParams } from "react-router-dom"
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import H1 from "../../componets/H1";

function TaskPage(){
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')

    const navigate = useNavigate()

    function returnToApp(){
        navigate(-1)
    }

    return( 
        <>
            <div className="space-y-4 w-screen min-h-screen bg-slate-500 p-6">
                <button
                className="text-white"
                onClick={returnToApp}
                ><ChevronLeft/></button>
                 <div className="space-y-4">
                    <H1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes da tarefa
                    </H1>
                    <div className="bg-slate-200 space-y-2 p-4 rounded-md w-[300px] md:w-[50%] mx-auto">
                        <h2 className="text-xl text-slate-600 font-bold break-words">
                            {title}
                        </h2>
                        <p className="text-slate-600 break-words">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskPage