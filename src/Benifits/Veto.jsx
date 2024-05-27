import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";
import ChinaMap from "./ChinaMap";
import { ease, clamp } from "../utils";
const unscImg = staticFile("unsc.png");

const VetoReason = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [60, 90], [0, 1], {
		...clamp,
		...ease,
	});
	const scale = interpolate(frame, [60, 90], [1.2, 1], {
		...clamp,
		...ease,
	});

	const width = interpolate(frame, [60, 90], [0, 1000], {
		...clamp,
		...ease,
	});

	return (
		<div style={style.row}>
			<ChinaMap />
			<div style={style.vetoCover}>
				<Img src={unscImg} style={{ ...style.unImg, opacity, scale }} />
			</div>
			<div style={{ ...style.line, width }} />

			<WhatCard from={90} />
			<InfoCard from={200} />
		</div>
	);
};

const WhatCard = ({ from }) => {
	const frame = useCurrentFrame();
	const height = interpolate(frame, [from, from + 30], [0, 160], {
		...clamp,
		...ease,
	});
	const blur = interpolate(frame, [from, from + 30], [10, 0], {
		...clamp,
		...ease,
	});
	const scale = interpolate(frame, [from, from + 30], [0, 1], {
		...clamp,
		...ease,
	});

	return (
		<div
			style={{
				position: "absolute",
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "center",
				flexDirection: "column",
				left: 800,
				top: 200,
				height: 360,
				filter: `blur(${blur}px)`,
				transform: `scale(${scale})`,
				transformOrigin: "bottom center"
			}}
		>
			<div style={style.card}>
				<div style={style.text}>
					China can ask for VETO without any problem from USA
				</div>
			</div>
			<div style={{ ...style.line2, height }} />
		</div>
	);
};

const InfoCard = ({ from }) => {
	const frame = useCurrentFrame();
	const height = interpolate(frame, [from, from + 30], [0, 120], {
		...clamp,
		...ease,
	});
	const blur = interpolate(frame, [from, from + 30], [10, 0], {
		...clamp,
		...ease,
	});
	const scale = interpolate(frame, [from, from + 30], [0, 1], {
		...clamp,
		...ease,
	});

	return (
		<div
			style={{
				position: "absolute",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				left: 800,
				top: 570,
				height: 360,
				filter: `blur(${blur}px)`,
				transform: `scale(${scale})`,
				transformOrigin: "top center"
			}}
		>
			<div style={{ ...style.line2, height }} />
			<div style={style.card}>
				<div style={style.text}>
					Finally they got, VETO power on December 14, 1955
				</div>
			</div>			
		</div>
	);
};

const style = {
	row: {
		flexDirection: "row",
		display: "flex",
		width: 1700,
		justifyContent: "space-between",
		alignItems: "center",
	},
	box: {
		width: 350,
		height: 350,
		borderWidth: 5,
		borderColor: "#900F0F",
		borderStyle: "solid",
		backgroundImage: "linear-gradient(133deg, #1A1A1A 0%, #000000 100%)",
		borderRadius: 20,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		height: 160,
		width: 270,
	},
	vetoCover: {
		marginTop: -270,
		position: "relative",
	},
	unImg: {
		position: "absolute",
		height: 300,
		width: 300,
		right: 0,
	},
	line: {
		height: 10,
		position: "absolute",
		top: 560,
		left: 510,
		backgroundColor: "#ffff",
	},
	card: {
		width: 500,
		height: 300,
		backgroundImage: "linear-gradient(116deg, #1E1E1E 0%, #000000 100%)",
		borderColor: "#FFFFFF",
		borderWidth: 3,
		borderStyle: "solid",
		borderRadius: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",		
	},
	line2: {
		width: 10,
		backgroundColor: "#ffff",
	},
	text: {
		fontSize: 26,
		color: "#FFFFFF",
		fontFamily: "sans-serif",
		fontWeight: "bold",
		width: "100%",
		textAlign: "center"
	}
};

export default VetoReason;