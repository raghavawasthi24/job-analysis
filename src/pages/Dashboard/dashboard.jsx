import React from 'react'
import Sidebar from '../../components/Sidebar'
import Charts from './Charts'

export default function Dashboard() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <Charts/>
    </div>
  )
}
