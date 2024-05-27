import { AbsoluteFill, Sequence, Img, staticFile } from "remotion";
import TimeLine from "../components/TimeLine";
import IntroTitle from "../components/IntroTitle";
import TextBlurReveal from "../components/TextBlurReveal";
import FadeOut from "../components/FadeOut";
import CallOutCard from "../components/CallOutCard";
import IndonesiaMap from "./IndonesiaMap";
import Conference from "./Conference";
import EconomicGrowth from "./EconomicGrowth";
import CultureGrowth from "./CultureGrowth";
import GrowTogether from "./GrowTogether";

const bgImage = staticFile("background.jpg");

const Intro = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />
			<Sequence durationInFrames={120}>
				<AbsoluteFill>
					<div style={style.main}>
						<IntroTitle text="18 April 1955" from={50} />
					</div>
					<TimeLine startFrom={1949} endAt={1955} hideAt={60} />
				</AbsoluteFill>
			</Sequence>
			<Sequence layout="none" durationInFrames={400} from={120}>
				<AbsoluteFill>
					<FadeOut from={290} style={style.main}>
						<IndonesiaMap />
					</FadeOut>
				</AbsoluteFill>
				<AbsoluteFill>
					<FadeOut from={290} src={style.main}>
						<TextBlurReveal
							style={style.title}
							text="BANDUNG CONFERENCE"
						/>
					</FadeOut>
				</AbsoluteFill>
			</Sequence>
			<Sequence layout="none" durationInFrames={220} from={200}>
				<AbsoluteFill>	
						<FadeOut style={{ width: "100%", height: "100%" }} from={190}>				
							<CallOutCard  width={500} height={400} startX={670} startY={645} endX={900} endY={100}>
								<Conference />
							</CallOutCard>
							<EconomicGrowth from={70} x={900} y={540} />
							<CultureGrowth from={100} x={900} y={720} />
						</FadeOut>	
				</AbsoluteFill>
			</Sequence>
			<Sequence layout="none" from={445}>
				<AbsoluteFill>	
						<FadeOut style={style.main} from={70}>				
							<GrowTogether />
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