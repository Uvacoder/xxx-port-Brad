import {readdirSync} from "fs"
import matter from "gray-matter"

import {
    mockPost,
    mockPostFrontmatter,
    mockPostsFrontmatter,
    mockPostsPaths,
    mockPostsResponse,
    mockSortedPostsFrontmatter,
    mockTopic,
    mockTopics,
} from "~/test-utils/mocks"
import {
    getAllPosts,
    getLatestPosts,
    getPostBySlug,
    getPostsByTopic,
    getTopic,
    getTopics,
    sortPostsByDate,
} from "~/utils/posts"

jest.mock("fs")
jest.mock("gray-matter")

jest.mock("gatsby-remark-vscode", () => {
    return {
        remarkPlugin: tree => tree,
    }
})

test("gets latest posts", () => {
    const mockReadDirSync = readdirSync as jest.Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const mockMatterRead = matter.read as jest.Mock
    mockMatterRead
        .mockReturnValueOnce(mockPostsResponse[0])
        .mockReturnValueOnce(mockPostsResponse[1])
        .mockReturnValueOnce(mockPostsResponse[2])
        .mockReturnValueOnce(mockPostsResponse[3])

    const posts = getLatestPosts()
    expect(posts).toEqual(mockSortedPostsFrontmatter.slice(0, 3))
})

test("gets all posts", () => {
    const mockReadDirSync = readdirSync as jest.Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const mockMatterRead = matter.read as jest.Mock
    mockMatterRead
        .mockReturnValueOnce(mockPostsResponse[0])
        .mockReturnValueOnce(mockPostsResponse[1])
        .mockReturnValueOnce(mockPostsResponse[2])
        .mockReturnValueOnce(mockPostsResponse[3])

    const posts = getAllPosts()
    expect(posts).toEqual(mockSortedPostsFrontmatter)
})

test("gets post by slug", async () => {
    const mockMatterRead = matter.read as jest.Mock
    mockMatterRead.mockReturnValue(mockPostsResponse[0])

    const post = await getPostBySlug("first-test-post")
    expect(post).toEqual(mockPost)
})

test("gets topic", () => {
    const mockReadDirSync = readdirSync as jest.Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const mockMatterRead = matter.read as jest.Mock
    mockMatterRead
        .mockReturnValueOnce(mockPostsResponse[0])
        .mockReturnValueOnce(mockPostsResponse[1])
        .mockReturnValueOnce(mockPostsResponse[2])
        .mockReturnValueOnce(mockPostsResponse[3])

    const topic = getTopic("life")
    expect(topic).toEqual(mockTopic)
})

test("gets topics", () => {
    const mockReadDirSync = readdirSync as jest.Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const mockMatterRead = matter.read as jest.Mock
    mockMatterRead
        .mockReturnValueOnce(mockPostsResponse[0])
        .mockReturnValueOnce(mockPostsResponse[1])
        .mockReturnValueOnce(mockPostsResponse[2])
        .mockReturnValueOnce(mockPostsResponse[3])

    const topics = getTopics()
    expect(topics).toEqual(mockTopics)
})

test("gets posts by topic", () => {
    const mockReadDirSync = readdirSync as jest.Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const mockMatterRead = matter.read as jest.Mock
    mockMatterRead
        .mockReturnValueOnce(mockPostsResponse[0])
        .mockReturnValueOnce(mockPostsResponse[1])
        .mockReturnValueOnce(mockPostsResponse[2])
        .mockReturnValueOnce(mockPostsResponse[3])

    const post = getPostsByTopic("life")
    expect(post).toEqual([mockPostFrontmatter])
})

test("sorts posts by date", () => {
    const unsortedPosts = [
        mockPostsFrontmatter[1],
        mockPostsFrontmatter[0],
        mockPostsFrontmatter[2],
        mockPostsFrontmatter[3],
    ]

    const sortedPosts = sortPostsByDate(unsortedPosts)
    expect(sortedPosts).toEqual(mockSortedPostsFrontmatter)
})
