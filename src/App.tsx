import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Heading from './components/Heading';
import List from './components/List';
import Section from './components/Section';

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <div className='App'>
      <Heading title={'Hello'} />
      <Section title='Title Section'>This is my Section</Section>
      <Counter setCount={setCount}>Count {count}</Counter>
      <List
        item={['item1', 'item2', 'item3']}
        render={(item: string) => <span>{item}</span>}
        batata='batata'
      />
    </div>
  );
}

export default App;
