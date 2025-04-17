
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

// suspense loop
const pricingPromise = fetch('pricing.json').then(res => res.json())

const marksPromise = axios('marksChart.json')

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
        
        {/* render(<RevolvingDot
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />) */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <ResultChart></ResultChart>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

      </main>
    </>
  )
}

export default App
