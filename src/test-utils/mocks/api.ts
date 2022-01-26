const mockYoutubeResponse = {
    items: [
        {
            id: {
                videoId: "abc123",
            },
            snippet: {
                thumbnails: {
                    default: {
                        url: "https://youtube.com/first.jpg",
                    },
                },
                title: "first test video",
            },
        },
        {
            id: {
                videoId: "def456",
            },
            snippet: {
                thumbnails: {
                    default: {
                        url: "https://youtube.com/second.jpg",
                    },
                },
                title: "second test video",
            },
        },
    ],
}

const mockTestimonialsPaths = ["first.md", "second.md"]

const mockTestimonialsResponse = [
    {
        data: {
            name: "First Test User",
            profile: "https://twitter.com/first-test-user",
            photo: "https://twitter.com/first-test-user.jpg",
        },
        content: "First test review.",
    },
    {
        data: {
            name: "Second Test User",
            profile: "https://twitter.com/second-test-user",
            photo: "https://twitter.com/second-test-user.jpg",
        },
        content: "Second test review.",
    },
]

const mockGitHubSponsorsResponse = {
    user: {
        sponsorshipsAsMaintainer: {
            nodes: [
                {
                    sponsorEntity: {
                        login: "bradgarropy",
                        url: "https://github.com/bradgarropy",
                        avatarUrl: "https://github.com/bradgarropy.png",
                    },
                    tier: {
                        name: "$10 a month",
                        description: "### 💎 DIAMOND",
                        isOneTime: false,
                    },
                },
                {
                    sponsorEntity: {
                        login: "gabygarropy",
                        url: "https://github.com/gabygarropy",
                        avatarUrl: "https://github.com/gabygarropy.png",
                    },
                    tier: {
                        name: "$5 a month",
                        description: "### 🥇 GOLD",
                        isOneTime: false,
                    },
                },
                {
                    sponsorEntity: {
                        login: "sofigarropy",
                        url: "https://github.com/sofigarropy",
                        avatarUrl: "https://github.com/sofigarropy.png",
                    },
                    tier: {
                        name: "$50 one time",
                        description: "### 🤩",
                        isOneTime: true,
                    },
                },
                {
                    sponsorEntity: {
                        login: "justingarropy",
                        url: "https://github.com/justingarropy",
                        avatarUrl: "https://github.com/justingarropy.png",
                    },
                    tier: {
                        name: "$25 one time",
                        description: "### 😍",
                        isOneTime: true,
                    },
                },
            ],
        },
    },
}

