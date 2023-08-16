//import { App } from '../App.js'; //can't find the file outside of public

//if app.js is in public it finds it, but does not render
//import { App } from './App.js'; 

const root = document.getElementById('root');
root.innerHTML = App();

function App() {
    return (
        '<h1>theConnect4App</h1>'
    );
}