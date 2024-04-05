import {redirect} from "@remix-run/cloudflare"

export const loader = () => {
    throw redirect("https://cottonbureau.com/people/brad-garropy")
}
