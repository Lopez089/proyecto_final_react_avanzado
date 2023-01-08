import './App.css'
import { useCounter } from './hook/useCounter'
import { useList } from './hook/useList'

const initialState = [
  { complete: false, id: 1, item: "Hacer de comer" },
  { complete: true, id: 2, item: "Labar ropa" },
  { complete: false, id: 3, item: "Sacar perro" }
]

function App() {

  const [counter, increment, decrement, reset, step, onChageStep] = useCounter(10)
  const [newItem, setNewItem, lists, addNewItem, isListEmpty, editItem, removeItem, toggleCompleteItem, removeAllItems, sortItems, investList] = useList(initialState)

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className='step'>
        <label htmlFor="step">Step</label>
        <input onChange={(e) => onChageStep(e)} value={step} type="number" max={10} min={0} name='step' />
      </div>
      <hr />
      <div>
        <div>
          <h3>{counter}</h3>
        </div>
        <div className='button-group'>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
      <div className='container_list'>
        <div className='card_form'>
          <h3>New Task</h3>
          <form onSubmit={(e) => addNewItem(e)}>
            <div className='input_group'>
              <label htmlFor="newTask">Task</label>
              <input onChange={(e) => setNewItem(e.target.value)} value={newItem} type="text" placeholder="ej: hacer de comer" />
            </div>
            <div className='input_group'>
              <button type="submit" >add</button>
            </div>
          </form>
        </div>
        <div className='wrapper_butto_group'>
          <button onClick={() => removeAllItems()}> Remove All</button>
          <button onClick={() => sortItems()}> Ordenar</button>
          <button onClick={() => investList()}>Invertir</button>
        </div>
        <div className='container_list'>
          {
            isListEmpty() ? <p>List empty add a new task</p>
              : (
                <ul>
                  {
                    lists.map((list) => {
                      return (
                        <li key={list.id}>
                          <input
                            type="radio"
                            onClick={() => toggleCompleteItem(list.id)}
                            checked={list.complete}
                          />
                          <p className={list.complete && 'line'}>{list.item}</p>
                          <div>
                            <button onClick={() => removeItem(list.id)}>Eliminar</button>
                            <button onClick={() => editItem(list.id)}>Edit</button>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
