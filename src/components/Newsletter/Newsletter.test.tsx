import {http} from "@bradgarropy/http"
import {render, screen, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Newsletter from "~/components/Newsletter"

jest.mock("@bradgarropy/http")

test("shows newsletter", () => {
    render(<Newsletter />)

    expect(
        screen.getByText("💻 side projects", {exact: false}),
    ).toBeInTheDocument()

    expect(
        screen.getByText("📰 web dev news", {exact: false}),
    ).toBeInTheDocument()

    expect(
        screen.getByText("⚡ tech opinions", {exact: false}),
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText("email@example.com")).toBeInTheDocument()
    expect(screen.getByText("📧 subscribe")).toBeInTheDocument()
})

test("subscribes", async () => {
    render(<Newsletter />)

    const form = screen.getByPlaceholderText("email@example.com")
    await userEvent.type(form, "bradgarropy@gmail.com")

    expect(form).toHaveValue("bradgarropy@gmail.com")

    const subscribeButton = screen.getByText("📧 subscribe")
    await userEvent.click(subscribeButton)

    expect(http.post).toHaveBeenCalledTimes(1)

    expect(http.post).toHaveBeenCalledWith("/api/subscribe", {
        body: {
            email: "bradgarropy@gmail.com",
        },
    })

    await waitFor(() => {
        expect(screen.getByText("💜 subscribed")).toBeInTheDocument()
    })
})
