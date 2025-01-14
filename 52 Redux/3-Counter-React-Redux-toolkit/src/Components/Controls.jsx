import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterAction } from '../store/counter'
import { privacyAction } from '../store/privacy'

const Controls = () => {
  const dispatch = useDispatch()
  const inputElement = useRef()

  const handleIncrement = () => {
    dispatch(counterAction.increment())
  }

  const handleDecrement = () => {
    dispatch(counterAction.decrement())
  }

  const handlePrivacyToggle = () => {
    dispatch(privacyAction.toggle())
  }

  const handleAdd = () => {
    dispatch(counterAction.add(inputElement.current.value
    ))

    inputElement.current.value = ''
  }

  const handleSubstract = () => {
    dispatch(counterAction.substract(inputElement.current.value))

    inputElement.current.value = ''
  }

  return <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
      <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
      <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
    </div>

    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input type="text" className='number-input' placeholder='Enter Number' ref={inputElement}/>
      <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
      <button type="button" className="btn btn-danger" onClick={handleSubstract}>Substract</button>
    </div>
  </>
}

export default Controls