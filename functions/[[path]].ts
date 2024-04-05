import {createPagesFunctionHandler} from "@remix-run/cloudflare-pages"

import * as build from "../build/server"

export const onRequest = createPagesFunctionHandler({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    build,
})
