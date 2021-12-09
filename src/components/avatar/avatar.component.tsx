import React, { useEffect, useState } from "react"

declare interface IGender {
    gender: string
}

export const Avatar:React.FC<IGender> = ({gender}) => {
    const [image, setImage] = useState<any | null>(null)

    useEffect(() => {
        const numberRandom: number = Math.random();
        const processRandom: number = Math.floor(numberRandom  * 10);

        gender && gender === 'female'
        ? require(`../../avatar/w${processRandom}.png`)
        : require(`../../avatar/m${processRandom}.png`)
        
    },[gender])

    return(
        <img src={image} loading="lazy" alt="" />
    )
}