
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { useEffect } from "react";

export default function ParticleBackground({ darkmode }) {

  const color = (darkmode) => (darkmode ? '#393E41' : '#8ed1fc');
  const leaves = (darkmode) => (darkmode ? '#946E83' : '#FCDAE0');

    
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
      // container.loadTheme(theme)
      
    };
    // useEffect(() => {
    //   document.body.className = theme;
    // }, [theme]);

    return (
        <>
            <div className="particles-js">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 90,

                        //////////////////////////////////////////////////////
                        particles: {
                            move: {
                                bounce: false,
                                direction: "none",
                                enable: true,
                                outModes: "out",
                                random: false,
                                speed: 2,
                                straight: false,
                            },

                            tilt: {
                                direction: "random",
                                enable: true,
                                move: true,
                                value: {
                                    min: 0,
                                    max: 360,
                                },
                                animation: {
                                    enable: true,
                                    speed: 60,
                                },
                            },

                            roll: {
                                darken: {
                                    enable: true,
                                    value: 5,
                                },
                                enable: true,
                                speed: {
                                    min: 15,
                                    max: 25,
                                },
                            },

                            //higher area number means fewer blobs
                            number: {
                                density: { enable: true, area: 800 },
                                value: 100,
                            },

                            opacity: {
                                value: 1,
                            },

                            shape: {
                                type: "circle",
                            },
                            

                            size: {
                                value: { min: 1, max: 6 },
                            },
                        },

                        ////////////////////////////////////////////////////////////

                        themes: [
                            {
                                name: "light",
                                default: {
                                    value: true,
                                    mode: "light",
                                },
                                options: {
                                    background: {
                                        color: color(darkmode)
                                    },
                                    particles: {
                                        color: {
                                            value: leaves(darkmode),
                                        },
                                    },
                                },
                            },

                            {
                                name: "dark",
                                default: {
                                    value: true,
                                    mode: "dark",
                                },
                                options: {
                                    background: {
                                        color: color(darkmode)
                                    },
                                    particles: {
                                        color: {
                                          value: leaves(darkmode),
                                        },
                                    },
                                },
                            },
                        ],
                    }}
                />
            </div>
        </>
    );
}
