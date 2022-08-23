const initState = {
    basics: {},
    timeline: {},
    profileImage: {},
    personalData: {},
}


const userDataReducer = (state = initState, action)=>{
    if (action.type === "GET_USER_HOME_DATA"){
        // const timeToExpire = 1800000+Date.now()
        // action.payload.data.timeToExpire = timeToExpire;
        return action.payload.data
    }else if(action.type === "CLEAR_USER_HOME_DATA"){
        return initState;
    }else if((action.type === "LOGOUT_ACTION") || (action.type=== "NEW_VERSION")){
        return initState;
    }else{
        return state;
    }
}

export default userDataReducer