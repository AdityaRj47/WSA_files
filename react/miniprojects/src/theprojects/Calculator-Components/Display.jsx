import React from 'react'

const Display = ({input, output}) => {
  return (
    <>
    {/* <-!---Output Screen----!-> */}
      <div class="output-field-container"> 
            <input
                type="text" className="output-field"
                id="display" value={output}
                readonly
            />
            <input type="text" className="input-field"
                    placeholder="0" id="input-screen"
                    value={input}
                    readonly
            />
     </div>
    </>
  )
}

export default Display;