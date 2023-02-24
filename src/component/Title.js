import React from 'react'

export default function Title({title,description}) {
  return (
    <div>
        {/*display text using rendering*/}
             {/* <h2>hello world</h2>*/}

        {/* display content using props*/}
            {/* <h1>{props.titles}</h1>*/}

        {/* display content using destructuring props*/}    
             <h1>{title} and {description}</h1>
    
    </div>
  )
}
