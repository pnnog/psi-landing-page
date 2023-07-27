const Input = ({type='text', placeholder}) =>{


    return (
        <input type={type} required='true'  placeholder={placeholder}  className="p-4 h-16 mb-2 w-full rounded-md outline-none border-2 focus:invalid:border-red-500 focus:border-green-500 focus:bg-gray-100 placeholder:text-gray-500 "/>
    )
}

export default Input