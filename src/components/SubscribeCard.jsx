import React from "react";
import {
	useCurrentFrame,
	interpolate,
	staticFile,
	Img,
	interpolateColors,
} from "remotion";
import { clamp, ease } from "../utils";
const logo = staticFile("logo.png");
const SubscribeCard = ({ backDropColor = "#00000021" }) => {
	const frame = useCurrentFrame();
	const backgroundColor = interpolateColors(
		frame,
		[0, 10],
		["#00000000", backDropColor],
		{
			...clamp,
			...ease,
		},
	);

	const scale = interpolate(frame, [0, 30], [0, 1], {
		...clamp,
		...ease,
	});

	const opacity = interpolate(frame, [0, 1], [0, 10], {
		...clamp,
		...ease,
	});

	const blur = interpolate(frame, [30, 40], [10, 0], {
		...clamp,
		...ease,
	});

	const shimmer = interpolate(frame, [40, 120], [-200, 200], {
		...clamp,
		...ease,
	});
	return (
		<div style={{ ...style.main, backgroundColor }}>
			<div
				style={{
					...style.card,
					filter: `blur(${blur}px)`,
					transform: `scale(${scale})`,
					opacity,
				}}
			>
				<Img src={logo} style={style.logo} />

				<div style={style.note}>
					Please watch full video and subscribe to our channel for
					similar content
				</div>

				<div
					style={{
						...style.subcribe,
						backgroundImage:
							`radial-gradient(circle at ${shimmer}% 60%, #FF0000 0%, #540000 100%)`,
					}}
				>
					SUBSCRIBE
				</div>
			</div>
		</div>
	);
};

const style = {
	main: {
		width: "100%",
		height: "100%",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
	},
	card: {
		backgroundImage:
			"linear-gradient(153deg, #252525 0%, #0E0E0E 71%, #0E0E0E 72%)",
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "#FF0000",
		borderRadius: 20,
		width: 800,
		height: 600,
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		transformOrigin: "top center",
		flexDirection: "column",
	},
	logo: {
		width: 190,
		height: 190,
		borderRadius: 100,
		boxShadow: "0 0 40px 0 #FF0000b4",
	},
	note: {
		width: "90%",
		textAlign: "center",
		fontSize: 35,
		marginTop: 70,
		fontFamily: "sans-serif",
		color: "#c7c7c7",
	},
	subcribe: {
		color: "white",
		fontWeight: "600",
		fontSize: 35,
		fontFamily: "sans-serif",
		paddingLeft: 70,
		paddingRight: 70,
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 100,
		marginTop: 40,
	},
};

export default SubscribeCard;