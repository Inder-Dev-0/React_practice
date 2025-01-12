import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ClockHeading from "./component/ClockHeading"
import ClockSlogan from "./component/ClockSlogan"
import CurrentTime from "./component/CurrentTime"

function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
}

export default App