export type image = {
    key: number,
    src: string
}

export type project = {
    author: string,
    description: string,
    date: string,
    text: string,
    title: string,
    moreImages: image[],
    paragraphs: paragraph[]
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