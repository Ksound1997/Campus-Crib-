import React, { useState, useContext, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaSadTear, FaSmile, FaHome, FaTrash } from 'react-icons/fa';
import QuizContext from "../QuizContext"

const Accomodation = () => {

    const { level, setDepartment, score, setLevel, setCourse, setScore, department, setIndex, index, course, matches } = useContext(QuizContext)

    const navigate = useNavigate()



    return (
        <>

            <div className='p-5 flex flex-col items-center justify-center h-screen gap-9'>
            <h1>Accomodation</h1>
            </div>
        </>

    )
}

export default Accomodation