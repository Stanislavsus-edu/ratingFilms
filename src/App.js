import './App.css';
import Stars from './Components/Stars.jsx'

function App() {
  return (
    <div>
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={5} />
    </div>
  );
}

export default App;
