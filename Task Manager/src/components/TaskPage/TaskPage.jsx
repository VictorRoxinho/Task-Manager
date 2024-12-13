import './TaskPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash, faStar, faPlus, faCog, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function TaskPage() {
  return (
    <div className='container'>
      <h1>Task Page</h1>
      <div className="task-input">
        <div className="input-top">
            <textarea 
                placeholder='Digite aqui sua nova tarefa!'
                className='task-input-text'
                rows="3"
            />
            <button className='input-button primary-color'>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
        <div className="input-bottom">
            <FontAwesomeIcon icon={faCalendarAlt} className='calendar-icon'/>
            <p className='input-category'>Trabalho</p>
            <p className='input-category'>Estudo</p>
            <p className='input-category'>Pessoal</p>
            <FontAwesomeIcon icon={faCog} className='cog-icon'/>
        </div>
      </div>

      <div className="task-list">
        <div className="task-list-item">
            <div className="item-top primary-color">
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="item-bottom secondary-color">
                <div className='item-title'>
                    <p>Comprar os itens necessários para reforma da garagem e sala</p>
                </div>
                <div className='item-category'>
                    <p>Pessoal</p>
                    <p>10/10/2010</p>
                </div>
            </div>
        </div>
        <div className="task-list-item">
            <div className="item-top primary-color">
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="item-bottom secondary-color">
                <div className='item-title'>
                    <p>Comprar os itens necessários para reforma da garagem e sala</p>
                </div>
                <div className='item-category'>
                    <p>Pessoal</p>
                    <p>10/10/2010</p>
                </div>
            </div>
        </div>
        <div className="task-list-item">
            <div className="item-top primary-color  ">
                <FontAwesomeIcon icon={faCheck} />
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="item-bottom secondary-color ">
                <div className='item-title'>
                    <p>Comprar os itens necessários para reforma da garagem e sala</p>
                </div>
                <div className='item-category'>
                    <p>Pessoal</p>
                    <p>10/10/2010</p>
                </div>
            </div>
        </div>
        <div className="task-list-item">
            <div className="item-top primary-color">
                <FontAwesomeIcon icon={faCheck} className='check-icon'/>
                <FontAwesomeIcon icon={faEdit} className='edit-icon'/>
                <FontAwesomeIcon icon={faTrash} className='trash-icon'/>
                <FontAwesomeIcon icon={faStar} className='star-icon'/>
            </div>
            <div className="item-bottom secondary-color">
                <div className='item-title'>
                    <p>Comprar os itens necessários para reforma da garagem e sala</p>
                </div>
                <div className='item-category'>
                    <p>Pessoal</p>
                    <p>10/10/2010</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskPage
