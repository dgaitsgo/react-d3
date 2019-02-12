import React, { Component } from 'react'
import './SVG.css'

const SVG = ({ children, id, className, style, width, height }) =>
	<svg
		id={id}
		className={className}
		style={style}
		width={width}
		height={height}>
			{children}
	</svg>

export default SVG
