import {redirect} from "@remix-run/cloudflare"

export const loader = () => {
    throw redirect("https://twitch.tv/bradgarropy")
}
