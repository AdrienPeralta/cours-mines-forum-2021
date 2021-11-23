import type { NextPage } from 'next'

const Forum: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="messages-container" className="flex-grow-1">
        <div className="container">
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
          <div className="card my-3">
            <div className="card-body">
              <p className="card-text">Mon message</p>
            </div>
            <div className="card-footer text-muted text-right">
              Par <span className="author">Julien</span>, aujourd&apos;hui
            </div>
          </div>
        </div>
      </div>
      <div id="new-message-container">
        <div className="container py-3">
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
        </div>
      </div>
    </div>
  )
}

export default Forum
