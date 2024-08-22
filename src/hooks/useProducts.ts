import productService from '@/dashboard/services/products.service' 
import { useProductStore } from '@/store/dashboard/useproductStore'

export const useProducts = ()=>{
    const setProducts = useProductStore((state)=> state.setProducts)
    const getProducts = async () =>{
        const resp = await productService.getProducts();
        const {products} = resp;
        setProducts(products)
    }
    return{getProducts}

}