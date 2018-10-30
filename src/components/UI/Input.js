import React from 'react'


const Input = (props) => {
    return ( 
        <div className="form-group">
                <label >{props.label}</label>
                <input style={{'width':'350px'}} value={props.value} onChange={props.method} className={`form-control ${!props.valid && props.value ? 'is-invalid' : 'is-valid'}`}  placeholder={props.placeholder} />
                <div style={{'height':'20px'}} className={`${!props.valid && props.value ? 'invalid' : 'valid' }-feedback d-block`}>
                    <span>{!props.valid && props.value ? props.error : null}</span>  
                </div>
        </div>
     );
}
 
export default Input;