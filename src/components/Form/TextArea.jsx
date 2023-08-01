const TextArea = ({value, setValue}) => {
    return (
        <textarea id="message" rows='4' required placeholder="Mensagem" value={value} onChange = {(e) => setValue(e.target.value)}
        className="w-full resize-none p-4 rounded-md outline-none border-2 focus:invalid:border-red-500 focus:border-green-500  focus:bg-gray-100 placeholder:text-gray-500 mb-4 " /> 
    )
}

export default TextArea