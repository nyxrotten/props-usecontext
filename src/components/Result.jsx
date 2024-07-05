import {Link} from 'react-router-dom'
import { useNumbers } from "./CalculatorProvider";

const Result = () => {

    const  {numbers, saveNumbers} = useNumbers();

    const resetNumbers = (e) => {
        e.exportDefault;
        saveNumbers([])
    }

    const sumNumbers = () => {
        const sumAllNumbers = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        },0);
        return sumAllNumbers
    }
    
    return (
        <>
            <div className="calculator">
                <div className="calculatorBox">
                    <h1>Result</h1>
                        <div className='allNumbers'>
                            <h3>All numbers: {numbers}</h3>
                            <h3>Total: {sumNumbers()}</h3>
                        </div>
                    <section className="result">
                        <button onClick={resetNumbers}>Reset numbers</button> 
                        <h2><Link to ="/"  style={{ textDecoration: 'none' }}>Go back</Link></h2>
                    </section>
                </div>
            </div>
        </>
    )
}
 
export default Result;