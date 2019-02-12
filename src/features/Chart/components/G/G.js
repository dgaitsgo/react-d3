import React, { Component } from 'react'
import './G.css'

const G = ({ id, className, style, transform, children, width, height }) =>
	<g
		id={id}
		className={className}
		style={style}
		transform={transform}
		width={width}
		height={height}>
			{children}
	</g>

export default G
