import React from 'react'
import Label from '../../Label/Label'

const Trending = ({trendindData}) => {
  return (
    <div>
        <Label  LabelOne='Trending'/>
        <div>
          {trendindData.map((each,index)=>(
            <div>
              
              {each.title}
              <p>It's me trending</p>
            </div>

          ))}
          <div>

          </div>
        </div>

   
    </div>
  )
}

export default Trending