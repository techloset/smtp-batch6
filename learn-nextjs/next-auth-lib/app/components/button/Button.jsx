"use client"
import React,{useState} from 'react'
import CreateBillModal from '../createBillModal/CreateBillModal'

export default function Button() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <CreateBillModal isOpen={isOpen} onClose={()=>setIsOpen(!isOpen)} onCreate={false} />
            <button style={{ marginTop: 20 }} onClick={setIsOpen}>Create Bill</button>
        </div>
    )
}
