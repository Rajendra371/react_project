const initialData={
    name: 'Arjun'
}
const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'change_name':
            return{
                ...state,
                name:action.payload
            }
        default:
            return state
    }

}

export default studentReducer