
import './App.css'
import PersonClass from './components/welcome/PersonClass'
import PersonFunction from './components/welcome/PersonFunction'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
 return ( 
   <div className='App'>
    <span><PersonClass name='Alberto' surname='González' age='42'/></span>
    <span><PersonClass name='Asier' surname='Ortiz' age='122'/></span>
    <span><PersonClass name='Javier' surname='Gañán' age='16'/></span>
    <span><PersonFunction name='Julio' surname='Mendiola' age='26'/></span>
    <span><PersonFunction name='Mikel' surname='Eguinoa' age='34'/></span>
    <span><PersonFunction name='Raúl' surname='Fernández' age='25'/></span>
    <Header />
    <Home />
   </div>
 )
}

export default App;


