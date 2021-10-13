import {render, screen} from "@testing-library/react"
import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"

import PostComments from "./PostComments"

jest.mock("hooks")

const mockUseMeta = useMeta as jest.Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostComments slug={"my-test-post"} />)

    expect(screen.getByText("💬 discuss on twitter")).toHaveAttribute(
        "href",
        expect.stringContaining("my-test-post"),
    )
})
