import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { CiLocationOn } from 'react-icons/ci'
import { PiPhoneCallDuotone } from 'react-icons/pi'
import { GrMail } from 'react-icons/gr'
import { CiTwitter } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_location}>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.location}>
          <CiLocationOn style={{ color: 'white' }} size={17} />
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum temporibus sequi praesentium placeat est repudiandae.</span>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.email_phone}>
          <PiPhoneCallDuotone size={20} />
          <span>+1-543-123-4567</span>
        </div>
        <div className={styles.email_phone}>
          <GrMail size={20} />
          <span>+1-543-123-4567</span>
        </div>
      </section>
      <section className={styles.micellaneous_services}>
        <Link to='#'>About us</Link>
        <Link to='#'>Jobs</Link>
        <Link to='#'>Press</Link>
        <Link to='#'>Jobs</Link>
        <Link to='#'>Terms</Link>
        <Link to='#'>Privacy</Link>
        <Link to='#'>Blog</Link>
      </section>
      <section className={styles.icons}>
        <span>
          <CiTwitter style={{ color: 'white' }} size={24} />
        </span>
        <span>
          <CiInstagram style={{ color: 'white' }} size={24} />
        </span>
      </section>
    </footer>
  )
}

export default Footer