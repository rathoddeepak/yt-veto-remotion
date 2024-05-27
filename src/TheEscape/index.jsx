import { AbsoluteFill, Sequence, Img, staticFile } from "remotion";
import FadeOut from "../components/FadeOut";
import Info from "./Info";
const bgImage = staticFile("background.jpg");
const Intro = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />			
			<Sequence from={30}>
				<AbsoluteFill>
					<FadeOut from={360} style={style.main}>
						<Info />
					</FadeOut>					
				</AbsoluteFill>
			</Sequence>
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
		justifyContent: 'center'
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