import { Link } from "@remix-run/react";
import { ArrowRightIcon } from "lucide-react";
import LightRays from "./LightRays";
import StarBorder from "./StarBorder";

const CallToAction = () => {
  return (
    <div className="relative my-24 translate-y-16">
      <LightRays
        raysOrigin="top-center"
        raysColor="#BFF163"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays rotate-180 h-96"
      />
      <section className="absolute top-0 md:top-20 z-50 left-16 md:left-[36%] text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Punya proyek menarik?
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-400">
          Mari kita wujudkan ide hebat Anda bersama.
        </p>
        <div className="mt-8">
          <Link to="/contact">
            <StarBorder>
              <span>Hubungi Saya</span>
              <ArrowRightIcon className="ml-2.5" />
            </StarBorder>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
