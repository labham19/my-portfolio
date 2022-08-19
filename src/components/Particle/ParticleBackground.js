import Particles from 'react-tsparticles';
import config from './Particlejs_config';
import { loadFull } from "tsparticles";

const ParticleBackground = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div>
         <Particles options={config} init={particlesInit}></Particles>
    </div>
  )
}

export default ParticleBackground
