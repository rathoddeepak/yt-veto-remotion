import React from "react";
import { useCurrentFrame, interpolate, interpolateColors } from "remotion";
import { clamp, ease } from "../utils";
import LineDraw from "./LineDraw";

const CallOutCard = ({
	startX = 0,
	startY = 0,
	endX = 100,
	endY = 100,
	children,
	width = 600,
	height = 400,
	backDropColor = "#000000B4",
	rightPointer = false,
}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [20, 55], [0, 1], {
		...clamp,
		...ease,
	});
	const scale2 = interpolate(frame, [0, 10], [0, 1], {
		...clamp,
		...ease,
	});
	const backgroundColor = interpolateColors(
		frame,
		[0, 10],
		["#00000000", backDropColor],
		{
			...clamp,
			...ease,
		},
	);
	return (
		<div style={{ ...style.main, backgroundColor }}>
			<div
				style={{
					...style.dot,
					left: startX,
					transform: `scale(${scale2})`,
					top: startY,					
				}}
			/>
			<div
				style={{
					...style.card,
					left: endX,
					top: endY,
					transform: `scale(${scale})`,
					width,
					height,
					transformOrigin: rightPointer ? "bottom right" : "bottom left"
				}}
			>
				{children}
			</div>
			<LineDraw
				color="#A8FF66"
				from={[startX + 5, startY + 10]}
				to={[
					endX + (rightPointer ? width : 0) + (rightPointer ? -4 : 4),
					endY + height - 10,
				]}
			/>
		</div>
	);
};

const style = {
	main: {
		width: "100%",
		height: "100%",
		position: "relative",
	},
	dot: {
		position: "absolute",
		width: 20,
		height: 20,
		borderRadius: 20,
		backgroundColor: "#A8FF66",
		boxShadow: "-2px 2px 6px 0 rgba(100,185,80,0.86)",
	},
	card: {
		backgroundImage: "linear-gradient(123deg, #262626 0%, #000000 100%)",
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "#A8FF66",
		position: "absolute",
		boxShadow: "0 2px 4px 0 rgba(168,255,102,0.50)",
		borderRadius: 20,
	},
};

export default CallOutCard;