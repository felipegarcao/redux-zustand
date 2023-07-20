import { useSelector } from 'react-redux'

export function TodoList() {

  const todos = useSelector(store => {
    return store.todo
  })



  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}