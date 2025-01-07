import style from './App.module.css'
import Display from './component/Display'
import ButtonsContainer from './component/ButtonsContainer'

function App() {
  return (
      <div className={style.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
  )
}

export default App
