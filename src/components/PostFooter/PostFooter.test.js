import {useMeta} from "hooks"
import {mockMeta} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

import PostFooter from "./PostFooter"

jest.mock("hooks")
useMeta.mockReturnValue(mockMeta)

test("shows comment button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💬 discuss on twitter"))
})

test("shows edit button", () => {
    render(<PostFooter slug={"my-test-post"} />)
    expect(screen.getByText("💻 edit on github"))
})
