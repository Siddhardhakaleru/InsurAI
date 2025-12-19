import { useState } from 'react';
import './Board.css';

export default function Board(){
 let [Board,setBoard] = useState({blue : 0, red: 0, green: 0, yellow: 0});

 let blueIncrement = () => {
   setBoard({...Board, blue: Board.blue + 1});
 }
 let redIncrement = () => {
   setBoard({...Board, red: Board.red + 1});
 }
 let greenIncrement = () => {
   setBoard({...Board, green: Board.green + 1});
 }
 let yellowIncrement = () => {
   setBoard({...Board, yellow: Board.yellow + 1});
 }
 return(
 
    <div className="Board">
      
      <button style={{ backgroundColor: '#FFE013', color: 'white' }} onClick={blueIncrement}>Blue: {Board.blue}</button>
      <button style={{ backgroundColor: '#22409A', color: 'white' }} onClick={redIncrement}>Red: {Board.red}</button>
      <button style={{ backgroundColor: '#EB1C24', color: 'white' }} onClick={greenIncrement}>Green: {Board.green}</button>
      <button style={{ backgroundColor: '#02A04B', color: 'black' }} onClick={yellowIncrement}>Yellow: {Board.yellow}</button>
    </div>
  
 );
};