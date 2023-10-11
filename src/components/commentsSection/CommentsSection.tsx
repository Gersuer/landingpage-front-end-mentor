import CardComments from '../CardComments/CardComments'
import styles from './CommentsSection.module.css'
import person1 from '../../assets/images/profile-1.jpg'
import person2 from '../../assets/images/profile-2.jpg'
import person3 from '../../assets/images/profile-3.jpg'

import img from '../../assets/images/bg-quotes.png'


const CommentsSection = () => {

  const persons = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nisi facere sapiente quis optio deserunt deleniti tempora eum veniam nobis.',
      name: 'Gersuer',
      img: person1
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nisi facere sapiente quis optio deserunt deleniti tempora eum veniam nobis.',
      name: 'Gersuer',
      img: person2
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nisi facere sapiente quis optio deserunt deleniti tempora eum veniam nobis.',
      name: 'Gersuer',
      img: person3
    },
  ]
  return (
    <div className={styles.container}>
      <img className={styles.quotes} src={img} alt="" />
      {persons && persons.map(person => (
        <CardComments key={person.img} text={person.text} img={person.img} name={person.name} />
      ))}
    </div>
  )
}

export default CommentsSection