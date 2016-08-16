/* global React */
const React = require('react')

/* Composite component -> component of our own creation */
const MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>{this.props.title}</h1>
        <h2>Hi!</h2>
      </div>
      )
    }
})

module.exports = MyTitle
