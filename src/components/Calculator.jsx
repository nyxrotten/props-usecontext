import { useNumbers } from "./CalculatorProvider";
import {Link} from 'react-router-dom'


function Calculator() {
    const {numbers, saveNumbers } = useNumbers()

    const addNumber = (e) => {
        e.preventDefault;
        let newNumber = e.target.innerHTML
        newNumber = Number(newNumber)
        saveNumbers([...numbers, newNumber]);
    }
    

    return (
        <>
            <div className="calculator">
            <div className="calculatorBox">
                <h1>Calculadora</h1>
                <div className="calculatorScreen">{numbers}</div>
                <div className="calculatorDisplay">
                    <div className="calculatorColumns">
                        <button>%</button>
                        <button onClick={addNumber}>7</button>
                        <button onClick={addNumber}>4</button>
                        <button onClick={addNumber}>1</button>
                    </div>
                    <div className="calculatorColumns">
                        <button>/</button>
                        <button onClick={addNumber}>8</button>
                        <button onClick={addNumber}>5</button>
                        <button onClick={addNumber}>2</button>
                    </div>
                    <div className="calculatorColumns">
                        <button>*</button>
                        <button onClick={addNumber}>9</button>
                        <button onClick={addNumber}>6</button>
                        <button onClick={addNumber}>3</button>
                    </div>
                    <div className="calculatorColumns">
                        <button>-</button>
                        <button>+</button>
                        <button>=</button>
                    </div>
                </div>
            </div>
            </div>
            <section className="result">
                <h2 class><Link to ="/result"  style={{ textDecoration: 'none' }}>Result</Link></h2>
            </section>
        </>
    )
}

export default Calculator;