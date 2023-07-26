const Grid = ({children}) =>{
    return (
        <div id="grid-default" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-48 items-center justify-items-center">
            {children}
        </div>
    )
}

export default Grid