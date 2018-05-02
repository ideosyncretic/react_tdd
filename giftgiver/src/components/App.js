import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from '../helper'

class App extends Component {
  state = {
    gifts: [],
  }

  showGifts = () => {
    const { gifts } = this.state
    return gifts.map(gift => (
      <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
    ))
  }

  addGift = () => {
    const { gifts } = this.state

    gifts.push({ id: max_number(gifts.map(gift => gift.id)) + 1 })

    this.setState({ gifts })
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)

    this.setState({ gifts })
  }

  render() {
    const { gifts } = this.state
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">{this.showGifts()}</div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App
