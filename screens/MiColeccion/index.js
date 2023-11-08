import Header from '../../components/Header/index.js';
import styles from '../../styles/styles.js'


export default ({ navigation }) => {
  return (
    <Header name='Mi coleccion' styleHeader={styles.title} styleDivider={styles.divider}/>
  )
}
