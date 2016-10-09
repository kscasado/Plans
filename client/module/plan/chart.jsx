//Component for displaying the plan

import React from 'react'
import { BarChart } from 'react-chartjs'
import  Color  from 'color'
export default class Plan extends React.Component {



  //since this is a "dumb" component we will use setState instead of store
  componentWillMount () {

  }
  componentWillUnmount () {

  }


  render () {
    const { votes } = this.props
    var chartData = this._mapChartValues(votes)
    return (
      <div>
        <h2> Poll </h2>
        <BarChart data={votes} width="300" height="300"></BarChart>
      </div>

    )
  }
  _mapChartValues(votes) {
    return {
      votes.map((vote) => {
        const color = getRandColor()
        return {
          value: vote.votes,
        label: vote.name,
        color: color,
        highlight: Color(color).lighten(0.05).hexString()
        }
      }
    }
  getRandomColor(){
    const redHex = (getRandomInt(0, 128) + 127).toString(16)
    const greenHex = (getRandomInt(0, 128) + 127).toString(16)
    const blueHex = (getRandomInt(0, 128) + 127).toString(16)
    return `#${redHex}${greenHex}${blueHex}`
  }

    const getRandomInt = (min, max) => {
      Math.floor(Math.random() * (max - min + 1)) + min
    }
}
