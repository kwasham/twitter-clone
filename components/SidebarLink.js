import React from 'react'

function SidebarLink({ text, Icon, active }) {
  return (
    <div
      className={`xl: hoverAnimation flex items-center justify-center xl:justify-start space-x-3 text-xl text-[#d9d9d9] ${active && 'font-bold'}`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
    
  )
}

export default SidebarLink
