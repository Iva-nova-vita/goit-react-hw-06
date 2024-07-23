import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {

  return (
    <>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList></ContactList>
    </>
  );
}

export default App;
