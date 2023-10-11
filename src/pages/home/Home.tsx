import Advantages from '../../components/advantages/Advantages'
import CommentsSection from '../../components/commentsSection/CommentsSection'
import Illustration from '../../components/illustation/Illustration'
import SecondIlustration from '../../components/secondIlustration/SecondIlustration'
import styles from './Home.module.css'
const Home = () => {
  return (
    <main className={styles.main}>
      <Illustration />
      <Advantages />
      <SecondIlustration />
      <CommentsSection />
    </main>
  )
}

export default Home