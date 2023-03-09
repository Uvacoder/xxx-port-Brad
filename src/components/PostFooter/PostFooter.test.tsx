import {render, screen} from "@testing-library/react"
import PostFooter from "components/PostFooter"
import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"

jest.mock("hooks")

const mockUseMeta = useMeta as jest.Mock
mockUseMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💬 discuss on twitter"))
})

test("shows edit button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💻 edit on github"))
})
