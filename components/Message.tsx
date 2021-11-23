interface Props {
    body: string
    author: string
    date: Date
}

const Message = ({ body, author, date }: Props) => {
    return (
        <div className="card my-3">
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer text-muted text-right">
                Par <span className="author">{author}</span>, {date.toISOString()}
            </div>
        </div>
    )
}

export default Message