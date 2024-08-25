import React from 'react'
import { Outlet } from 'react-router-dom'

const SideLayout = () => {
  return (
    <div className="h-full bg-gray-200 font-noto">
      <Outlet />
    </div>
  )
}

export default SideLayout
