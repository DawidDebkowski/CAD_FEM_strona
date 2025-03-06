export type image = {
    key: number,
    src: string
}

export type project = {
    id: string,
    title: string,
    author: string,
    moreImages: image[],
    paragraphs: paragraph[]
    additionalMessage: string,
    thanks: string,
    sponsors: sponsor[],
}

export type mockProjects = {
    key: number,
    title: string,
    image: string,
    linkTo: string,
    desc: string
}

export type paragraph = {
    key: number,
    imageDesc: string,
    image: string,
    desc: string
}

export type sponsor = {
    key: number,
    name: string,
    imagePath: string,
}