import {graphql} from "@octokit/graphql"

import type {Sponsor, Sponsors} from "~/types/sponsor"

type SponsorshipsResponse = {
    user: {
        sponsorshipsAsMaintainer: {
            nodes: SponsorshipAsMaintainer[]
        }
    }
}

type SponsorshipAsMaintainer = {
    sponsorEntity: SponsorEntity
    tier: Tier
}

type SponsorEntity = {
    login: string
    url: string
    avatarUrl: string
}

type Tier = {
    name: string
    description: string
    isOneTime: boolean
}

const getSponsors = async (): Promise<Sponsors> => {
    const octokit = graphql.defaults({
        headers: {
            authorization: `Token ${process.env.GITHUB_TOKEN}`,
        },
    })

    const {user} = await octokit<SponsorshipsResponse>(
        `
            {
                user(login: "bradgarropy") {
                    sponsorshipsAsMaintainer(first: 10) {
                        nodes {
                            sponsorEntity {
                                ... on User {
                                    login
                                    url
                                    avatarUrl
                                }
                            }
                            tier {
                                name
                                description
                                isOneTime
                            }
                        }
                    }
                }
            }
        `,
    )

    const sponsors: Sponsors = {
        "monthly": [],
        "one-time": [],
    }

    const sponsorships = user.sponsorshipsAsMaintainer.nodes

    sponsorships.forEach(sponsorship => {
        const re = new RegExp("### (.*)$", "m")
        const tier = re.exec(sponsorship.tier.description)[1].split(" ")[0]

        const sponsor: Sponsor = {
            username: sponsorship.sponsorEntity.login,
            avatar: sponsorship.sponsorEntity.avatarUrl,
            profile: sponsorship.sponsorEntity.url,
            tier,
        }

        if (sponsorship.tier.isOneTime) {
            sponsors["one-time"].push(sponsor)
        } else {
            sponsors["monthly"].push(sponsor)
        }
    })

    return sponsors
}

export {getSponsors}
