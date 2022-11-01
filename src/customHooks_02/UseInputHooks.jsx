import {useInput} from "../Hooks/useInput";


function  displayMessage(message) {
   alert(message);
}

function UseInputHooks(){
  const [inputValue,handleChange,handleSubmit]  = useInput("안녕",displayMessage);
    return(
        <div>
            <h1>useInput</h1>
            <input type="text" value ={inputValue} onChange={handleChange}/>
            <button onClick={handleSubmit}>확인</button>
        </div>
    )
}

export default UseInputHooks;