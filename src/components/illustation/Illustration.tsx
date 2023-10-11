import styles from './Illustration.module.css'
import illustrationImg from '../../assets/images/illustration-intro.png'
const Illustration = () => {
    return (
        <div className={styles.main_container}>
            <img src={illustrationImg} alt="" />
            <div className={styles.main_container_text}>
                <h1>
                    All your files in one secure location, accessible anywhere
                </h1>
                <p>
                    Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                </p>

                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Illustration