import React , { useState } from 'react'
let a1,a2,a3,x,add=0,sub=0,mul=0

export default function Calculator() {
  const [total, setTotal] = useState( "");
  

  const putval= (e) =>{
    setTotal(total+e.target.value)
  }
  const putval1= (e) =>{
    setTotal(total+e.target.value)
   

  }

  const plus = () => {
    a1=parseFloat(total);
    setTotal("");
    add++;
  }
  const clear =() =>{
    setTotal("")
    
  }
  const minus = () => {
    a1=parseFloat(total);
    setTotal("");
    sub++;
  }
  const multiply = () => {
    a1=parseFloat(total);
    setTotal("");
    mul++;
  }
  const divide = () => {
    a1=parseFloat(total);
    setTotal("");
    
  }
  const equalTo = () => {
    a2=parseFloat(total);
    
    if(add>0){
    a3=a1+a2;
    add=0;
    }
    else if(sub>0){
      a3=a1-a2;
      sub=0;
    }
    else if(mul>0){
      a3=a1*a2;
      mul=0;
    }
    else{
      if(a2===0){
        alert("Error..number divided by 0 is not defined!!")

      }
      else{
        a3=a1/a2;
      }
      
    }
    setTotal(a3);
  }
  
 const handlecheck = () =>{
  console.log("value changed");

 }

  return (
    <>
    <h1>Calculator</h1>
    
    
    <div className="box">
      
      <div className="space"><textarea name="cal_space" className="calspace" value={total} onChange={handlecheck}  cols="20" rows="2"></textarea></div>
      <div className="key">
        <table >
          <tr>
            <td > <button className="butt" value={7} onClick={putval}> 7 </button> </td>
            <td > <button className="butt" value={8} onClick={putval}> 8 </button> </td>
            <td > <button className="butt" value={9} onClick={putval}> 9 </button> </td>
            <td> <button className="butt1" onClick={clear}> &#67; </button> </td>
          </tr>
          <tr>
            <td  > <button className="butt" value={4} onClick={putval}> 4</button> </td>
            <td > <button className="butt" value={5} onClick={putval}> 5 </button> </td>
            <td > <button className="butt" value={6} onClick={putval}> 6 </button> </td>
            <td> <tr><button className="butt1" onClick={divide}> &#247; </button> </tr>
            <tr> <button className="butt1" onClick={multiply}> &#215; </button> </tr></td>
          </tr>
          <tr>
            <td > <button className="butt" value={3}   onClick={putval}> 3 </button> </td>
            <td > <button className="butt" value={2} onClick={putval}> 2 </button> </td>
            <td > <button className="butt" value={1} onClick={putval}> &#49;</button> </td>
            <td> <button className="butt1" onClick={minus} > &#8722; </button> </td>
          </tr>
          <tr>
            <td > <button className="butt" value={0} onClick={putval}> 0 </button> </td>
            <td > <button className="butt" value={"."} onClick={putval1}> . </button> </td>
            <td > <button className="butt" onClick={ equalTo}> = </button> </td>
            <td> <button  className="butt1" onClick={plus}> &#43; </button> </td>
          </tr>
        </table>
      </div>

    </div>
    </>
  )
}
