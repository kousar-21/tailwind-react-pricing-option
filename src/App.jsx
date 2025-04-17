
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultChart from './Components/ResultChart/ResultChart'

// suspense loop
const pricingPromise = fetch('pricing.json').then(res => res.json())

function App() {


  return (
    <>
     <header>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
     </header>

     <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <ResultChart></ResultChart>
     </main> 
    </>
  )
}

export default App
