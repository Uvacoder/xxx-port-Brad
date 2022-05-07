type Podcast = {
    title: string
    link: string
    image: string | StaticImageData
    episodes: PodcastEpisode[]
}

type PodcastEpisode = {
    title: string
    link: string
    date: string
}

export type {Podcast, PodcastEpisode}
