import Header from '../../components/Header/index.js';
import { useContext, useState, useCallback } from 'react';
import GlobalContext from '../../services/GlobalContext';
import styles from '../../styles/styles.js'




export default ({ navigation }) => {

  const { changeHome } = useContext(GlobalContext)

  return (
    <Header name='Buscar carta' styleHeader={styles.title} styleDivider={styles.divider}/>
    
  )
}
