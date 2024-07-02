const initialData={
    cartCount:0
}
const cartReducer=(state=initialData, action)=>{
    switch(action.type){
        case 'add_to_cart':
            return{
                cartCount:++state.cartCount
            }
            case 'remove_from_cart':
                return{
                    cartCount:--state.cartCount
                }

            default:
                return state
    }
   
           
        }
     
export default cartReducer