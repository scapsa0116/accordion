import React from 'react'
import Accordion from './Accordion'

const items = [
    {
        title: "What is react?",
        content: "I dont know"
    },
    {
        title: "aaaaa",
        content: "aaaaaw"
    },
    {
        title: "vvv?",
        content: "cccccw"
    },

]


export default  () => {
    return(
        <div> 
            <Accordion items= {items}/>
        </div>
    )
}