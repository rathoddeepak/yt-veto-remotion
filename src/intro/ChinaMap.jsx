import React from "react";
import {  Sequence } from "remotion";
import ZoomIn from "../components/ZoomIn";
import ChinaMapReveal from "../components/ChinaMapReveal";

const ChinaMap = ({ from = 0 }) => {
	return (
		<div style={style.main}>
			<ZoomIn from={from} out={70} style={style.cover}>
				<Sequence from={from} layout="none">
					<ChinaMapReveal />
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
		marginTop: -200,
	},
	text: {
		fontFamily: "Inter-Regular_ExtraBold",
		fontSize: 200,
	},
};

export default ChinaMap;