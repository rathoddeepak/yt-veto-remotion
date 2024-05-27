import { AbsoluteFill, Sequence, Img, staticFile } from "remotion";
import TimeLine from "../components/TimeLine";
import IndiaMap from "./IndiaMap";
import ChinaMap from "./ChinaMap";
import WW2 from "./WW2";
const bgImage = staticFile("background.jpg");
const Intro = () => {
	return (
		<>
			<Img src={bgImage} style={style.bgImage} />
			<div style={style.bgView} />
			<Sequence durationInFrames={120}>
				<AbsoluteFill>
					<div style={style.main}>
						<WW2 from={50} />
					</div>
					<TimeLine startFrom={1939} endAt={1945} />
				</AbsoluteFill>
			</Sequence>
			<Sequence durationInFrames={150} from={120}>
				<AbsoluteFill>
					<div style={style.main}>
						<IndiaMap from={60} />
					</div>
					<TimeLine startFrom={1945} endAt={1947} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={270}>
				<AbsoluteFill>
					<div style={style.main}>
						<ChinaMap from={60} />
					</div>
					<TimeLine startFrom={1947} endAt={1949} />
				</AbsoluteFill>
			</Sequence>
		</>
	);
};

const style = {
	main: {
		width: "100%",
		height: "100%",
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
		backgroundColor: "#000000b4"
	}
};

export default Intro;