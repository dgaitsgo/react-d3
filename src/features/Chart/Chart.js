import React, { Component } from 'react'

// vendor
import {
    timeFormat,
    scaleLinear,
    extent,
    line
} from 'd3'

//my components
import SVG from './components/SVG'
import G from './components/G'
import Line from './components/Line'
import ClipPath from './components/ClipPath'
import Axis from './components/Axis'
import Rect from './components/Rect'
import Circle from './components/Circle'

class Chart extends Component {

    constructor(props) {
    
        super(props)

        const width = props.width || 600,
        height = props.height || 300,
        offset = 5,
        //should be % based
        // don't sleep on margins, handle them well
        margins = {
            left : 60,
            right : 15 + offset,
            top : 40,
            bottom : 40
        },

        horizontalMargins = margins.left + margins.right,
        verticalMargins = margins.top + margins.bottom,
        plotAreaWidth = width - horizontalMargins,
        plotAreaHeight = height - verticalMargins,
        xScale = scaleLinear().domain(extent(props.data.map(dp => dp.x))).range([0, plotAreaWidth]),
        yScale = scaleLinear().domain(extent(props.data.map(dp => dp.y))).range([plotAreaHeight, 0]),
        yTicks = Math.round(plotAreaHeight / 25),
        yTickValues = yScale.ticks(),
        xTicks = Math.round(plotAreaWidth / 100),
        lineFn = line().x(d => xScale(d.x)).y(d => yScale(d.y))

        this.state = {
            width,
            height,
            offset,
            margins,
            horizontalMargins, 
            verticalMargins,
            plotAreaWidth,
            plotAreaHeight,
            xScale,
            yScale,
            yTickValues,
            xTicks,
            lineFn
        }
    }

    render() {

        const { data } = this.props

        const {
            offset,
            width,
            height,
            margins,
            horizontalMargins,
            verticalMargins,
            plotAreaWidth,
            plotAreaHeight,
            xScale,
            yScale,
            yTicks,
            yTickValues,
            xTicks,
            lineFn
        } = this.state

        return (
            <div id='chart-wrapper'>
                <SVG width={width} height={height}>
                    <ClipPath id={`clipping`}>
                        <Rect
                            id={`clipping-rect`}
                            x={-offset}
                            y={-offset}
                            width={plotAreaWidth}
                            height={plotAreaHeight} />
                    </ClipPath>
                    <G transform={`translate(${margins.left}, ${margins.top})`}>
                        <Axis
                            place='bottom'
                            scale={xScale}
                            tickPadding={20}
                            tickSize={[plotAreaHeight, 0, 0]}
                            tickFormat={timeFormat('%m/%d')}
                        />
                        <Axis
                            place='left'
                            scale={yScale}
                            ticks={yTicks}
                            tickPadding={16}
                            tickValues={yTickValues}
                            tickSize={[-plotAreaWidth, 0, 0]}
                        />
                    </G>
                    <G transform={`translate(${margins.left + offset}, ${margins.top})`}
                        width={plotAreaWidth}
                        height={plotAreaHeight}
                    >
                        <Line
                            d={lineFn(data)}
                            opacity={1}
                            fill='none'
                            stroke='blue'
                            strokeLinejoin='round'
                        />
                        { data.map ( (dp, i) =>
                            <Circle
                                key={`circle_${i}`}
                                r={4}
                                cx={xScale(dp.x)}
                                cy={yScale(dp.y)}
                                fill='none'
                                opacity={1}
                                stroke='green'
                                strokeWidth={3}
                            />   
                         )}
                    </G>
                </SVG>
            </div>
        )
    }
}

export default Chart