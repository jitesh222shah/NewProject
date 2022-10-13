import React from 'react'
import './EditorsPick.css'
const EditorsPick = ({ editorsPickData }) => {
    return (
        <div>
            {editorsPickData.map((each,index) => (
                <div className='editorsPick-main-container'>
                    <div className='editorsPick-image-and-title-detail-container'>
                       <div> 
                        <img src={each.image} alt=''
                         className='editorsPick-image-container'/>
                         </div>
                        <div><h4>{each.title}</h4>
                        <p>{each.imageDetail}</p></div>
                    </div>
                    <div>
                        <h4>{each.title}</h4>
                       {each.imageDetail}

                    </div>
                </div>
            ))}

        </div>
    )
}

export default EditorsPick