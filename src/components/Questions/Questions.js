import React from 'react';

const Questions = (props) => {
    let { questionsList } = props;

    let mappedList = questionsList.map((e, i) => {
        let { category, question, difficulty, correct_answer, incorrect_answers  } = e;
        return <div key={i}> 
                    <h4>{difficulty}</h4>
                    <h1>{question}</h1>
                    <button>{correct_answer}</button>
                    {incorrect_answers.map(e => {
                        return <button>{e}</button>
                    })}
               </div>
    })
    return ( 
        <div>
        {mappedList}
        </div>
     );
}
 
export default Questions;