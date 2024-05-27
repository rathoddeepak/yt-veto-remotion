import { AbsoluteFill, Audio, Sequence, Img, staticFile } from "remotion";
import FadeOut from "../components/FadeOut";
import IntroTitle from "../components/IntroTitle";
import ThreePerks from "./ThreePerks";
import MainReason from "./MainReason";
import Veto from "./Veto";
const bgImage = staticFile("background.jpg");
const Benifits = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />

			<Sequence durationInFrames={135}>
				<Audio src={staticFile('15.m4a')} />
				<AbsoluteFill>
					<div style={style.main}>
						<IntroTitle duration={50} text="Benifits of China"  />
					</div>
				</AbsoluteFill>
			</Sequence>

			<Sequence durationInFrames={800} from={135}>
				<Audio src={staticFile('16.m4a')} />
				<Sequence from={90}>
					<Audio src={staticFile('17.m4a')} />
				</Sequence>

				<Sequence from={430}>
					<Audio src={staticFile('18.m4a')} />
				</Sequence>
				<Sequence from={560}>
					<Audio src={staticFile('19.m4a')} />
				</Sequence>
				<AbsoluteFill>
					<FadeOut from={800} style={style.main}>
						<ThreePerks />
					</FadeOut>
				</AbsoluteFill>
			</Sequence>

			
			<Sequence durationInFrames={200} from={935}>
				<Audio src={staticFile('20.m4a')} />
				<AbsoluteFill>
					<div style={style.main}>
						<IntroTitle duration={110} fontSize={150} text="3rd Important Reason"  />
					</div>
				</AbsoluteFill>
			</Sequence>

			
			<Sequence durationInFrames={140} from={1135}>
				<Audio src={staticFile('21.m4a')} />
				<AbsoluteFill>
					<FadeOut from={110} style={style.main}>
						<MainReason />
					</FadeOut>
				</AbsoluteFill>				
			</Sequence>

			
			<Sequence durationInFrames={410} from={1275}>
				<Audio src={staticFile('23.m4a')} />
				<Sequence from={180}>
					<Audio src={staticFile('24.m4a')} />
				</Sequence>
				<AbsoluteFill>
					<FadeOut from={360} style={style.main}>
						<Veto />
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

export default Benifits;