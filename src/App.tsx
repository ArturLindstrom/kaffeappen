import React from 'react';
import './App.css';
import Title from './components/Title';
import Textbox from './components/Textbox';
import Button from './components/Button';
import AlertList from './components/AlertList';
import LoginForm from './components/LoginForm';

const App = () => 
<div id="app">
  <Title>Kaffeappen</Title>
  <LoginForm />
  <Button variant="secondary">Registrera</Button>
</div>



export default App;
