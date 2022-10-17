import React from 'react'
import Label from '../../Label/Label'

const Trending = ({ trendindData }) => {
  return (
    <div>
      <Label LabelOne='Trending' />
      <div>
        {trendindData.map((each, index) => (
          <div>

            <h4>  {each.title}</h4>
            <p>{each.imageDetail}</p>


          </div>

        ))}
        <div>

        </div>
      </div>


    </div>
  )
}

export default Trending