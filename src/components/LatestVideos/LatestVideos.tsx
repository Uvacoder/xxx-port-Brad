import Link from "@bradgarropy/next-link"
import Image from "next/image"
import {FC} from "react"
import {Video} from "types/video"

import styles from "./LatestVideos.module.css"

type LatestVideosProps = {
    latestVideos: Video[]
}

const LatestVideos: FC<LatestVideosProps> = ({latestVideos}) => {
    return (
        <div className={styles.latestVideos}>
            {latestVideos.map(latestVideo => {
                return (
                    <Link
                        key={latestVideo.id}
                        to={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                    >
                        <div data-testid={latestVideo.id}>
                            <Image
                                src={latestVideo.thumbnail}
                                alt={latestVideo.title}
                                width="1280"
                                height="720"
                                className={styles.thumbnailContainer}
                                imgClassName={styles.thumbnail}
                            />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default LatestVideos
