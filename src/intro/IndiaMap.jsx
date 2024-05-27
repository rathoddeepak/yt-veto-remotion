import React from "react";
import { Sequence } from "remotion";
import ZoomIn from "../components/ZoomIn";
import IndiaMapReveal from "../components/IndiaMapReveal";

const IndiaMap = ({ from = 0 }) => {
	return (
		<div style={style.main}>
			<ZoomIn from={from} out={60} style={style.cover}>
				<Sequence from={from} layout="none">
					<IndiaMapReveal />
				</Sequence>
			</ZoomIn>
		</div>
	);
};

const style = {
	main: {
		display: "flex",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	cover: {
		marginLeft: 200,
		marginTop: -200,
	},
	text: {
		fontFamily: "Inter-Regular_ExtraBold",
		fontSize: 200,
	},
};

export default IndiaMap;