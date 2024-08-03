
import './App.css'
import Cards from './component/Cards'
import Search from './component/Search'
import {data} from './utills/index.js'

function App() {

  return (
    <>
      <Search data = {data}/>
      <Cards data = {data}/>
    </>
  )
}

export default App;
