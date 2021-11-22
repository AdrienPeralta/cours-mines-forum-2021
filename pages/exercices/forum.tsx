import type { NextPage } from 'next'

const Forum: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="messages-container" className="flex-grow-1">
      </div>
      <div id="new-message-container">
      </div>
    </div>
  )
}

export default Forum
