import Message from './Message'

const MessagesList = () => {
    const messages = [
        {
            body: "Message",
            author: "Julien",
            date: new Date()
        },
        {
            body: "Message test",
            author: "Julien 2",
            date: new Date()
        },
        {
            body: "Message test 2",
            author: "Julien 3",
            date: new Date()
        },
        {
            body: "Message test 3",
            author: "Julien 4",
            date: new Date()
        }
    ]

    return (
        <div className="container">
            {messages.map(({ body, author, date }, i) => <Message key={i} body={body} author={author} date={date} />)}
        </div>
    )
}

export default MessagesList
