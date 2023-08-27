import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type ButtonNameType = 'All' | 'Active' | 'Completed'
function App() {

    /*let tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]*/

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    let [filterButtonName, setButtonName] = useState<ButtonNameType>("All")
    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
        /*setTasks(tasks)*/
    }

    const filterTasks = (buttonName: ButtonNameType) => {
        setButtonName(buttonName)
        }
        let durshlag=tasks
        if (filterButtonName==='Active'){
            let durshlag = tasks.filter(el=>!el.isDone)


        }
        if (filterButtonName==='Completed'){
            let durshlag = tasks.filter(el=>!el.isDone)

        /*let durshlag = tasks.filter(el=>!el.isDone)*/

       /* return (
            <div className="App">
                <Todolist title="What to learn" tasks={durshlag} removeTask={removeTask} filterTasks={filterTasks}/>

            </div>
        );
    }*/
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={durshlag} removeTask={removeTask} filterTasks={filterTasks}/>

        </div>
    );
}
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={durshlag} removeTask={removeTask} filterTasks={filterTasks}/>

        </div>
    );
}
export default App;
