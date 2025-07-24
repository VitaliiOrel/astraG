// component with portal confirmation

import { useState } from 'react'
import styles from './InfoBlock.module.css'
import Portal from '../Portal/Portal'
import ActionConfirmationDialog from '../ActionConfirmationDialog/ActionConfirmationDialog'

const InfoBlock = () => {
  const [mode, setMode] = useState(0)
  const handleAction = () => {
    setMode(1)
  }

  const handleAction2 = () => {
    // sending data to DB
    console.log('Data is sending . . .')
  }
  return (
    <>
      <div className={styles.container}>
        <div>InfoBlock</div>
        <div>Some information</div>
        <button onClick={handleAction}>Action</button>
      </div>
      {mode === 1 ? (
        <Portal>
          <ActionConfirmationDialog
            setMode={setMode}
            sendData={handleAction2}
          />
        </Portal>
      ) : (
        ''
      )}
    </>
  )
}

export default InfoBlock
