const TextArea = () =>{

    return (
        <div className="mt-4">
            <label htmlFor="message" className="text-psi-black block mb-4">Me conte um pouco sobre você</label>
            <textarea id="message"  rows='4' className="w-full p-4 placeholder:text-black " placeholder="MensaSDASDSAgem" required > </textarea>
        </div>
    )

}

export default TextArea