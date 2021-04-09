const mockPosts = [
    {
        frontmatter: {
            date: "January 1, 2021",
            slug: "first-test-post",
            title: "first test post",
            topic: {
                icon: "😎",
                name: "life",
            },
        },
    },
    {
        frontmatter: {
            date: "February 1, 2021",
            slug: "second-test-post",
            title: "second test post",
            topic: {
                icon: "🔌",
                name: "tech",
            },
        },
    },
    {
        frontmatter: {
            date: "March 1, 2021",
            slug: "third-test-post",
            title: "third test post",
            topic: {
                icon: "💻",
                name: "coding",
            },
        },
    },
]

const mockPostsQuery = {
    posts: {
        nodes: mockPosts,
    },
}

const mockMeta = {
    siteUrl: "https://bradgarropy.com",
    url: "https://bradgarropy.com",
    title: "bradgarropy",
    description: "🏠 my home on the web",
    keywords: ["gatsby", "react", "scss", "eslint", "blog", "portfolio"],
    email: "bradgarropy@gmail.com",
    twitter: "bradgarropy",
}

const mockMetaQuery = {
    site: {
        siteMetadata: mockMeta,
    },
}

const mockVideos = [
    {
        title: "first test video",
        videoId: "abc123",
    },
    {
        title: "second test video",
        videoId: "def456",
    },
]

const mockVideosQuery = {
    videos: {
        nodes: mockVideos,
    },
}

const mockProjects = [
    {
        url: "https://github.com/bradgarropy/bradgarropy.com",
        name: "bradgarropy.com",
        description: "🏠 my mansion on the web",
        stars: 34,
    },
    {
        url: "https://github.com/bradgarropy/dailytexascountry.com",
        name: "dailytexascountry.com",
        description:
            "🤠 she tries to tell me that oklahoma's better, but I ain't got time for that",
        stars: 3,
    },
    {
        url: "https://github.com/bradgarropy/murphy",
        name: "murphy",
        description: "⏱ the crossfit murph timer",
        stars: 9,
    },
    {
        url: "https://github.com/bradgarropy/labman-cli",
        name: "labman-cli",
        description: "👨🏼‍🔬 github label manager cli",
        stars: 12,
    },
    {
        url: "https://github.com/bradgarropy/ama",
        name: "ama",
        description: "❔ ask me anything",
        stars: 1,
    },
    {
        url: "https://github.com/bradgarropy/dotfiles",
        name: "dotfiles",
        description: "🥃 just the way i like it",
        stars: 3,
    },
]

const mockProjectsQuery = {
    githubData: {
        data: {
            user: {
                pinnedItems: {
                    nodes: [
                        {
                            url:
                                "https://github.com/bradgarropy/bradgarropy.com",
                            name: "bradgarropy.com",
                            description: "🏠 my mansion on the web",
                            stargazerCount: 34,
                        },
                        {
                            url:
                                "https://github.com/bradgarropy/dailytexascountry.com",
                            name: "dailytexascountry.com",
                            description:
                                "🤠 she tries to tell me that oklahoma's better, but I ain't got time for that",
                            stargazerCount: 3,
                        },
                        {
                            url: "https://github.com/bradgarropy/murphy",
                            name: "murphy",
                            description: "⏱ the crossfit murph timer",
                            stargazerCount: 9,
                        },
                        {
                            url: "https://github.com/bradgarropy/labman-cli",
                            name: "labman-cli",
                            description: "👨🏼‍🔬 github label manager cli",
                            stargazerCount: 12,
                        },
                        {
                            url: "https://github.com/bradgarropy/ama",
                            name: "ama",
                            description: "❔ ask me anything",
                            stargazerCount: 1,
                        },
                        {
                            url: "https://github.com/bradgarropy/dotfiles",
                            name: "dotfiles",
                            description: "🥃 just the way i like it",
                            stargazerCount: 3,
                        },
                    ],
                },
            },
        },
    },
}

export {
    mockMeta,
    mockMetaQuery,
    mockPosts,
    mockPostsQuery,
    mockProjects,
    mockProjectsQuery,
    mockVideos,
    mockVideosQuery,
}
