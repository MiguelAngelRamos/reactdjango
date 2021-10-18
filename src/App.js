import React, {useState} from 'react'
import { AppRouter } from './routers/AppRouter';
import { ModalContext } from './context/ModalContext';
const App = () => {
  const [modalState, setModalState] = useState(false);
  
  return (
    <ModalContext.Provider value={{
      modalState,
      setModalState
    }}>
      <>
        <AppRouter />
      </>
    </ModalContext.Provider>

  )
}

export default App
