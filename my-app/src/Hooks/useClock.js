import {useState} from 'react';


export default function useClock() {
    const [time, setTime] = useState("")
    const [ampm, setAmpm] = useState("")

    const updateTime = function() {
        let dataInfo = new Date()
        let hours = dataInfo.getHours();

        if(hours === 0){ hours = 12 }
        else if(hours > 12) { hours = hours - 12}

        let minutes = dataInfo.getMinutes() < 10 ? `0${dataInfo.getMinutes()}` : dataInfo.getMinutes()
        let seconds = dataInfo.getSeconds() < 10 ? `0${dataInfo.getSeconds()}` : dataInfo.getSeconds()

        let ampm = dataInfo.getHours() > 12 ? "PM" : "AM"
        
        setAmpm(ampm)
        setTime(`${hours} :${minutes} :${seconds}`)

    }

    setInterval(function() {updateTime()}, 1000)

    return [time, ampm]

}