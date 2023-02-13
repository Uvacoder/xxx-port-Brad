import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC} from "react"
import {Markdown as MarkdownType} from "types/markdown"

type ContactProps = {
    contact: MarkdownType
}

const Contact: FC<ContactProps> = ({contact}) => {
    const markdown = useMarkdown(contact.html)

    return (
        <div className="place-self-center">
            <h1 className="text-[2rem] mb-7 font-semibold font-heading">
                👋🏼 say hi
            </h1>
            <Markdown content={markdown} />
        </div>
    )
}

export default Contact
