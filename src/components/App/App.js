import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Купить продукты',
      isDone: false
    },
    {
      value: 'Заправить машину',
      isDone: false
    },
    {
      value: 'Постирать кроссовки',
      isDone: true
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
}

export default App;
