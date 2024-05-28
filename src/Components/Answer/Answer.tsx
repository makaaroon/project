import './Answer.scss'

interface IFaq {
    question: string,
    answer: string
}

export const Answer = (props: IFaq) => {
    return (
        <>
            <div className='faq-block '>
               <h1 className='faq-question'>{props.question}</h1>
               <h2 className='faq-answer'>{props.answer}</h2>
            </div>



        </>
    )

    
}