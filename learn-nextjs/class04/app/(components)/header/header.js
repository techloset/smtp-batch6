'use client'
import { useState } from "react";

export default function Header(props) {
    const [count, setCount] = useState(0)
  return (
    <div clasName={props.class}>
         
        Header
    {props.children}
        </div>
  )
}
