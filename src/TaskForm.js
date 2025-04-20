import { useState } from "react";

export default function TaskForm({onAdd}){
    const [taskName, setTaskName] = useState('');
    function handelSubmit(ev){
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
    return(
        <div>
            <form onSubmit={handelSubmit}>
                <button>+</button>
                <input type="text"
                 value={taskName} 
                 onChange={ev => setTaskName(ev.target.value)}
                 placeholder="New task..."/>
            </form>
        </div>
    );
}