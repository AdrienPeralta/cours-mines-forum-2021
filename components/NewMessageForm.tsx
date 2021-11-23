import { ChangeEvent, SyntheticEvent, useState } from "react";
import { mutate } from "swr";
import Message from "./Message";

const NewMessageForm = () => {
    const [pseudo, setPseudo] = useState("")
    const [message, setMessage] = useState("")

    const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) =>
        setPseudo(event.target.value);
    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setMessage(event.target.value);

    const handleSubmit = async (event: SyntheticEvent) => {
        // Prevent browser to submit
        event.preventDefault()

        // Validate data
        if (pseudo.length === 0 || message.length === 0) {
            return
        }

        // Send data
        await fetch("https://ensmn.herokuapp.com/messages", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: pseudo,
                message: message
            })
        })

        // Refresh messages
        mutate("https://ensmn.herokuapp.com/messages")

        // Clear state
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="pseudo" className="form-label">Pseudo</label>
                <input type="text" className="form-control" id="pseudo" name="pseudo" required onChange={handlePseudoChange} value={pseudo} />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea rows={5} className="form-control" id="message" required onChange={handleMessageChange} value={message}></textarea>
            </div>
            <h2>Preview</h2>
            <Message body={message} author={pseudo} date={new Date()} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewMessageForm