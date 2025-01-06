type Input = {
    inputValue: string,
    setInpValue: React.Dispatch<React.SetStateAction<string>>,
    type:"text" | "password" | "email"
}


function Input({inputValue, setInpValue}:Input) {
  return (
      <input
            type="text"
            placeholder="Enter your task"
            className="w-60 h-10 pl-4 focus:outline-none text-lg"
            onChange={(e) => setInpValue(e.target.value)}
            value={inputValue}
          />
  )
}

export default Input
