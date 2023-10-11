import styles from './Advantages.module.css'
import db from '../../db/db'
import Card from '../cardAdvantages/Card'
const Advantages = () => {
    console.log(db)
    return (
        <div className={styles.advantages}>
            {db && db.map(item => (
                <Card key={item.text} text={item.text} img={item.img} title={item.title} />
            ))}
        </div>
    )
}

export default Advantages