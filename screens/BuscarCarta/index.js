import Header from '../../components/Header/index.js';
import { useContext } from 'react';
import GlobalContext from '../../services/GlobalContext';
import header from '../../styles/header.js'

export default ({ navigation }) => {

  const { changeHome } = useContext(GlobalContext)

  return (
    <Header name='Buscar carta' styleHeader={header.title} styleDivider={header.divider} />
  )
}
