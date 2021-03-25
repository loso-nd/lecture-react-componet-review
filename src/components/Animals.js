import React from 'react'
import AnimalCard from './AnimalCard'

function Animals(){
    return(
        //class moves the elemens side to side
        <div className="ui inverted blue menu">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </div>
    )
}

export default Animals;