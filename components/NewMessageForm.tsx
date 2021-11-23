const NewMessageForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="pseudo" className="form-label">Pseudo</label>
                <input type="text" className="form-control" id="pseudo" name="pseudo" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea rows={5} className="form-control" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewMessageForm