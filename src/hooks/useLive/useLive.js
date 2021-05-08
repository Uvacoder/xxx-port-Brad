import {getChannelStatus} from "api/twitch"
import {useEffect, useState} from "react"

const useLive = () => {
    const [live, setLive] = useState(false)

    useEffect(() => {
        const execute = async () => {
            const isLive = await getChannelStatus()
            setLive(isLive)
        }

        execute()

        const id = setInterval(() => execute(), 60000)
        return () => clearInterval(id)
    }, [])

    return live
}

export default useLive
