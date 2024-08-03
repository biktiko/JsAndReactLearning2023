import { useState } from "react"

const fullAccordion =[
    {text: "example one", childrens: 
        {text: "medium text 1", childrens: NaN}},
    {text: "example two", childrens: 
        {text: "medium text 2", childrens: 
            [{text: "low text example", childrens: NaN},
            {text: "low text example so", childrens: NaN}]}
    },
    {text: "example three", childrens: 
        {text: "medium text 4", childrens: 
            [{text: "low text example", childrens: NaN},
                {text: "low text example so", childrens: {
                    text: "yes, its example too", childrens: NaN
                }},
            {text: 'example', childrens: NaN}
            ]
        }
    }
]

// let childrensStatus = {state: false, levels: []};

// fullAccordion.forEach((string, index)=>{
//     childrensStatus[index]=0;
//     let checkedString=string
//     while(!childrensStatus.state){
//         if(checkedString.childrens){
//             childrensStatus[index]++;
//         } 
//     }
// })




const Accordion = () => {
    const [Accordion, setAccordion] = useState(fullAccordion)
    return (
        <div>
            <h1>Exercise 4</h1>
            {Accordion && 
                Accordion.map((accordion, index)=>(
                    <div key={index}>{accordion.text}</div>
                  
                ))
            }
        </div>
    )
}

export default Accordion