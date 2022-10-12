const createImageUrl = (location: string) => {
    if (location.startsWith("/")) {
        const imageUrl = createInternalImageUrl(location)
        return imageUrl
    }

    if (location.startsWith("http://") || location.startsWith("https://")) {
        const imageUrl = createExternalImageUrl(location)
        return imageUrl
    }

    throw new Error(
        `Image location is not an internal path or an external url: ${location}`,
    )
}

const createInternalImageUrl = (path: string) => {
    const internalImageUrl = `https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com${path}`
    return internalImageUrl
}

const createExternalImageUrl = (url: string) => {
    const externalImageUrl = `https://res.cloudinary.com/bradgarropy/image/fetch/f_auto,q_auto/${url}`
    return externalImageUrl
}

const createYouTubeUrl = (id: string) => {
    const url = `https://res.cloudinary.com/bradgarropy/image/youtube/f_auto,q_auto/${id}.jpg`
    return url
}

type Dimensions = {
    width: number
    height: number
}

const getImageDimensions = async (imageUrl: string): Promise<Dimensions> => {
    const url = new URL(imageUrl)

    const pathSegments = url.pathname.split("/")
    const index = pathSegments.findIndex(value => value === "bradgarropy.com")
    pathSegments.splice(index, 0, "fl_getinfo")
    url.pathname = pathSegments.join("/")

    const response = await fetch(url)
    const json = await response.json()

    const dimensions: Dimensions = {
        width: json.output.width,
        height: json.output.height,
    }

    return dimensions
}

const isCloudinaryImage = (url: string) => {
    if (url.startsWith("http://res.cloudinary.com")) {
        return true
    }

    if (url.startsWith("https://res.cloudinary.com")) {
        return true
    }

    return false
}

export {
    createExternalImageUrl,
    createImageUrl,
    createInternalImageUrl,
    createYouTubeUrl,
    getImageDimensions,
    isCloudinaryImage,
}
export type {Dimensions}
