import React from 'react';


const RadioInput = (props) => {
    

    return (
       
       
          <div className="custom-control custom-radio">
              <input id={props.id} name={props.name} type={props.typeInput} value={props.value} className={"custom-control-input btn-warring "  + (!props.inputValid && " is-invalid ")} onChange={this.onHandleChange}  checked={props.checkedInput}/>
              <label className="custom-control-label" htmlFor={props.name}> {props.label}</label>
              <span className="invalid-feedback">{props.errorMessage}</span>
           </div> 
        
      
    )
}


export default RadioInput;