const mockGitHubPinnedResponse = {
    user: {
        pinnedItems: {
            nodes: [
                {
                    url: "https://github.com/bradgarropy/bradgarropy.com",
                    name: "bradgarropy.com",
                    description: "🏠 my home on the web",
                    stargazerCount: 35,
                    repositoryTopics: {
                        nodes: [
                            {
                                topic: {
                                    name: "gatsby",
                                },
                            },
                            {
                                topic: {
                                    name: "react",
                                },
                            },
                            {
                                topic: {
                                    name: "eslint",
                                },
                            },
                            {
                                topic: {
                                    name: "blog",
                                },
                            },
                            {
                                topic: {
                                    name: "portfolio",
                                },
                            },
                            {
                                topic: {
                                    name: "hacktoberfest",
                                },
                            },
                        ],
                    },
                },
                {
                    url: "https://github.com/bradgarropy/dailytexascountry.com",
                    name: "dailytexascountry.com",
                    description: "🤠 texas country music community",
                    stargazerCount: 3,
                    repositoryTopics: {
                        nodes: [
                            {
                                topic: {
                                    name: "gatsby",
                                },
                            },
                            {
                                topic: {
                                    name: "react",
                                },
                            },
                            {
                                topic: {
                                    name: "styled-components",
                                },
                            },
                            {
                                topic: {
                                    name: "prettier",
                                },
                            },
                            {
                                topic: {
                                    name: "eslint",
                                },
                            },
                            {
                                topic: {
                                    name: "spotify",
                                },
                            },
                            {
                                topic: {
                                    name: "youtube",
                                },
                            },
                            {
                                topic: {
                                    name: "twitter",
                                },
                            },
                            {
                                topic: {
                                    name: "airtable",
                                },
                            },
                            {
                                topic: {
                                    name: "blog",
                                },
                            },
                            {
                                topic: {
                                    name: "playlists",
                                },
                            },
                            {
                                topic: {
                                    name: "episodes",
                                },
                            },
                            {
                                topic: {
                                    name: "store",
                                },
                            },
                            {
                                topic: {
                                    name: "dtxc",
                                },
                            },
                            {
                                topic: {
                                    name: "daily-texas-country",
                                },
                            },
                            {
                                topic: {
                                    name: "texas-country",
                                },
                            },
                            {
                                topic: {
                                    name: "country",
                                },
                            },
                        ],
                    },
                },
                {
                    url: "https://github.com/bradgarropy/hue-sdk",
                    name: "hue-sdk",
                    description: "💡 philips hue sdk",
                    stargazerCount: 35,
                    repositoryTopics: {
                        nodes: [
                            {
                                topic: {
                                    name: "node",
                                },
                            },
                            {
                                topic: {
                                    name: "eslint",
                                },
                            },
                            {
                                topic: {
                                    name: "prettier",
                                },
                            },
                            {
                                topic: {
                                    name: "philips",
                                },
                            },
                            {
                                topic: {
                                    name: "hue",
                                },
                            },
                            {
                                topic: {
                                    name: "sdk",
                                },
                            },
                            {
                                topic: {
                                    name: "typescript",
                                },
                            },
                        ],
                    },
                },
                {
                    url: "https://github.com/bradgarropy/use-countdown",
                    name: "use-countdown",
                    description: "⏳ useCountdown hook",
                    stargazerCount: 47,
                    repositoryTopics: {
                        nodes: [
                            {
                                topic: {
                                    name: "typescript",
                                },
                            },
                            {
                                topic: {
                                    name: "react",
                                },
                            },
                            {
                                topic: {
                                    name: "react-hook",
                                },
                            },
                            {
                                topic: {
                                    name: "countdown",
                                },
                            },
                        ],
                    },
                },
                {
                    url: "https://github.com/bradgarropy/labman-cli",
                    name: "labman-cli",
                    description: "👨🏼‍🔬 github label manager cli",
                    stargazerCount: 12,
                    repositoryTopics: {
                        nodes: [
                            {
                                topic: {
                                    name: "github",
                                },
                            },
                            {
                                topic: {
                                    name: "issues",
                                },
                            },
                            {
                                topic: {
                                    name: "labels",
                                },
                            },
                            {
                                topic: {
                                    name: "octokit",
                                },
                            },
                            {
                                topic: {
                                    name: "javascript",
                                },
                            },
                            {
                                topic: {
                                    name: "nodejs",
                                },
                            },
                            {
                                topic: {
                                    name: "cli",
                                },
                            },
                            {
                                topic: {
                                    name: "node",
                                },
                            },
                        ],
                    },
                },
                {
                    url: "https://github.com/bradgarropy/murphy",
                    name: "murphy",
                    description: "⏱ the crossfit murph timer",
                    stargazerCount: 9,
                    repositoryTopics: {
                        nodes: [
                            {
                                topic: {
                                    name: "svelte",
                                },
                            },
                            {
                                topic: {
                                    name: "faunadb",
                                },
                            },
                            {
                                topic: {
                                    name: "netlify",
                                },
                            },
                            {
                                topic: {
                                    name: "netlify-identity",
                                },
                            },
                            {
                                topic: {
                                    name: "rollup",
                                },
                            },
                            {
                                topic: {
                                    name: "murph",
                                },
                            },
                            {
                                topic: {
                                    name: "murphy",
                                },
                            },
                            {
                                topic: {
                                    name: "crossfit",
                                },
                            },
                            {
                                topic: {
                                    name: "workout",
                                },
                            },
                            {
                                topic: {
                                    name: "timer",
                                },
                            },
                            {
                                topic: {
                                    name: "tailwind",
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
}

export {
    mockGitHubPinnedResponse,
    mockGitHubSponsorsResponse,
    mockTestimonialsPaths,
    mockTestimonialsResponse,
    mockYoutubeResponse,
}
