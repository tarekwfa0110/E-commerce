import Features from "./components/features/Features";
import MainHeader from "./components/header/MainHeader";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import ProductFilter from "./ui/ProductFilter";
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
      
      <div className="w-full bg-gray-100 pb-10">
        <div className="w-[90%] m-auto">
          <Hero />
          <Features />
          <ProductFilter buttonIndex={buttonIndex} setButtonIndex={setButtonIndex}/>
          <Main buttonIndex={buttonIndex} setButtonIndex={setButtonIndex}/>
        </div>
      </div>

  

      
    </QueryClientProvider>
  );
}