import styles from './Card.module.css'
interface ObjectProps {
    title: string
    text: string
    img: string
}
const Card = ({ title, text, img }: ObjectProps) => {

    return (
        <div className={styles.card}>
            <img src={img} alt="" />
            <p style={{fontWeight:'bold'}}>{title}</p>
            <p>{text}</p>
        </div>
    )
}

export default Card