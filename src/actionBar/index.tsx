import React from 'react'
import './index.scss'

interface ActionBarProps {
	canvasEl: HTMLCanvasElement | null | undefined
}

async function chooseImg(): Promise<FileList> {
	const input = document.createElement('input')
	input.type = 'file'
	input.name = 'file'
	input.accept = 'image/*'
	input.multiple = true

	input.click()

	return await new Promise((resolve) => {
		input.onchange = function (e) {
			const { files } = e.target as HTMLInputElement
			if (files !== null && files.length > 0) resolve(files)
		}
	})
}

const ActionBar = (props: ActionBarProps): JSX.Element => {
	const ctx = props.canvasEl?.getContext('2d')

	async function upload(): Promise<void> {
		// console.log(ctx)
		const files = await chooseImg()

		for (let i = 0; i < files.length; i++) {
			const file = files[i]

			const img = new Image()
			img.src = (window.URL ?? window.webkitURL).createObjectURL(file)
			img.onload = function () {
				console.log(this, this.naturalWidth, this.naturalHeight)
				try {
					props.canvasEl!.width = this.naturalWidth
					props.canvasEl!.height = this.naturalHeight
					ctx!.fillStyle = '#f5f7f8'
					ctx!.fillRect(0, 0, props.canvasEl!.width, props.canvasEl!.height)
					ctx!.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight)
				} catch (error) {
					console.log({ error })
				}
			}.bind(img)
		}
	}

	return (
		<div className="action-bar">
			<div className="action-bar-title">操作栏</div>
			<div>
				<button
					onClick={() => {
						void upload()
					}}
				>
					上传图片
				</button>
				<button>重置图片</button>
			</div>
		</div>
	)
}

export default ActionBar
