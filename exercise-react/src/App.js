
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';


function App() {
const name = 'Backstreet Boys Da DeepWeb'
const newName = name.toUpperCase()

const nome = 'Marceline'

  return (
    <div className="App">
      <h1>Sayonara, {newName}!</h1>
      <HelloWorld />
      <SayMyName nome="Jeferson caminhoes" />
      <SayMyName nome={nome} />
      <Pessoa nome="Juninho play" idade="17" profissao="Perigo"  foto="https://www.otempo.com.br/polopoly_fs/3.200726.1534251972!httpImage/image.jpg_gen/derivatives/main-photo-multi-article-f1-resize_620/image.jpg"      />
      <List />
     </div>
  );
}

export default App;
