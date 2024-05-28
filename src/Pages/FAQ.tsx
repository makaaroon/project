import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '../Components/Card/Card';
import faq from '../faq.json'
import {Header} from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { Answer } from '../Components/Answer/Answer';


export function FAQ() {
//   const [count, setCount] = useState(0)

  return (
    <>
    
    
    {faq.map(faq => <Answer question={faq.question} answer={faq.answer}  />)}

    

    <Footer/>
    </>
  )
}