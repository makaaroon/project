import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from '../../Components/Header/Header';
import './Contacts.scss'
import { Footer } from '../../Components/Footer/Footer';



export function Contacts() {

  return (
    <>
     

    <div>

      <h1 className='contacts-title'>Контакты</h1> <br /> <br />

      <h2 className='contacts-subtitle'>ООО «Movido» <br /><br/> 
      Адрес Местонахождения: 161343, Россия, г. Москва,
      ул. Примерная, д. 123, офис 456 <br /> <br />

      Телефон: +7 (495) 123-45-67 <br /> <br />

      По вопросам сотрудничества напишите нам на partners@wink.ru 
      <br /> <br />

      Служба поддержки: Для вопросов и помощи связанных
      с нашим сервисом, пожалуйста, обращайтесь по 
      электронной почте на support@movido.com или звоните
      нам по телефону в рабочее время</h2>
     
      
    </div> 

    <div className='contacts-footer position-absolute  start-0 end-0 '>
      <Footer/>
    </div>
    
    
    
 
    </>
  )
}