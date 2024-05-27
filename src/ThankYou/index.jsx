import { AbsoluteFill, Audio, Img, staticFile } from "remotion";
import FadeOut from "../components/FadeOut";
import ThankYouWatch from "../components/ThankYouWatch";

const bgImage = staticFile("background.jpg");
const BlameGame = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />
			<AbsoluteFill>
				<FadeOut from={200} style={style.main}>
					<ThankYouWatch />
				</FadeOut>
			</AbsoluteFill>
			<Audio src={staticFile('25.m4a')} />
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
	}
};

export default BlameGame;
