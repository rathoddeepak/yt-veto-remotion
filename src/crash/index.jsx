import { AbsoluteFill, Img, staticFile } from "remotion";
import FadeOut from "../components/FadeOut";
import WorldTravel from "./WorldTravel";

const bgImage = staticFile("background.jpg");

const Intro = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />

			<AbsoluteFill>
				<FadeOut from={385} style={style.main}>
					<WorldTravel />
				</FadeOut>
			</AbsoluteFill>
		</>
	);
};

const style = {
	main: {
		width: "100%",
		height: "100%",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	bgImage: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	bgView: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "#000000b4",
	},
	title: {
		position: "absolute",
		bottom: 80,
		alignSelf: "center",
	},
};

export default Intro;