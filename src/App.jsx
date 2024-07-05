import './App.css';
import Calculator from './components/Calculator'
import Result from './components/Result'
import { CalculatorProvider } from './components/CalculatorProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <CalculatorProvider>
        <Routes>
          <Route path="/" element={<Calculator />}/>
          <Route path="/result" element={<Result />}/>
        </Routes>
        </CalculatorProvider>
      </Router>
      
    </>
  );
}

export default App;
