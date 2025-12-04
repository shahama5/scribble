
import React from 'react'
import Card from '../components/card'


const cardStaticData =[
    { title:"Yoga",
        description:"attended yoga today and im feeling good today"

    },
    {
        title:"zumba",
        description:"had so much fun during zumba class met my old friend reena , my heart is so full "
    },
    {
        title:"zumba",
        description:"had so much fun during zumba class met my old friend reena , my heart is so full "
    },
    {
        title:"zumba",
        description:"had so much fun during zumba class met my old friend reena , my heart is so full "
    }
]

const MainPage = () => {
  return (

  <div>

        <div className='grid grid-cols-4 gap-4 p-4 px-45 '>
         {cardStaticData.map((item,index)=>(
        <Card key={index} 
        title={item.title}
        description={item.description}
        />
         ))}
        </div>
  </div>
  )
}

export default MainPage   