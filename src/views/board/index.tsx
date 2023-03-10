import React, { useEffect, useRef } from 'react'
import './index.scss'
import HoldImg from '~/assets/images/hold_img.jpg'
import HoldLogo from '~/assets/images/hold_logo.png'

type getCanvas = (ref: HTMLCanvasElement | null | undefined) => void

interface BoardProps {
	getCanvas: getCanvas
}

const Board = (props: BoardProps): JSX.Element => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		props.getCanvas(canvasRef.current)

		const ctx = canvasRef.current!.getContext('2d')
		if (ctx != null) {
			setHoldImg(ctx)
			setLogoImg(ctx)
		}
	})

	function setHoldImg(ctx: CanvasRenderingContext2D): void {
		const img = new Image()
		img.src = HoldImg
		img.onload = function () {
			canvasRef.current!.width = img.naturalWidth
			canvasRef.current!.height = img.naturalHeight
			ctx?.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
		}
	}
	function setLogoImg(ctx: CanvasRenderingContext2D): void {
		const img = new Image()
		img.src = HoldLogo
		img.onload = function () {
			ctx?.drawImage(
				img,
				0,
				0,
				img.naturalWidth,
				img.naturalHeight,
				0,
				0,
				img.naturalWidth * 1,
				img.naturalHeight * 1
			)
		}
	}

	return (
		<div className="canvas-box">
			<canvas ref={canvasRef} />
		</div>
	)
}

export default Board
