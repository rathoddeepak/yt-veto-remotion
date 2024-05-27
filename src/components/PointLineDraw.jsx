import React from "react";
import { useCurrentFrame, Img, interpolate } from "remotion";
import { maxWidth, maxHeight } from "../utils/constants";
import { clamp, ease } from "../utils";

function getPointOnCurve(t, pa, pb, factor) {
	const controlPointX = factor;
	const controlPointY = factor;
	const x =
		(1 - t) * (1 - t) * pa.x +
		2 * (1 - t) * t * controlPointX +
		t * t * pb.x;
	const y =
		(1 - t) * (1 - t) * pa.y +
		2 * (1 - t) * t * controlPointY +
		t * t * pb.y;
	return { x, y };
}

function getRotationAngle(t, pa, pb, factor) {
	const p1 = getPointOnCurve(t - 0.01, pa, pb, factor);
	const p2 = getPointOnCurve(t + 0.01, pa, pb, factor);
	const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
	return angle;
}

const PointLineDraw = ({
	from,
	to,
	factor = 300,
	color,
	imgFile,
	imgWidth = 100,
	imgHeight = 100,
	animateFrom = 0,
	duration = 30,
	fromLabel = "",
	toLabel = "",
	exitImage = false,
}) => {
	const imgRef = React.useRef();
	const canvasRef = React.useRef();
	const frame = useCurrentFrame();
	const [mounted, setMounted] = React.useState(false);
	const progress = interpolate(
		frame,
		[animateFrom, animateFrom + duration],
		[0, 1],
		{
			...clamp,
			...ease,
		},
	);
	const [imgWidthSmall, imgHeightSmall] = React.useMemo(() => {
		return [0, 0];
	}, []);

	const opacity = interpolate(
		frame,
		[animateFrom, animateFrom + (duration - 20)],
		[0, 1],
		{
			...clamp,
		},
	);

	const imageAniWidth = interpolate(
		frame,
		[
			animateFrom,
			animateFrom + (duration - 20),
			animateFrom + duration + 30,
		],
		[
			imgWidthSmall,
			imgWidth,
			exitImage ? imgWidthSmall : imgWidth,
		],
		{
			...clamp,
		},
	);

	const imageAniHeight = interpolate(
		frame,
		[
			animateFrom,
			animateFrom + (duration - 20),
			animateFrom + duration + 30,
		],
		[
			imgHeightSmall,
			imgHeight,
			exitImage ? imgHeightSmall : imgHeight,
		],
		{
			...clamp,
		},
	);
	const pointA = { x: from[0], y: from[1] };
	const pointB = { x: to[0], y: to[1] };
	const ctx = React.useMemo(() => {
		return canvasRef?.current?.getContext("2d");
	}, [mounted]);
	const image = React.useMemo(() => {
		return imgRef?.current;
	}, [mounted]);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const drawFrame = (t) => {
		if (!ctx) {
			return;
		}
		ctx.clearRect(0, 0, maxWidth, maxHeight);
		ctx.globalAlpha = opacity;

		// Draw the portion of the curve up to t
		ctx.beginPath();
		ctx.moveTo(pointA.x, pointA.y);
		for (let i = 0; i <= t; i += 0.01) {
			const pos = getPointOnCurve(i, pointA, pointB, factor);
			ctx.lineTo(pos.x, pos.y);
		}
		ctx.strokeStyle = color;
		ctx.lineWidth = 4;
		ctx.stroke();

		// Draw the arrow
		const pos = getPointOnCurve(t, pointA, pointB, factor);
		const angle = getRotationAngle(t, pointA, pointB, factor);

		ctx.save();
		ctx.translate(pos.x, pos.y);
		ctx.rotate(angle);
		ctx.drawImage(
			image,
			-imageAniWidth / 2,
			-imageAniHeight / 2,
			imageAniWidth,
			imageAniHeight,
		);
		ctx.restore();
	};
	drawFrame(progress);

	return (
		<>
			<canvas
				ref={canvasRef}
				style={style.line}
				width={maxWidth}
				height={maxHeight}
			/>
			<Img
				ref={imgRef}
				src={imgFile}
				style={{
					opacity,
					width: imgWidth,
					height: imgHeight,
					display: "none",
				}}
			/>
			{fromLabel ? (
				<Label from={animateFrom} point={pointA} label={fromLabel} />
			) : null}
			{toLabel ? (
				<Label
					from={animateFrom + duration}
					point={pointB}
					label={toLabel}
				/>
			) : null}
		</>
	);
};

const Label = ({ point, label, from }) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [from, from + 30], [1.3, 1], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [from, from + 10], [0, 1], {
		...clamp,
		...ease,
	});
	return (
		<div
			style={{
				left: point.x - 100,
				top: point.y - 50,
				position: "absolute",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: 200,
				transform: `scale(${scale})`,
				opacity,
			}}
		>
			<div
				style={{
					...style.label,
					color: "white",
				}}
			>
				{label}
			</div>
			<div
				style={{
					...style.main,
					width: 24,
					height: 24,
					borderRadius: 100,
					backgroundColor: "white",
				}}
			/>
		</div>
	);
};

const style = {
	line: {
		position: "absolute",
		top: 0,
		left: 0,
	},
	label: {
		fontSize: 30,
		fontWeight: "bold",
		fontFamily: "sans-serif",
	},
};

export default PointLineDraw;