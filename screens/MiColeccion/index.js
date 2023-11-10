import Header from '../../components/Header/index.js';
import header from '../../styles/header.js'

export default ({ navigation }) => {
  return (
    <Header name='Mi coleccion' styleHeader={header.title} styleDivider={header.divider} />
  )
}
