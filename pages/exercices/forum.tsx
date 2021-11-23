import type { NextPage } from 'next'
import MessagesList from '../../components/MessagesList'
import NewMessageForm from '../../components/NewMessageForm'

const Forum: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="messages-container" className="flex-grow-1">
        <MessagesList />
      </div>
      <div id="new-message-container">
        <div className="container py-3">
          <NewMessageForm />
        </div>
      </div>
    </div>
  )
}

export default Forum
