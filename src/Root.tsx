import { Composition } from "remotion";
import Intro from "./intro";
import Inspire from "./inspire";
import Bandung from "./bandung";
import Blunder from "./blunder";
import Crash from "./crash";
import TheEscape from "./TheEscape";
import BlameGame from "./BlameGame";
import Benifits from "./Benifits";
import ThankYou from "./ThankYou";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Intro"
        component={Intro}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Inspire"
        component={Inspire}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bandung"
        component={Bandung}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Blunder"
        component={Blunder}
        durationInFrames={400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Crash"
        component={Crash}
        durationInFrames={500}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TheEscape"
        component={TheEscape}
        durationInFrames={500}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BlameGame"
        component={BlameGame}
        durationInFrames={1900}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Benifits"
        component={Benifits}
        durationInFrames={1680}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ThankYou"
        component={ThankYou}
        durationInFrames={230}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
