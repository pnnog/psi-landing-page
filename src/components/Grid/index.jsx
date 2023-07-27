const Grid = ({children}) =>{
    return (
        <div id="grid-default" className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 justify-items-center items-center">
            {children}
        </div>
    )
}

export default Grid