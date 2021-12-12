import React from 'react';
import './App.css';
import ClockHands from './ClockHands';

function App() {
  return (
    <div className="App">
        <div className="clock">
                <div className="hand hour reverse" data-hour-hand></div>
                <div className="hand minute reverse" data-minute-hand></div>
                <div className="hand second reverse" data-second-hand></div>
                <div className="number number1"><div className="reverse">1</div></div>
                <div className="number number2"><div className="reverse">2</div></div>
                <div className="number number3"><div className="reverse">3</div></div>
                <div className="number number4"><div className="reverse">4</div></div>
                <div className="number number5"><div className="reverse">5</div></div>
                <div className="number number6"><div className="reverse">6</div></div>
                <div className="number number7"><div className="reverse">7</div></div>
                <div className="number number8"><div className="reverse">8</div></div>
                <div className="number number9"><div className="reverse">9</div></div>
                <div className="number number10"><div className="reverse">10</div></div>
                <div className="number number11"><div className="reverse">11</div></div>
                <div className="number number12"><div className="reverse">12</div></div>
        </div>
        <footer className="App-footer">Analog Clock</footer>
    </div>
  );
}

export default App;
