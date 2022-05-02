import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Textbox from './components/Textbox';
import Button from './components/Button';
import AlertList from './components/AlertList';
import LoginForm from './components/LoginForm';
import Parent from './components/Parent';
import NewList from './components/List';
import CatFact from './components/CatFact';
import CatFactsList from './components/CatFactsList';
import ContactForm from './components/ContactForm';

const App = () => {

  const [ count, setCount ] = useState(0);

  const vemsMamma = (
    knapp: string ) => {
    console.log('du tryckte på', knapp);
  }

  const vemsPappa = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  const vemsBror = (text: string) => {
    console.log(text)
  }

return (
<div id="app">
  {/* <Title>Kaffeappen</Title>
  <LoginForm />
  <Button variant="secondary">Registrera</Button>
  <p style={{color: "white"}}>DU HAR KLICKAT {count} {count > 1 ? "gånger" : "gång"}</p>
  <input type="text" onChange={vemsPappa} />
  <input type="text" onChange={(event) => vemsBror(event.target.value)} />
  <input type="text" onChange={(event)=> console.log(event.target.value)} />
  <NewList />
  <Parent></Parent> */}
  <CatFact />
  {/* <CatFactsList /> */}
  {/* <ContactForm isSent={true} /> */}
</div>
);
}

export default App;
