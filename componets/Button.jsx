function Button(props){
    return (
        <button
        className="ms-1 bg-slate-500 rounded-md text-white p-2"
        {...props}
        >
        {props.children}
        </button>
    )
}
export default Button;