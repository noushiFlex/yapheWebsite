import React from 'react'

function BoxService(props) {
    return (
        <div className="bg-white rounded-xl p-2 h-auto shadow-md overflow-hidden">
            <div className="h-40 bg-red-400 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={props.img} className="w-full h-full object-cover" alt={props.title || "Service"} />
            </div>
            <div className="p-2">
                <h1 className="text-[var(--second)] text-start font-bold text-xl rounded-t-md">
                    {props.title}
                </h1>
                <p className="text-gray-700 text-sm overflow-hidden text-start">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default BoxService