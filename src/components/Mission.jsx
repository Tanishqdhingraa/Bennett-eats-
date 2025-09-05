import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import {MISSION } from "../constants"

const Mission = () => {
  return (
   <section id="mission">
    <h2 className="text-white text-center my-8 tracking-tighter lg:text-4xl">Our Mission </h2>
    <div className="relative flex items-center justify-center">
        <video className="w-full rounded-3xl border-b-2" autoPlay muted loop playsInline poster={missionImg}>
            <source src={mission} type="video/mp4" />
        </video>
        <div className="absolute h-full w-full rounded-3xl bg-black/40">
        </div>
        <p className="absolute max-w-lg text-white tracking-tighter lg:text-6xl">
            {MISSION}
        </p>
    </div>

   </section>
  )
}

export default Mission
