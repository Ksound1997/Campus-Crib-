import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa';
import QuizContext from "../QuizContext"

const Marketplace = () => {


    const { setLevel, department } = useContext(QuizContext)


    const navigate =useNavigate()
    // console.log(department);

    

    return (
        <>
            <div className='p-5'>
                <h1>Marketplace</h1>
             
            </div>
        </>
    )
}

export default Marketplace