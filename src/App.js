import logo from './assets/rick_morty_logo.png';
import './App.css';
import {ListItems} from './components/ListItems';

function App() {
  const imgStyle = { width: "20%"}
  return (
    <div >
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
        <header >
          <div className="overlay">
            <h3><img src={logo} style={imgStyle}/></h3>
          </div>
        </header>
        <div>
              <div className="row-question">
                  <p className="p-question">¿No encuentras tu personaje favorito?</p>
              </div>
          <ListItems/>
        </div>
    </div>
  );
}

export default App;