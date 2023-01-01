import './Calculadora.css';
import Container from '@mui/material/Container'
import { useState } from 'react';


function Calculadora() {

    const[num,setNum]=useState(2);

    function inputNum(e){
        if(num===0){
            setNum(e.target.value)
        }else{
            setNum(num + e.target.value)
        }
    }

    function tiraNum(e) {
        setNum(0)        
    }

    function porcentagem (e){
        setNum(num/100)
    }

    function reverse (){
        if(num>0){
            setNum(-num)
        }else{
            setNum(-num)
        }
    }

    function divisao (){
        setNum(num )
    }


    return(
        
        <Container maxWidth="xs">
        <div className='wrapper'>

            <h1>{num}</h1>

            <button className='branco' onClick={tiraNum} >AC</button>
            <button className='branco' onClick={reverse}>+/-</button>
            <button className='branco' onClick={porcentagem}>%</button>
            <button className='laranja' onClick={divisao}>/</button>
            <button className='cinzas' onClick={inputNum} value={7}>7</button>
            <button  className='cinzas' onClick={inputNum} value={8}>8</button>
            <button className='cinzas' onClick={inputNum} value={9}>9</button>
            <button className='laranjas'>X</button>
            <button className='cinzas'  onClick={inputNum} value={4}>4</button>
            <button className='cinzas' onClick={inputNum} value={5}>5</button>
            <button className='cinzas' onClick={inputNum} value={6}>6</button>
            <button className='laranjas'>-</button>
            <button className='cinzas' onClick={inputNum} value={1}>1</button>
            <button className='cinzas' onClick={inputNum} value={2}>2</button>
            <button className='cinzas' onClick={inputNum} value={3}>3</button>
            <button  className='laranjas'>+</button>
            <button className='cinzas' onClick={inputNum} value={0}>0</button>
            <button className='cinzas' onClick={inputNum} value={","}>,</button>
            <button className='cinzas' id='invisivel'>+-</button>
            <button className='branco'>=</button>
        </div>
        </Container>

    );
}

export default Calculadora;
