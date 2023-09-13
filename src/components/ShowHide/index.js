import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="header">Show/Hide</h1>
        <div className="card-container">
          <div className="name-card">
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="f-name">Joe</p>}
          </div>

          <div className="name-card">
            <button
              type="button"
              className="button"
              onClick={this.showLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName && <p className="l-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
