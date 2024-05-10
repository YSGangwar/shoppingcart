import { ReactNode, createContext, useContext, useState } from "react"; 
const shoppingCartContext = createContext({});

type shoppingCartprops = {
    children:ReactNode
}

type cartItems = {
    id:number,
    name:string,
    quantity:number

}

type shoppingCartContext = {

    incrementInCart : (id:number) => void 
    decrementInCart : (id:number) => void 
    removeFromCart  : (id:number) => void 
    getItemQuantity : (id:number) => number 

}


export function useShoppingCart(){
    return useContext(shoppingCartContext);
}


export function ShoppingCartProvider({children}:shoppingCartprops){
    const [cartItems,setCartItems] = useState<cartItems[]>([]);

    function incrementInCart ( id:number ) {
        
    }

    function getItemQuantity (id: number) {
        return cartItems.find(item=>item.id===id )?.quantity || 0;
    }

    
    return <shoppingCartContext.Provider value={{
        getItemQuantity,incrementInCart,
    }}>
        {children}
    </shoppingCartContext.Provider>
} 