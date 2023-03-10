import React, { useState } from "react";
import ' ./TickTackToe.css'

const TickTackToe = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));


    const handleClick = (num) => {
        let squares = [...cells];


        if (turn === 'x') {
            squares[num] = 'x'
            setTurn('0');
        } else {
            squares[num] = '0'
            setTurn('x');
        }
        'N'
        console.log(squares)
    };


    const Cell = ( {num} ) => {
        return <td onClick={() => handleClick(num)}></td>
    };






    return(
        <div className="container">
            <table>
                Turn: {turn}
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    
                <Cell num={3}/>
                <Cell num={4}/>
                <Cell num={5}/>
                </tr>
                <tr> 
                <Cell num={6}/>
                <Cell num={7}/>
                <Cell num={8}/>
                </tr>
            </table>
        </div>
    );
};

export default TickTackToe;