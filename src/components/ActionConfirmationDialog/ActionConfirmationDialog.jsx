import styles from './ActionConfirmationDialog.module.css'
const ActionConfirmationDialog = ({ setMode, sendData }) => {
  const handleConfirm = () => {
    sendData()
    setMode(0)
  }
  const handleCancel = () => {
    setMode(0)
  }
  return (
    <div className={styles.container}>
      <div>
        ActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialogActionConfirmationDialog
      </div>
      <div className={styles.btnBlock}>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default ActionConfirmationDialog
