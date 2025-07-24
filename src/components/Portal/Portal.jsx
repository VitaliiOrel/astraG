import { createPortal } from 'react-dom'
import styles from './Portal.module.css'

const Portal = ({ children }) => {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.card}>{children}</div>
    </div>,
    document.getElementById('portal-root')
  )
}

export default Portal
