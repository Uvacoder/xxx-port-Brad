import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Now from "~/components/Now"
import {mockNewerNow, mockNow, mockOlderNow} from "~/test-utils/mocks"

test("shows now", () => {
    render(<Now now={mockNow} newer={mockNewerNow} older={mockOlderNow} />)

    expect(screen.getByText("🧭 now")).toBeInTheDocument()
    expect(screen.getByText("December 31, 2020")).toBeInTheDocument()
    expect(screen.getByText("This is a now.")).toBeInTheDocument()
    expect(screen.getByText("derek sivers")).toBeInTheDocument()
    expect(screen.getByText("nownownow")).toBeInTheDocument()
})

test("navigates nows", () => {
    render(<Now now={mockNow} newer={mockNewerNow} older={mockOlderNow} />)

    expect(screen.getByText("👈🏼 newer")).not.toHaveClass("shadow-gray-300")
    expect(screen.getByText("👈🏼 newer")).toHaveAttribute(
        "href",
        `/now/${mockNewerNow.frontmatter.date}`,
    )

    expect(screen.getByText("older 👉🏼")).not.toHaveClass("shadow-gray-300")
    expect(screen.getByText("older 👉🏼")).toHaveAttribute(
        "href",
        `/now/${mockOlderNow.frontmatter.date}`,
    )
})

test("disables nows", () => {
    render(<Now now={mockNow} newer={undefined} older={undefined} />)

    expect(screen.getByText("👈🏼 newer")).toHaveClass("shadow-gray-300")
    expect(screen.getByText("older 👉🏼")).toHaveClass("shadow-gray-300")
})
