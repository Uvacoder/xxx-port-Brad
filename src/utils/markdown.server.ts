import fs from "node:fs"
import path from "node:path"

import {rehypeCloudinaryImageSize} from "@bradgarropy/rehype-cloudinary-image-size"
import {rehypeImageLinks} from "@bradgarropy/rehype-image-links"
import remarkEmbedder from "@remark-embedder/core"
import matter from "gray-matter"
import json5 from "json5"
import rehypeExternalLinks from "rehype-external-links"
import type {Options} from "rehype-pretty-code"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkInlineLinks from "remark-inline-links"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkUnwrapImages from "remark-unwrap-images"
import {getHighlighter} from "shikiji"
import {unified} from "unified"

import {codesandboxTransformer} from "~/transformers/codesandbox"
import {twitchTransformer} from "~/transformers/twitch"
import {twitterTransformer} from "~/transformers/twitter"
import {youtubeTransformer} from "~/transformers/youtube"
import type {Markdown} from "~/types/markdown"

const getMarkdownBySlug = async (slug: string): Promise<Markdown> => {
    const nowPath = path.join(process.cwd(), `content/pages/${slug}.md`)

    const file = matter.read(nowPath)
    const html = await transformMarkdown(file.content)

    const markdown: Markdown = {
        html,
        frontmatter: file.data,
    }

    return markdown
}

const transformMarkdown = async (markdown: string): Promise<string> => {
    const themePath = path.join(
        process.cwd(),
        "build/shikiji/themes/shades-of-purple.json",
    )

    const theme = fs.readFileSync(themePath, "utf8")

    const options: Options = {
        theme: json5.parse(theme),
        keepBackground: true,
        getHighlighter: () =>
            getHighlighter({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                theme: json5.parse(theme),
                paths: {
                    languages: path.join(process.cwd(), "build/shikiji/langs"),
                    themes: path.join(process.cwd(), "build/shikiji/themes"),
                },
            }),
    }

    const processor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkUnwrapImages)
        .use(remarkInlineLinks)
        .use(
            /* v8 ignore next 3 */
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            process.env.VITEST ? remarkEmbedder : remarkEmbedder.default,
            {
                transformers: [
                    codesandboxTransformer,
                    twitchTransformer,
                    twitterTransformer,
                    youtubeTransformer,
                ],
            },
        )
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypePrettyCode, options)
        .use(rehypeExternalLinks, {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
        })
        .use(rehypeCloudinaryImageSize)
        .use(rehypeImageLinks)
        .use(rehypeRaw)
        .use(rehypeStringify)

    const file = await processor.process(markdown)
    const html = file.toString()

    return html
}

export {getMarkdownBySlug, transformMarkdown}
