import { HTMLAttributes, ReactNode } from 'react'
import React from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
  
   children?:ReactNode


}

const heading = ({children,className,...props}) => {
  return (
    <div>
      
    </div>
  )
}

export default heading
