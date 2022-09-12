import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Main from './Main'
import data from './data'

function App() {
  const sections = data.map(item => {
    return (
      <Main
          key={item.id}
          item={item}
      />
    )
  })
  return (
    <div className="App">
        <div>
          <Nav />
          {sections}
        </div>
    </div>
  );
}

export default App;
