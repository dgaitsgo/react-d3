import React, { Component } from 'react'
import './ClipPath.css'

const ClipPath = ({ id, className, children }) =>
	<clipPath id={id} className={className}>{ children }</clipPath>

export default ClipPath
