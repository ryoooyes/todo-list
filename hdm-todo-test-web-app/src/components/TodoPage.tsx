/*import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
interface Task {
  id: number;
  text: string;
}

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HDM Todo List</h1>
      {tasks.map(task => (
        <div key={task.id} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
          <input
            type="text"
            value={task.text}
            onChange={(e) => editTask(task.id, e.target.value)}
            className="flex-1 p-2 mr-2 border rounded"
          />
          <button onClick={() => deleteTask(task.id)} className="text-red-500 ml-2"><FaTrash /></button>
        </div>
      ))}
      <div className="flex mt-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
          className="flex-1 p-2 border rounded mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">AJOUTER UNE TÂCHE</button>
      </div>
    </div>
  );
};

export default TodoPage;
*/
import React, { useState } from 'react';
import {FaTrash, FaEdit} from 'react-icons/fa';

interface Task {
  id: number ;
  text: string ;
}

const TodoPage: React.FC = () => {
  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ newTask, setNewTask ] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks( [ ...tasks, { id: Date.now(), text: newTask } ]);
    setNewTask('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map( task => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HDM Todo List</h1>
      {tasks.map( task => (
        <div key={task.id} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
          <input
            type="text"
            value={task.text}
            onChange={(e) => editTask(task.id, e.target.value)}
            className="flex-1 p-2 mr-2 border rounded"
          />
          <button onClick={() => deleteTask(task.id)} className="text-red-500 ml-2"><FaTrash /></button>
        </div>
      ))}
      <div className="flex mt-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche"
          className="flex-1 p-2 border rounded mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">AJOUTER UNE TÂCHE</button>
      </div>
    </div>
  );
};

export default TodoPage;
