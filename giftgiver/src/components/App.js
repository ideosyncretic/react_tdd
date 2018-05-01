import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
class App extends Component {
  state = {
    gifts: [],
  }

  addGift = () => {
    const { gifts } = this.state

    const ids = gifts.map(gift => gift.id)

    const maxId = ids.length > 0 ? Math.max(...ids) : 0
    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  render() {
    const { gifts } = this.state
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {gifts.map(gift => <Gift key={gift.id} />)}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App
