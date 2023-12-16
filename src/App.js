import Welcome , { Printinfo } from './welcome';
import Sum from './sum';
import { Factorial } from './factorial';
import { Object } from './object';
import './App.css';
import { Oparator } from './oparator';

function App() {
  let x = <p>hello world</p>
  console.log("type of: ",typeof(x))

  let arr = [10,20,30,40,50,60]
  let y = 5

  let obj = {name : "rohit" , skill : "batsman" , age : "36"}

  return (
    <><p>hello world</p>
    <Welcome></Welcome>
    <Printinfo></Printinfo>
    <Sum nums = {arr}></Sum>
    <Factorial num = {y}></Factorial>
    <Object obj = {obj}></Object>
    <Oparator num1 = {10} num2 = {20} op = {"-"} ></Oparator>
    <Oparator num1 = {40} num2 = {20} op = {"+"} ></Oparator>
    <Oparator num1 = {30} num2 = {10} op = {"*"} ></Oparator>
    <Oparator num1 = {60} num2 = {5} op = {"/"} ></Oparator>
    </>
  

  );
}

export default App;