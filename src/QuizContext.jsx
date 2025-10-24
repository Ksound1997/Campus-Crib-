import React from 'react'
import { createContext, useState } from 'react'
import questions from './questions';

const QuizContext = createContext();



export function QuizProvider({ children }) {
  // console.log(questions);

  const [name, setName] = useState('Ksound')
  const [department, setDepartment] = useState(null)
  const [level, setLevel] = useState(null)
  const [course, setCourse] = useState(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const User=localStorage.getItem("User");

  console.log(User);
  

  const matches = questions.filter(h => h.code === course)

  // console.log(matches);
  // console.log(index);


  return (
    <QuizContext.Provider value={{ setCourse, User, course, setName, questions, department, setDepartment, level, setLevel, index, setIndex, matches, score, setScore }}>
      {children}
    </QuizContext.Provider>
  )
}


export default QuizContext;
