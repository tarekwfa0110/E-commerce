<<<<<<< HEAD
=======
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
import Features from "./components/features/Features";
import MainHeader from "./components/header/MainHeader";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import ProductFilter from "./ui/ProductFilter";
<<<<<<< HEAD
import { QueryClient,  QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function App() {
  const [buttonIndex, setButtonIndex] = useState(0)
  const queryClient = new QueryClient()

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
        fetch('https://fakestoreapi.com/products?limit=16').then((res) =>
            res.json(),
        )
})

if (isPending) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

  return (
    <QueryClientProvider client={queryClient} value={data}>
      <div className="m-auto">
        <MainHeader />
      </div>
      
=======
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "./api/fetch";
const queryClient = new QueryClient()

function App() {
  const [cartItems, setCartItems] = useState([{
    "id": 3,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "quantity": 2
}, {
  "id": 2,
  "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "title": "Mens Casual Premium Slim Fit T-Shirts ",
  "price": 22.3,
  "quantity": 1
}])
  const [buttonIndex, setButtonIndex] = useState(0)

  useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

    console.log(cartItems)


  return (

    <>
      <div className="m-auto">
        <MainHeader cartItems={cartItems} setCartItems={setCartItems}/>
      </div>

>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
      <div className="w-full bg-gray-100 pb-10">
        <div className="w-[90%] m-auto">
          <Hero />
          <Features />
<<<<<<< HEAD
          <ProductFilter buttonIndex={buttonIndex} setButtonIndex={setButtonIndex}/>
          <Main buttonIndex={buttonIndex} setButtonIndex={setButtonIndex}/>
        </div>
      </div>

  

      
    </QueryClientProvider>
  );
}
=======
          <ProductFilter buttonIndex={buttonIndex} setButtonIndex={setButtonIndex} />
          <Main buttonIndex={buttonIndex} setButtonIndex={setButtonIndex} cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      </div>
      <div>
        
      </div>
    </>


  );
}

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
export default AppWrapper
>>>>>>> 2cd736e (Fixed cart stying, closing out when clicking any button bug, and cart badge quantity)
