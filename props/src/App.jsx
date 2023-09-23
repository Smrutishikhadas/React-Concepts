import './App.css'
import Card from './Card'


function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card cardName = "Card-1" btnText="Click Here"/>
      <Card cardName = "Card-2" btnText="Click Here"/>
    </>
  )
}

export default App
