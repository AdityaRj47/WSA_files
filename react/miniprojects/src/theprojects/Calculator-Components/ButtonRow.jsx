import React from 'react'


const ButtonRow = ({handleButtonClick}) => {
    const buttons = [
        {label:"C", className:"clear-icon bg"},
        {label:"BCK", className:"delete-icon bg"},
        {label:"%", className:"percent-icon bg"},
        {label:"/", className:"divide-icon bg"},
        {label:"7"},
        {label:"8"},
        {label:"9"},
        {label:"*", className:"multiply-icon bg"},
        {label:"4"},
        {label:"5"},
        {label:"6"},
        {label:"+", className:"plus-icon bg"},
        {label:"1"},
        {label:"2"},
        {label:"3"},
        {label:"-", className:"minus-icon bg"},
        {label:"0", className:"zero"},
        {label:"."},
        {label:"=", className:"equals-icon bg"}

    ]
  return (
    <>
        <section className="btn-row">
             {buttons.map((btn,index) =>(
                <button key={index} className={btn.className} onClick={() => handleButtonClick(btn.label)}>
                    {btn.label}
                </button>
             ))}        
        </section>
                      
    </>
  )
}

export default ButtonRow;
