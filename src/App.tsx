import { Toaster } from 'react-hot-toast'
import './App.css'
import { AppRouter } from './app/AppRouter';

function App() {

  return (
    <>
        <Toaster position='top-right' />
        <AppRouter />
    </>
  )
}

export default App
