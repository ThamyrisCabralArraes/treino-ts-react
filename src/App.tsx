import './App.css';
import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';

function App() {
  return (
    <div className='App'>
      <Heading title={'Hello'} />
      <Section title='Title Section'>This is my Section</Section>
      <Counter />
    </div>
  );
}

export default App;
