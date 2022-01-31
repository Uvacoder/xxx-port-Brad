import Link from "@bradgarropy/next-link"
import PostMetaStyles from "components/PostMeta/PostMeta.module.css"
import {FC} from "react"
import {Post} from "types/post"
import {formatDate} from "utils/date"

type PostMetaProps = Pick<Post["frontmatter"], "date" | "topic">

const PostMeta: FC<PostMetaProps> = ({date, topic}) => {
    const {name} = topic

    return (
        <div className={PostMetaStyles.postMeta}>
            <p>
                {formatDate(date)} in <Link to={`/topic/${name}`}>#{name}</Link>
            </p>
        </div>
    )
}

export default PostMeta
