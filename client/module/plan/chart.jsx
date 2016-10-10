//Component for displaying the plan

import React from 'react'
import { BarChart, Pie } from 'react-chartjs'
import  Color  from 'color'
export default class Chart extends React.Component {



  //since this is a "dumb" component we will use setState instead of store
  componentWillMount () {

  }
  componentWillUnmount () {

  }


  render () {
    const { options } = this.props
    const votes = options.map((vote) => {
      const color = this._getRandomColor()
      return {
        value: vote.votes,
      label: vote.title,
      color: color,
      highlight: Color(color).lighten(0.05).hexString()
      }
    })
    return (
      <div>
        <h2> Results </h2>
        <Pie data={votes} width="300" height="300"></Pie>
      </div>

    )
  }

  _getRandomColor () {
    const redHex = (this._getRandomInt(0, 128) + 127).toString(16)
    const greenHex = (this._getRandomInt(0, 128) + 127).toString(16)
    const blueHex = (this._getRandomInt(0, 128) + 127).toString(16)
    console.log(redHex)
    return `#${redHex}${greenHex}${blueHex}`
  }

  _getRandomInt (min, max) {
      return (Math.floor(Math.random() * (max - min + 1)+min))
  }
}
