import React, { Component } from 'react'
import { axisBottom, axisLeft, axisRight, axisTop } from 'd3'
import G from '../G'

import './Axis.css'

const placeAxisMap = {
	'bottom' : axisBottom,
	'top' : axisTop,
	'right' : axisRight,
	'left' : axisLeft
}

const Axis = ({ place, scale, tickPadding, tickSize, tickFormat, ticks, tickValues }) => {

	const axisFn = placeAxisMap[place]

	const ax = axisFn(scale)
		.tickPadding(tickPadding || 0)
		.tickSize(tickSize[0], tickSize[1], tickSize[2])
		.tickFormat(tickFormat)
		.ticks(ticks)
	
	return (
		<G>
			{}
		</G>
	)
}

export default Axis
