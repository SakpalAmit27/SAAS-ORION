import { cn } from '@/utils'
import { HTMLAttributes, ReactNode } from 'react'
import React from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{

   children?:ReactNode


}

const Heading = ({children,className,...props}:HeadingProps) => {
  return (
    <h1 className={cn("text-4xl sm:text-5xl text-pretty font-bold tracking-tight text-zinc-800 font-headingfont",className)} {...props}>
      {children}
    </h1>
  )
}

export default Heading
