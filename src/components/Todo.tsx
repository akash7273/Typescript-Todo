import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Items = {
  title: string;
  id: string;
}

function Todo() {
  const [items, setItems] = useState<Items[]>([]);
  const [inpValue, setInpValue] = useState<string>("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setItems([...items, {title:inpValue,id:Date.now().toString()}]);
    setInpValue('');
  };

  const handleDelete = (value:string)=>[
    setItems(items.filter((item)=> item.id !== value))
  ]
  return (
    <div className="todo-container bg-cyan-200 h-screen flex items-center justify-center">
      <div className="todo bg-cyan-300 p-10 rounded-lg border-2 border-cyan-400">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-3xl font-semibold mb-7 ">
            TS - ToDo
          </h1>
          <Input type="text" inputValue={inpValue} setInpValue={setInpValue} />
          <Button className={" h-10 px-4 bg-cyan-700 hover:bg-cyan-900 transition text-white font-semibold rounded-tr-md rounded-br-md"} title={"Add"} />
        </form>

        <div className="task-field w-full mt-7">
          <ul>
            {items.map((item) => (
              <li key={item.id} className="task flex items-center justify-between mb-3 bg-cyan-900 px-2 py-2 text-white rounded-md text-xl border-2 border-cyan-500">
                {item.title}
                <Button className={"bg-red-500 rounded-md text-xs px-3 py-1"} title={"Delete"} onclick={() => handleDelete(item.id)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
