import {redirect} from "@remix-run/cloudflare"

export const loader = () => {
    throw redirect("https://paypal.me/bradgarropy")
}
