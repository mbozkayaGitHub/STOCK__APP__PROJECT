import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import KpiCards from '../components/KpiCards'
import Charts from '../components/Charts'
import useStockCall from '../hooks/useStockCall'

const Home = () => {
  const {getStockData} = useStockCall()
  
  useEffect(() => {
getStockData("sales")
getStockData("purchases")
  },[])
  return (

    <div> 
       <Typography variant="h4" color="error" mb={3}>
    Dashboard
  </Typography>

  <KpiCards/> 
  <Charts/>
    </div>
   
  )
}

export default Home