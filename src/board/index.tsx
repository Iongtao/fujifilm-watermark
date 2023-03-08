import React, { useEffect, useRef } from 'react'
import './index.scss'

type getCanvas = (ref: HTMLCanvasElement | null | undefined) => void

interface BoardProps {
	getCanvas: getCanvas
}

const Board = (props: BoardProps): JSX.Element => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		props.getCanvas(canvasRef.current)
	})

	return (
		<div className="canvas-box">
			<canvas ref={canvasRef} />
		</div>
	)
}

export default Board
