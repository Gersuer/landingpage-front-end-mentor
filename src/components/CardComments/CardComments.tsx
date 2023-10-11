import styles from './CardComments.module.css'
interface personProps {
    name: string,
    text: string,
    img: string
}
const CardComments = ({ name, text, img }: personProps) => {
    return (
        <div className={styles.card}>
            <p className={styles.text}>{text}</p>
            <div className={styles.card_info}>
                <img src={img} alt={img} />
                <div>
                    <p style={{fontWeight:'bold', marginBottom:'10px'}}>{name}</p>
                    <p>Founder & CEO</p>
                </div>
            </div>
        </div>
    )
}

export default CardComments