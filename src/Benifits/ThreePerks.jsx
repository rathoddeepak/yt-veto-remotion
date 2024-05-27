import IndiaBackFoot from "./IndiaBackFoot";
import TaiwanExpose from "./TaiwanExpose";
import DummyReason from "./DummyReason";

const ThreePerks = () => {
	return (
		<>
			<div style={style.title}>
				3 Benifits
			</div>

			<IndiaBackFoot from={200} />
			<TaiwanExpose from={490} />
			<DummyReason />
		</>
	)
};

const style = {
	title: {
		fontFamily: "sans-serif",
		fontSize: 70,
		fontWeight: "bold",
		color: "#FFFFFF",
		textAlign: "center",
		textShadow: "0 1px 27px rgba(255,255,255,0.96)",
		marginBottom: 40
	}
}

export default ThreePerks;