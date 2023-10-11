import styles from './SecondIllustration.module.css'
import img from '../../assets/images/illustration-stay-productive.png'
import { Link } from 'react-router-dom'
const SecondIlustration = () => {
  return (
    <div className={styles.container}>
        <img src={img} alt="img" />
        <div>
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all od your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

            <Link to='#'>
                See how Fylo works
            </Link>
        </div>
    </div>
  )
}

export default SecondIlustration