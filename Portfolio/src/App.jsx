import { Outlet } from 'react-router-dom';

// import Header from './components/Header.jsx'
// import Navigation from './components/Navigation.jsx'
// import Footer from './components/Footer.jsx'

import './styles/App.css'

function App() {

  return (
    <main>
      <h1>App.JSX</h1>
      <Outlet />
    </main>
  )
}

export default App
