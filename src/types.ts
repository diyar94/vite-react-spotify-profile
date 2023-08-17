type Images = {
    url: string,
    height: number,
    width: number
}

type Followers = {
    href: string | null,
    total: number
}
export type Profile = {
    country: string,
    display_name: string,
    email: string,
    explicit_content: {
        filter_enabled: boolean,
        filter__locked: boolean
    },
    external_urls: {
        spotify: string
    },
    followers: Followers[],
    href: string,
    id: string,
    images: Images[] | undefined,
    product: string,
    type: string,
    uri: string
}
