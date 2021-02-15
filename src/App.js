import react from 'react';
import './App.css';
import Reviews from './reviews';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='title'>
          <h1>our reviews</h1>
        </div>
      </div>
      <div className='row justify-center'>
        <Reviews />
      </div>
    </div>
    
  );
}

export default App;
