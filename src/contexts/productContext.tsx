/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext, useContext, useState, useEffect, ReactNode} from 'react'
import {db} from "../config/firebaseConfig"
import {getDocs, collection} from "firebase/firestore"

interface Product {
    id: string;
    category: string;
    name: string;
    'new price': number;
    'old price': number;
    image: any;

}

type ProductContent = {
    products: Product[]
}
const Context = createContext<ProductContent>({
    products: [],
})

//custom hook to call whenever i need this context data
const useProduct = () => {
    const context = useContext(Context)
    return context;
}
function ProductProvider({children}: {children: ReactNode}) {
    const [products, setProducts] = useState<Product[]>([])

    const productsCollectionRef = collection(db, "products")

    useEffect(() => {
        const getProductList = async () => {
            try {
                // TODO: READ THE DATA FROM THE DB
                const data = await getDocs(productsCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    category: doc.data().category,
                    name: doc.data().name,
                    'new price': doc.data()['new price'],
                    'old price': doc.data()['old price'],
                    image: doc.data().image,
                    id : doc.id
                }))

                // TODO: SET THE PRODUCTS STATE 
                setProducts(filteredData)
            } catch (err) {
                console.log(err)
            } 
        }
        getProductList()
    }, [])
  return (
    <Context.Provider value={{products}}>
        {children}
    </Context.Provider>
  )
}

export { ProductProvider, useProduct }