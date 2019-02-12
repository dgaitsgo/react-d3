import React, { Component } from 'react'
import './Line.css'

const Line = ({ d, opacity, fill, stroke, strokeLinejoin }) =>
	<path
		d={d}
		opacity={opacity}
		fill={fill}
		stroke={stroke}
		strokeLinejoin={strokeLinejoin}
	/>

export default Line
