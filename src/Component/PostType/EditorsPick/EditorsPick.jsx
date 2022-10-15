import React from 'react'
import Label from '../../Label/Label'
import './EditorsPick.css'
const EditorsPick = ({ editorsPickData }) => {
    return (
        <div>
            <Label LabelOne="Editor's Choice " className='label-editors-choice' />
            {editorsPickData.map((each, index) => (
                <div className='editorsPick-main-container'>

                    <div className='editorsPick-image-and-title-detail-container'>
                        <div className='editors-left-main-container'>
                            <div key={index}>

                                <img src={each.image} alt='' className='image-left-main-container' />
                            </div>
                            <div>
                                <h4>{each.title}</h4>
                                {each.imageDetail}
                            </div>

                        </div>
                        <div>
                            <img src={each.image} alt='' className='editorsPick-image-container' />
                        </div>
                        <div>

                            <h4 >{each.title}</h4>
                            {/* <p>{each.imageDetail}</p> */}
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default EditorsPick