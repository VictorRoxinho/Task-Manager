import { useState, useEffect } from 'react'
import './TaskPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash, faStar, faPlus, faCog, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function TaskPage() {
    const [taskCategory, setTaskCategory] = useState('');
    const [taskText, setTaskText] = useState('');

    // Validar tarefa
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (taskText !== '' && taskCategory !== '') {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [taskText, taskCategory])

    // Categoria
    const handleCategory = (e) => {
        setTaskCategory(e.target.id);
    }

    // Adicionar Tarefa
    const [tasks, setTasks] = useState([])

    const handleText = (e) => {
        setTaskText(e.target.value);
    }

    function addTask () {
        if (!isValid) {
            alert("Preencha os campos");
            return;
        }
        
        if (tasks.some(task => task.text === taskText)) {
            alert("Tarefa já existe");
            return;
        }
        
        const newTask = {
            id: Date.now(),
            text: taskText,
            category: taskCategory,
            completed: false,
            favorite: false
        };

        setTasks([...tasks, newTask]);
        setTaskCategory('');
        setTaskText('');

    }

    // Finalizar Tarefa
    const handleFinish = (id) => {
        setTasks(tasks.map(task => (
            task.id === id ? {...task, completed: !task.completed} : task
        )))
    }

    // Deletar Tarefa
    const handleDelete = (id) => {
       setTasks(tasks.filter(task => task.id !== id))
    }

    // Editar Tarefa
    const [isEditing, setIsEditing] = useState(null)
    const handleEdit = (id) => {
        const taskToEdit = tasks.find(task => task.id === id)
        setTaskText(taskToEdit.text)
        setTaskCategory(taskToEdit.category);
        setIsEditing(id)
    }

    const handleSave = () => {
        const updateTask = {
            ...tasks.find(task => task.id === isEditing),
            text: taskText,
            category: taskCategory
        }
        setTasks(tasks.map(task => (
            task.id === isEditing ? updateTask : task
        )))
        setIsEditing(null);
        setTaskText('');
        setTaskCategory('');
    }
 
    // Favoritar Tarefa
    const handleFavorite = (id) => {
        setTasks(tasks.map(task => (
            task.id === id ? {...task, favorite: !task.favorite} : task
        )))
    }

    return (
    <div className='container'>
      <h1>Task Page</h1>
      <div className="task-input">
        <div className="input-top">
            <textarea 
                placeholder='Digite aqui sua nova tarefa!'
                className='task-input-text'
                id='taskText'
                value={taskText}
                rows="3"
                onChange={handleText}
            />
            <button
            className={isEditing ? 'input-button secondary-color' : 'input-button primary-color'}
            onClick={isEditing ? handleSave : addTask}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
        <div className="input-bottom">
            <FontAwesomeIcon icon={faCalendarAlt} className='calendar-icon'/>
            <p className={taskCategory === 'Trabalho' ? 'input-category-selected' : 'input-category'} id='Trabalho' onClick={handleCategory}>Trabalho</p>
            <p className={taskCategory === 'Estudo' ? 'input-category-selected' : 'input-category'} id='Estudo' onClick={handleCategory}>Estudo</p>
            <p className={taskCategory === 'Pessoal' ? 'input-category-selected' : 'input-category'} id='Pessoal' onClick={handleCategory}>Pessoal</p>
            <FontAwesomeIcon icon={faCog} className='cog-icon'/>
        </div>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
            <div key={task.id} className="task-list-item">
                <div className="item-top primary-color">
                    <FontAwesomeIcon icon={faCheck} cursor='pointer' onClick={() => handleFinish(task.id)}/>
                    <FontAwesomeIcon icon={faEdit} cursor='pointer' onClick={() => handleEdit(task.id)}/>
                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} cursor='pointer'/>
                    <FontAwesomeIcon icon={faStar} 
                    cursor='pointer' 
                    onClick={() => handleFavorite(task.id)}
                    className={task.favorite ? 'icon-favorite' : ''}
                    />
                </div>
                <div className={task.favorite ? 'item-bottom-favorite secondary-color' : 'item-bottom secondary-color'}>
                    <div className='item-title'>
                        <p className={task.completed ? 'task-completed' : ''}>{task.text}</p>
                    </div>
                    <div className='item-category'>
                        <p>{task.category}</p>
                        <p>10/10/2010</p>
                    </div>
                </div>
            </div>
    ))}
      </div>
    </div>
  )
}

export default TaskPage
