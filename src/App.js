import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import OptionsAndInfoBox from './components/optionsAndInfoBox'

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url('${bodyBgImage}')` }}>
      <Header />
      <OptionsAndInfoBox />
      <AssistantPerson />
    </div>
  )
}

export default App
