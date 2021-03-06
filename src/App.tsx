import React from 'react'
import './reset.css'
import './App.css'
import { getQrCode, awaitStatus } from './utils/sockets'
import { InteractionContainer } from './ui/interaction'
import { InteractionType } from './config'
const jolocomLogo = require('./images/JO_icon.svg')

interface State {
  loading: boolean
  qrCode: {
    source: string
  }
}

const initialState: State = {
  loading: false,
  qrCode: {
    source: '',
  },
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="c-header">
          <h1>Interactions UX Demo</h1>
        </header>
        <main>
          <article className="c-qrcode-container">
            <InteractionContainer interactionType={InteractionType.Receive} />
            <InteractionContainer interactionType={InteractionType.Share} />
            <InteractionContainer interactionType={InteractionType.Auth} />
          </article>
        </main>
      </React.Fragment>
    )
  }
}

export default App
