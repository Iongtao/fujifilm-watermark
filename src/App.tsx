import React, { useState } from 'react'
import ActionBar from './views/actionBar'
import Board from './views/board'
import './App.scss'

const App = (): JSX.Element => {
	const [canvasEl, setCanvasEl] = useState<
		HTMLCanvasElement | null | undefined
	>()

	return (
		<div className="app">
			<Board getCanvas={setCanvasEl} />
			<ActionBar canvasEl={canvasEl} />
		</div>
	)
}

export default App
