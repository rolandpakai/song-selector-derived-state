import './App.css';
import SongSelector from './SongSelector'

function App() {
  return (
    <div>
      <header className="header">
        <h1>Song Selector</h1>
      </header>
      <main className="main__container">
        <SongSelector />
      </main>
    </div>
  );
}

export default App;
