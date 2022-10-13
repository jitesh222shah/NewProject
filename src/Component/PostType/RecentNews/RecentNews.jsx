import React from 'react'
import Label from '../../Label/Label'
import './RecentNews.css'
const RecentNews = ({recentNewsData}) => {
    return (
        <div>
            <Label LabelOne='Recent News' />
            {recentNewsData.map((each,index) => (
                <div className='recnt-main-container'>
                    <h4>{each.title}</h4>
                    {each.imageDetail}


                </div>
            ))}

        </div>
    )
}

export default RecentNews