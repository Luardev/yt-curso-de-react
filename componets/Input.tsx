function Input(props){
    return(
        <input 
            className="px-4 border rounded-md border-slate-300 py-2 focus:outline focus:outline-slate-400 focus:rounded-md"
            // placeholder={props.placeholder} 
            // value={props.value}
            // onChange={props.onChange} OR
            {...props}
        ></input>
    )
}
export default Input