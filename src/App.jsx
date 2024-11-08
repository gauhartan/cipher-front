import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EncryptDecryptForm from './components/EncryptDecryptForm';

import axios from 'axios'; //added


function App() {

  return (
    <>
    <EncryptDecryptForm  />
    </>
  )
}

export default App