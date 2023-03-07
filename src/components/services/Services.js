import React from 'react'
import Main from '../../Reusable-Component/Main '
import { Home } from 'react-feather'

export default function Services() {
  return (
    <div>
    <Main title={["Services","services"]} router={'/services'} icon={Home}/>
    </div>
  )
}
