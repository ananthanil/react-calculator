import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React,{useState} from 'react'

function App() {
    const [displayValue,setDisplayValue]= useState()
    const [operation,setOperation] = useState()
    const [initalValue,setInitalValue] = useState()

    function handleKeypadNumEvent (value){
      setDisplayValue(value)
    }

    function handleAddEvent(){
      setInitalValue(displayValue)
      setDisplayValue("")
      setOperation("ADD")
    }

    function handleSubEvent(){
      setInitalValue(displayValue)
      setDisplayValue("")
      setOperation("SUB")
    }

    function handleMulEvent(){
      setInitalValue(displayValue)
      setDisplayValue("")
      setOperation("MUL")
    }

    function handleDivEvent(){
      setInitalValue(displayValue)
      setDisplayValue("")
      setOperation("DIV")
    }

    function handlePercentageEvent(){
      setInitalValue(displayValue)
      setDisplayValue("")
      setOperation("PERCENTAGE")
    }

    function handleClearEvent(){
      setDisplayValue("")
    }


    function handleFindFinalResult(){
      if(operation==="ADD"){
        setDisplayValue(parseFloat(initalValue)+parseFloat(displayValue))
      }else if(operation==="SUB"){
        setDisplayValue(parseFloat(initalValue)-parseFloat(displayValue))
      }else if(operation==="MUL"){
        setDisplayValue(parseFloat(initalValue)*parseFloat(displayValue))
      }else if(operation==="DIV"){
        setDisplayValue(parseFloat(initalValue)/parseFloat(displayValue))
      }else{
        setDisplayValue((parseFloat(initalValue)*parseFloat(displayValue))/100)
      }
    }

  return (

    <div className="App" >
     
      <div className='btn_under_spacing'>
        <TextField id="outlined-basic" value={displayValue} sx={{ ml:4 }} variant="outlined" />
      </div>

      <div className='btn_under_spacing'>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent("(")}} sx={{ mr: 1 }}>(</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(")")}} sx={{ mr: 1 }}>)</Button>
        <Button variant="contained" onClick={handlePercentageEvent} sx={{ mr: 1 }}>%</Button>
        <Button variant="contained" onClick={handleDivEvent}>/</Button>
      </div>

      <div className='btn_under_spacing'>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(7)}} sx={{ mr: 1 }}>7</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(8)}} sx={{ mr: 1 }}>8</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(9)}} sx={{ mr: 1 }}>9</Button>
        <Button variant="contained" onClick={handleMulEvent}>X</Button>
      </div>

      <div className='btn_under_spacing'>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(4)}} sx={{ mr: 1 }}>4</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(5)}} sx={{ mr: 1 }}>5</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(6)}} sx={{ mr: 1 }}>6</Button>
        <Button variant="contained" onClick={handleSubEvent}>-</Button>
      </div>

      <div className='btn_under_spacing'>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(1)}}  sx={{ mr: 1 }}>1</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(2)}}  sx={{ mr: 1 }}>2</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(3)}}  sx={{ mr: 1 }}>3</Button>
        <Button variant="contained" onClick={handleAddEvent}>+</Button>
      </div>

      <div className='btn_under_spacing'>
        <Button variant="contained" onClick={handleClearEvent} sx={{ mr: 1 }}>clr</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(0)}} sx={{ mr: 1 }}>0</Button>
        <Button variant="contained" onClick={()=>{handleKeypadNumEvent(".")}} sx={{ mr: 1 }}>.</Button>
        <Button variant="contained" onClick={handleFindFinalResult}>=</Button>
      </div>

    </div>
  );
}

export default App;
