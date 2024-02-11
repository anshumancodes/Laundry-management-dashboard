import React from 'react'

const Badges = ({badgetext},{bordercolor}) => {
  return (
    <div>
    <span class={`inline-flex items-center gap-x-1.5 py-2 px-4 rounded-full text-[1rem] font-medium border border-${bordercolor} text-blue-600 dark:text-blue-500`}>{badgetext}</span>
    </div>
    
  )
}

export default Badges
