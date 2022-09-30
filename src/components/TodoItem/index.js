// Write your code here

import './index.css'

const TodoItem = props => {
  const {todosList, deleteTodoItem} = props
  const {title, id} = todosList

  const onDeleteClick = () => {
    deleteTodoItem(id)
  }

  return (
    <div>
      <li className="todo-item">
        <p>{title}</p>
        <div className="container">
          <button onClick={onDeleteClick} type="button">
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
