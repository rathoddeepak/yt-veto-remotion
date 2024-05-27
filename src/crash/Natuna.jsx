import React from "react";
import { useCurrentFrame, interpolate, Img, staticFile } from "remotion";
import { clamp, ease } from "../utils";
const kashmirPrincess = staticFile("kashmirPrincess.jpeg");
const Natuna = () => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [10, 70], [10, 0], {
		...clamp,
		...ease,
	});
	const opacity = interpolate(frame, [10, 70], [0, 1], {
		...clamp,
		...ease,
	});
	return (
		<div style={{...style.cover, filter: `blur(${blur}px)`, opacity}}>
			<div style={style.imgCover}>
				<Img
					src={kashmirPrincess}
					style={{...style.img }}
				/>
			</div>
			<div style={style.text}>
				Image of Kashmir Princess, which was bombed crashed in Natuna Island
			</div>
		</div>
	);
};

const style = {
	cover: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",		
		justifyContent: "center",
		alignItems: 'center'
	},
	imgCover: {
		height: 300,
		width: "95%",
		overflow: "hidden",
		borderRadius: 20
	},
	img: {
		height: "100%",
		width: "100%",
	},
	text: {
		marginTop: 10,
		fontSize: 22,
		width: "95%",
		fontFamily: "sans-serif",
		fontWeight: "500",
		color: "#A8FF66",
	},
};

export default Natuna;