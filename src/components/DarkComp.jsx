import { useState } from "react";

export const Darkcomp = ()=>{
    const [dark, setDark ] =useState(false);
    const toggleTheme =()=>{
        setDark(!dark);
        document.body.classList.toggle("dark");
    };
    return(
        <div >
            {dark ?
            (
            <div >
                <button  onClick={toggleTheme}>Moon </button> 
            </div>):
                
            (<div >
                <button  onClick={toggleTheme}>Sun</button>
            </div>)
            }
        </div>



    );
    };
