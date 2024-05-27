import { AbsoluteFill, Audio, Sequence, Img, staticFile } from "remotion";
import FadeOut from "../components/FadeOut";
import TextBlurReveal from "../components/TextBlurReveal";
import Favor from "./Favor";
import RNKao from "./RNKao";
import WorldBlame from "./WorldBlame";
import TaiwanMap from "./TaiwanMap";
import AlreadyKnew from "./AlreadyKnew";

const bgImage = staticFile("background.jpg");
const BlameGame = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />
			<Sequence durationInFrames={460}>
				<AbsoluteFill>
					<FadeOut from={400} style={style.main}>
						<WorldBlame />
					</FadeOut>
				</AbsoluteFill>
			</Sequence>
			<Sequence durationInFrames={800} from={460}>
				<Audio src={staticFile('10.m4a')} />				
				<AbsoluteFill>
					<FadeOut from={570} style={style.main}>
						<Favor />
					</FadeOut>
				</AbsoluteFill>
				<Sequence from={300}>
					<Audio src={staticFile('11.m4a')} />
				</Sequence>
			</Sequence>

			<Sequence from={1050}>
				<Audio src={staticFile('12.m4a')} />
			</Sequence>

			<Sequence durationInFrames={300} from={1050}>
				<AbsoluteFill>
					<FadeOut from={270} style={style.main}>
						<RNKao />
					</FadeOut>
				</AbsoluteFill>
			</Sequence>
			
			<Sequence layout="none" durationInFrames={100} from={1350}>
				<AbsoluteFill>
					<FadeOut from={70} style={style.main}>
						<TaiwanMap />
					</FadeOut>
				</AbsoluteFill>
				<AbsoluteFill>
					<FadeOut from={70} src={style.main}>
						<TextBlurReveal
							style={style.title}
							text="TAIWAN"
							color="#FF3636"
						/>
					</FadeOut>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={1450}>
				<Audio src={staticFile('13.m4a')} />
			</Sequence>

			<Sequence from={1750}>
				<Audio src={staticFile('14.m4a')} />
			</Sequence>

			<Sequence layout="none" durationInFrames={440} from={1450}>
				<AbsoluteFill>
					<FadeOut from={400} style={style.main}>
						<AlreadyKnew />
					</FadeOut>
				</AbsoluteFill>
			</Sequence>
			<Audio startAt={30} src={staticFile('9.m4a')} />
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

export default BlameGame;