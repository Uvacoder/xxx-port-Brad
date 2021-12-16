import FeaturedProjects from "components/FeaturedProjects"
import Hero from "components/Hero"
import LatestPosts from "components/LatestPosts"
import LatestVideos from "components/LatestVideos"
import Newsletter from "components/Newsletter"
import Podcast from "components/Podcast"
import Section from "components/Section"
import {FC} from "react"

import styles from "./Home.module.css"

const Home: FC = () => {
    return (
        <div className={styles.sections}>
            <Hero />

            <Section title="blog" link="/blog">
                <LatestPosts />
            </Section>

            <Section title="videos" link="https://youtube.com/bradgarropy">
                <LatestVideos />
            </Section>

            <Section title="projects" link="https://github.com/bradgarropy">
                <FeaturedProjects />
            </Section>

            <Section title="podcast" link="https://webdevweekly.captivate.fm">
                <Podcast />
            </Section>

            <Section title="newsletter" link="/newsletter">
                <Newsletter />
            </Section>
        </div>
    )
}

export default Home
