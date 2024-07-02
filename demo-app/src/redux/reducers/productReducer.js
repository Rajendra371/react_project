const initialState={
    products:[]

}
export const productReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'fetch_products':
            return{
                ...state,
                products:action.payload
            }
            default:
            return state
    }
}
// export default productReducer