// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  onClicking = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getBtnTxt = () => {
    const {isClicked} = this.state
    if (isClicked) {
      return {
        changedContainer: 'light-mode-container',
        changedHeading: 'light-mode-heading',
        changedTxt: 'Dark Mode',
      }
    }
    return {
      changedContainer: 'dark-mode-container',
      changedHeading: 'dark-mode-heading',
      changedTxt: 'Light Mode',
    }
  }

  render() {
    const resultObj = this.getBtnTxt()
    const {changedContainer, changedHeading, changedTxt} = resultObj
    return (
      <div className="container">
        <div className={changedContainer}>
          <h1 className={changedHeading}>Click To Change Mode</h1>
          <div className="btn-container">
            <button className="button" onClick={this.onClicking}>
              {changedTxt}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
