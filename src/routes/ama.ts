import {redirect} from "@remix-run/cloudflare"

export const loader = () => {
    throw redirect("https://github.com/bradgarropy/ama#readme")
}
