import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import PostMeta from "~/components/PostMeta"
import {mockPost} from "~/test-utils/mocks"

test("shows meta", () => {
    render(
        <PostMeta
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
            tags={mockPost.frontmatter.tags}
        />,
    )

    expect(
        screen.getByText("January 1, 2021", {exact: false}),
    ).toBeInTheDocument()

    expect(
        screen.getByText(`#${mockPost.frontmatter.topic}`),
    ).toBeInTheDocument()

    expect(screen.getByText(mockPost.frontmatter.tags[0])).toBeInTheDocument()
})

test("links to topic", () => {
    render(
        <PostMeta
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
            tags={mockPost.frontmatter.tags}
        />,
    )

    expect(screen.getByText(`#${mockPost.frontmatter.topic}`)).toHaveAttribute(
        "href",
        `/topic/${mockPost.frontmatter.topic}`,
    )
})

test("links to tag", () => {
    render(
        <PostMeta
            date={mockPost.frontmatter.date}
            topic={mockPost.frontmatter.topic}
            tags={mockPost.frontmatter.tags}
        />,
    )

    expect(screen.getByText(mockPost.frontmatter.tags[0])).toHaveAttribute(
        "href",
        `/tag/${mockPost.frontmatter.tags[0]}`,
    )
})
