import * as actionTypes  from "../ActionsLoginUsers" 
import AuthApi from "../../Services/authApi"

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

const initialState = {

    credentials: {
          username: "",
          password : ""
    },
    errors: {
        username: { isValid: true, message: "", touched: false },
        password: { isValid: true, message: "", touched: false },
              },
    user :{},
    login: false ,
    validForm: true ,
    token : "" 

}
   
const reducer = (state=initialState , action ) =>{
  console.log(state.token)
   switch (action.type) {
       case actionTypes.ONHANDELCHANGE:
           const value = action.payload.event.currentTarget.value;  
           const name =  action.payload.event.currentTarget.name;  
           const errorsForm = { ...state.errors };

        switch (name) {
            case "username":
                errorsForm.username.touched = true;
                if (!validEmailRegex.test(value) || value.trim() === "") {
                    errorsForm.username.message = "email Invalid"
                    errorsForm.username.isValid = false;
                } else {
                  errorsForm.username.message = "";
                  errorsForm.username.isValid = true;
                }
                  
                break;
            case "password":
                errorsForm.password.touched = true;
                if (value.length < 6 || value.trim() === "") {
                    errorsForm.password.message = "password must be 6 charcter long"
                    errorsForm.password.isValid = false;
                } else {
                    errorsForm.password.message = "";
                    errorsForm.password.isValid = true;
                }
               break;
    
            default:
                break;
        }
        return {
           ...state,
            credentials : {...state.credentials , [name] : value} ,
            errors : errorsForm
        }
       
       
       
       case actionTypes.ONHANDELSUBMIT:
        let token =""
        action.payload.event.preventDefault();
        let  allFormValid = true;
        let errorsFormForSubmit = {...state.errors} 
        Object.entries(errorsFormForSubmit).forEach((error) => {
       
            if ((!error[1].isValid && error[1].touched )|| (error[1].isValid && !error[1].touched)) {
                allFormValid = false;
                errorsFormForSubmit[error[0]].message = error[0] + " is Required ";
                errorsFormForSubmit[error[0]].isValid = false;
            } else {
                allFormValid = true
            }
        });  
          
        if (allFormValid) {
           
            AuthApi.authenticate(state.credentials).then(data => {
    
      
            })
              
              
        }

           return {
               ...state,
               errors: errorsFormForSubmit ,
               validForm: allFormValid,
               token : token
              }
   
       default:
           break;
   }

    
    
       

    return state;



}

export default reducer;