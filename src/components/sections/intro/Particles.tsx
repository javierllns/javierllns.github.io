import { useEffect, useMemo, useState, type FC } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine'
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadBasic } from '@tsparticles/basic' // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const ParticlesComponent: FC<{ className?: string; canvasStyle?: React.CSSProperties }> = ({
  className,
  canvasStyle
}) => {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      //await loadSlim(engine)
      await loadBasic(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  // const options: ISourceOptions = useMemo(
  //   () => ({
  //     fullScreen: {
  //       enable: false
  //     },
  //     background: {
  //       color: {
  //         value: '#0000000'
  //       }
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: 'push'
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: 'repulse'
  //         }
  //       },
  //       modes: {
  //         push: {
  //           quantity: 4
  //         },
  //         repulse: {
  //           distance: 200,
  //           duration: 0.4
  //         }
  //       }
  //     },
  //     particles: {
  //       color: {
  //         value: '#ffffff'
  //       },
  //       links: {
  //         color: '#ffffff',
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.5,
  //         width: 1
  //       },
  //       move: {
  //         direction: MoveDirection.top,
  //         enable: true,
  //         outModes: {
  //           default: OutMode.out
  //         },
  //         random: false,
  //         speed: 6,
  //         straight: false
  //       },
  //       number: {
  //         density: {
  //           enable: true
  //         },
  //         value: 80
  //       },
  //       opacity: {
  //         value: 0.5
  //       },
  //       shape: {
  //         type: 'circle'
  //       },
  //       size: {
  //         value: { min: 1, max: 5 }
  //       }
  //     },
  //     detectRetina: true
  //   }),
  //   []
  // )

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true
      },
      background: {
        color: '#0000000'
        // image: 'url(https://particles.js.org/images/SpaceX.png)',
        // repeat: 'no-repeat',
        // size: '40%',
        // position: '60% 50%'
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'bubble'
          }
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          }
        }
      },
      particles: {
        color: { value: '#ffffff' },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: true,
          speed: 0.3
        },
        number: {
          density: {
            enable: true
          },
          value: 600
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5
          },
          value: { min: 0.3, max: 0.6 }
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: 1
        }
      }
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
        className={className}
        style={canvasStyle}
      />
    )
  }

  return <></>
}
