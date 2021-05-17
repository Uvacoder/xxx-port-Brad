const technologies = [
    "gatsby",
    "javascript",
    "next",
    "node",
    "react",
    "svelte",
    "tailwind",
    "typescript",
]

const getTechnologies = topics => {
    const tech = []

    topics.forEach(topic => {
        if (technologies.includes(topic)) {
            tech.push(topic)
        }
    })

    return tech
}

export {getTechnologies, technologies}
