const loginAction = (data)=>{
    return{
        type: "AUTH_ACTION",
        payload: {
            data: {
                ...data
            }
        }
    }
}

export default loginAction;
