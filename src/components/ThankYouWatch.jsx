import React from "react";
import {
	useCurrentFrame,
	interpolate,
	staticFile,
	Img,
	interpolateColors,
} from "remotion";
import { clamp, ease } from "../utils";
import TextBlurReveal from "./TextBlurReveal";

const ThankYouWatch = () => {
	const frame = useCurrentFrame();
	const shimmer = interpolate(frame, [40, 120], [-200, 200], {
		...clamp,
		...ease,
	});
	const shimmer2 = interpolate(frame, [90, 180], [-200, 200], {
		...clamp,
		...ease,
	});
	return (
		<div style={style.main}>
			<TextBlurReveal duration={80} style={style.title} text="Thank you for watching" />
			<div style={style.row}>
				<div
					style={{
						...style.button,
						backgroundImage: `radial-gradient(circle at ${shimmer}% 60%, #FF0000 0%, #540000 100%)`,
					}}
				>
					SUBSCRIBE
				</div>

				<div
					style={{
						...style.button,
						backgroundImage: `radial-gradient(circle at ${shimmer2}% 60%, #FFFFFF 0%, #666666 100%)`,
					}}
				>
					COMMENT
				</div>
			</div>
		</div>
	);
};

const style = {
	main: {
		backgroundColor: "rgba(0,0,0,0.41)",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "#960000",
		borderRadius: 20,
		height: 400,
		width: 800,
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
	},
	row: {
		width: 500,
		display: "flex",
		justifyContent: "space-between"		
	},
	button: {
		color: "white",
		fontWeight: "600",
		fontSize: 30,
		fontFamily: "sans-serif",
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 20,
		paddingBottom: 20,
		borderRadius: 100,
		marginTop: 40,
	},
};

export default ThankYouWatch;