import missionImg from "../assets/mission.jpeg";
import missionvid from "../assets/missionvid.mp4";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission" className="py-10">
      <h2 className="text-white text-center my-5 tracking-tighter text-3xl lg:text-4xl font-bold">
        Our Mission
      </h2>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto px-4">
        {/* Background Video */}
        <video
          className="w-full rounded-3xl border-b-4 border-white/20 shadow-2xl"
          autoPlay
          muted
          loop
          playsInline
          poster={missionImg}
        >
          <source src={missionvid} type="video/mp4" />
        </video>

        {/* Overlay Gradient */}
        <div className="absolute h-full w-full rounded-3xl bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        {/* Mission Text */}
        <p
          className="absolute max-w-2xl px-6 text-center text-white font-extrabold 
          text-2xl sm:text-4xl lg:text-6xl tracking-tight drop-shadow-lg animate-fadeIn"
        >
          {MISSION}
        </p>
      </div>
    </section>
  );
};

export default Mission;
