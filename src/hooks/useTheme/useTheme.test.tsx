import {act, renderHook} from "@testing-library/react"
import {ThemeContextType, ThemeProvider} from "context"
import {useTheme} from "hooks"
import {mockThemeCtx} from "test-utils/mocks"

const mockThemeContext: ThemeContextType = {
    ...mockThemeCtx,
    setTheme: expect.any(Function),
}

const mockGetItem = jest.fn()
const mockSetItem = jest.fn()

beforeEach(() => {
    global.Storage.prototype.getItem = mockGetItem
    global.Storage.prototype.setItem = mockSetItem
})

afterEach(() => {
    mockGetItem.mockReset()
    mockGetItem.mockReset()
})

test("returns theme context", () => {
    const wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current).toEqual(mockThemeContext)
})

test("defaults to light theme", () => {
    mockGetItem.mockReturnValue(null)

    const wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("light")
    expect(mockSetItem).toHaveBeenCalledTimes(1)
    expect(mockSetItem).toHaveBeenCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBeFalsy()
})

test("uses localstorage light theme", () => {
    mockGetItem.mockReturnValue("light")

    const wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("light")
    expect(mockSetItem).toHaveBeenCalledTimes(1)
    expect(mockSetItem).toHaveBeenCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBeFalsy()
})

test("uses localstorage dark theme", () => {
    mockGetItem.mockReturnValue("dark")

    const wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("dark")
    expect(mockSetItem).toHaveBeenCalledTimes(1)
    expect(mockSetItem).toHaveBeenCalledWith("theme", "dark")
    expect(document.documentElement.classList.contains("dark")).toBeTruthy()
})

test("switches to light theme", () => {
    mockGetItem.mockReturnValue("dark")

    const wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("dark")

    act(() => {
        result.current.setTheme("light")
    })

    expect(result.current.theme).toEqual("light")
    expect(mockSetItem).toHaveBeenCalledTimes(2)
    expect(mockSetItem).toHaveBeenLastCalledWith("theme", "light")
    expect(document.documentElement.classList.contains("dark")).toBeFalsy()
})

test("switches to dark theme", () => {
    mockGetItem.mockReturnValue("light")

    const wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
    const {result} = renderHook(() => useTheme(), {wrapper})

    expect(result.current.theme).toEqual("light")

    act(() => {
        result.current.setTheme("dark")
    })

    expect(result.current.theme).toEqual("dark")
    expect(mockSetItem).toHaveBeenCalledTimes(2)
    expect(mockSetItem).toHaveBeenLastCalledWith("theme", "dark")
    expect(document.documentElement.classList.contains("dark")).toBeTruthy()
})
