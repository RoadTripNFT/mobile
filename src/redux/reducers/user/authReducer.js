const authReducer = (state = {}, action)=>{
    if ((action.type === "AUTH_ACTION") || (action.type ==="LOGIN_ACTION")){
        if(action.payload instanceof Error){
            return {msg: "tooManyRequests"}
        }else{
            return action.payload.data
        }
    }else if(action.type === 'REMOVE_AUTH_MESSAGE'){
        const newState = {...state};
        newState.msg = "";
        return newState;
    }else if(action.type ==="TOO_MANY_ATTEMPTS"){
        return action.payload; 
    }else if(action.type ==="STRAIGHT_LOGIN"){
        return action.payload
    }else if(action.type === "UPDATE_JWT"){
        const newState = {...state};
        newState.jwtToken = action.payload;
        return newState;
    }else if(action.type === "UPDATE_NAME"){
        const newState = {...state};
        newState.name = action.payload;
        return newState;
    }else if((action.type === "LOGOUT_ACTION") || (action.type=== "NEW_VERSION")){
        return {}
    }else{
        return state
    }
}


export default authReducer