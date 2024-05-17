import { useState } from 'react'
import textStyle from './Text.module.css'

const Text = (props) => {

    let transitionClass = `w-72 p-1 mx-2.5 -translate-x-${props.translate} transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center`
    return(
        <>
        {props.translate ?
            props.translate === 320 ? 
                <div className={'w-72 p-2 mx-2.5 -translate-x-80 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'}>
                    <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                        {props.text}
                    </div>
                </div>:
                    props.translate === 640 ?
                    <div className=' w-72 mx-3 p-2 -translate-x-160 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'>
                    <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                        {props.text}
                    </div>
                    </div>:
                        props.translate === 960 ?
                        <div className=' w-72 mx-3.5 p-2 -translate-x-240 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'>
                        <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                            {props.text}
                        </div>
                        </div>:
                            props.translate === 1280 ?
                            <div className=' w-72 mx-3.5 p-2 -translate-x-320 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'>
                            <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                                {props.text}
                            </div>
                            </div>:
                                props.translate === 1600 ?
                                <div className=' w-72 mx-3.5 p-2 -translate-x-400 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'>
                                <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                                    {props.text}
                                </div>
                                </div>:                       
                <div className=' w-72 p-2 translate-x-0 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'>
                    <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                        {props.text}
                    </div>
                </div>:          
            <div className=' w-72 p-2 transition-all my-3 bg-pink-50 h-60 rounded-xl shadow-md flex justify-center items-center'>
                <div className="font-sans-serif font-medium opacity-70 w-80 text-center"> 
                    {props.text}
                </div>
            </div>        
        }
        </>
    )
}

export default Text