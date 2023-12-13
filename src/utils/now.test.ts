import {readdirSync, readFileSync} from "node:fs"

import matter from "gray-matter"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {
    mockNewerNow,
    mockNow,
    mockNowPaths,
    mockNows,
    mockNowsResponse,
    mockOlderNow,
} from "~/test-utils/mocks"
import {
    getAllNows,
    getLatestNow,
    getNewerNow,
    getNowByDate,
    getOlderNow,
} from "~/utils/now"

vi.mock("node:fs")
vi.mock("gray-matter")

test("gets all nows", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockNowPaths)

    const nows = getAllNows()
    expect(nows).toEqual(["2020-12-30", "2020-12-31", "2021-01-01"])
})

test("gets now by slug", async () => {
    const mockMatterRead = matter.read as Mock
    const mockReadFileSync = readFileSync as Mock

    mockMatterRead.mockReturnValue(mockNowsResponse[1])
    mockReadFileSync.mockReturnValue("{}")

    const now = await getNowByDate("2021-12-31")
    expect(now).toEqual(mockNow)
})

test("gets latest now", async () => {
    const mockReadDirSync = readdirSync as Mock
    const mockMatterRead = matter.read as Mock
    const mockReadFileSync = readFileSync as Mock

    mockReadDirSync.mockReturnValue(mockNowPaths)
    mockMatterRead.mockReturnValue(mockNowsResponse[0])
    mockReadFileSync.mockReturnValue("{}")

    const now = await getLatestNow()
    expect(now).toEqual(mockNows[0])
})

test("gets newer now", async () => {
    const mockReadDirSync = readdirSync as Mock
    const mockMatterRead = matter.read as Mock
    const mockReadFileSync = readFileSync as Mock

    mockReadDirSync.mockReturnValue(mockNowPaths)
    mockMatterRead.mockReturnValue(mockNowsResponse[0])
    mockReadFileSync.mockReturnValue("{}")

    const newerNow = await getNewerNow(mockNow)
    expect(newerNow).toEqual(mockNewerNow)

    // when there is no newer now
    mockReadDirSync.mockReturnValue(mockNowPaths)

    const emptyNow = await getNewerNow(mockNows[0])
    expect(emptyNow).toBeNull()
})

test("gets older now", async () => {
    const mockReadDirSync = readdirSync as Mock
    const mockMatterRead = matter.read as Mock
    const mockReadFileSync = readFileSync as Mock

    mockReadDirSync.mockReturnValue(mockNowPaths)
    mockMatterRead.mockReturnValue(mockNowsResponse[2])
    mockReadFileSync.mockReturnValue("{}")

    const olderNow = await getOlderNow(mockNow)
    expect(olderNow).toEqual(mockOlderNow)

    // when there is no older now
    mockReadDirSync.mockReturnValue(mockNowPaths)

    const emptyNow = await getOlderNow(mockNows[2])
    expect(emptyNow).toBeNull()
})
