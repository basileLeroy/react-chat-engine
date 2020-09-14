import React from 'react'

import SocketConnector from './components'

import { getChats, newChat, editChat, deleteChat } from './actions/chats'
import { addPerson, removePerson } from './actions/people'
import { getMessages, sendMessage, editMessage, deleteMessage } from './actions/messages'

const ChatEngine = (props) => {
  return <SocketConnector {...props} />
}

export {
  ChatEngine,
  getChats,
  newChat,
  editChat,
  deleteChat,

  addPerson,
  removePerson,

  getMessages,
  sendMessage,
  editMessage,
  deleteMessage,
}