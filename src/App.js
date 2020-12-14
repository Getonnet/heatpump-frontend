import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import OptionsAndInfoBox from './components/optionsAndInfoBox'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BrandsSelect from './pages/brandSelect'
import Homepage from './pages/home'

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url('${bodyBgImage}')` }}>
      <Router>
        <Header />

        <Switch>
          <Route path="/brands">
            <BrandsSelect />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

        <AssistantPerson />
      </Router>
    </div>
  )
}

export default App
