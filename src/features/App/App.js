import React, { Component } from 'react'
import Chart from 'features/Chart'

const randomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

class App extends Component {

	constructor() {
		super()
		this.state = {
			data : this.getRandomData()
		}
	}

	getRandomData = () => {
		
		let data = []

		for (let i = 0; i < 50; i++) {
			data.push({
				x : i,
				y : randomInt(0, 50)
			})
		}

		return (data)
	}

	render() {

		const { data } = this.state

		return (
			<div id='app-wrapper'>
				<Chart data={data} />
				<button onClick={() => this.setState({ data : this.getRandomData() })}>
					Next
				</button>
			</div>
		)
	}
}

export default App