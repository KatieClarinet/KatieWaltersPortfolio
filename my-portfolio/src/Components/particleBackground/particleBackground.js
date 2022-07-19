import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";


export default function ParticleBackground() {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
        <>
      
        <div className="particles-js">
            <Particles 
            id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
                options={{
    fpsLimit: 60,

    //////////////////////////////////////////////////////
    particles: {
      move: {
        bounce: false,
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false
      },

      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },

      roll: {
        darken: {
          enable: true,
          value: 5
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },

//higher area number means fewer blobs
      number: { density: { enable: true, area: 800 }, value: 100 },


      opacity: {
        value: 1
      },


      shape: {
        type: "circle"
      },


      size: {
        value: { min: 1, max: 6 }
      }

    },

    ////////////////////////////////////////////////////////////

    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#8ED1FC"
          },
          particles: {
            color: {
              value: "#FCDAE0"
            }
          }
        }
      },
      
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#000"
          },
          particles: {
            color: {
              value: "#fff"
            }
            
          }
        }
      }
    ]
  }}


            />
        </div>
        </>
    )
}