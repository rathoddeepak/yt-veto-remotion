import { AbsoluteFill, Audio, Sequence, Img, staticFile } from "remotion";
import IntroTitle from "../components/IntroTitle";
import SubscribeCard from "../components/SubscribeCard";
import Nehru from "./Nehru";

const bgImage = staticFile("background.jpg");

const Intro = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />
			<Sequence durationInFrames={120}>
				<AbsoluteFill>
					<div style={style.main}>
						<IntroTitle text="11 April 1955" from={0} />
					</div>					
				</AbsoluteFill>
			</Sequence>
			<Sequence from={70}>
				<AbsoluteFill>
					<div style={style.main}>
						<Nehru />
					</div>					
				</AbsoluteFill>
			</Sequence>
			<Sequence from={200}>
				<AbsoluteFill>
					<div style={style.main}>
						<SubscribeCard />
					</div>					
				</AbsoluteFill>
			</Sequence>
			<Audio src={staticFile("5.m4a")} />
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