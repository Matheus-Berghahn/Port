import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import { cn } from "../utils/helpers";
import useTailwindBreakpoint from "../utils/hooks/useTailwindBreakpoint";
import Image from 'next/image';

export default function Home() {
  const horizontalBackgroundControls = useAnimation();
  const verticalBackgroundControls = useAnimation();
  const backgroundControls = useAnimation();
  const animationControls = useAnimation();

  const twBreakpoint = useTailwindBreakpoint();

  useEffect(() => {
    const startAnimation = async () => {
      if (window.innerWidth < 640) {
        void animationControls.start({
          translateX: "0",
          translateY: "0",

          transition: {
            duration: 0,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        });

        void horizontalBackgroundControls.start({
          translateY: "-100%",

          transition: {
            duration: 0,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        });

        void verticalBackgroundControls.start({
          translateY: "-100%",

          transition: {
            duration: 0,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        });

        return;
      }

      await animationControls.start({
        translateX: "50%",
        translateY: "50%",

        transition: {
          duration: 1,
          ease: [0.785, 0.135, 0.15, 0.0],
        },
      });

      void horizontalBackgroundControls.start({
        translateY: "-100%",

        transition: {
          duration: 1,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });

      await animationControls.start({
        translateX: "50%",
        translateY: "0",

        transition: {
          duration: 1.1,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });

      void verticalBackgroundControls.start({
        translateX: "-100%",

        transition: {
          duration: 0.9,
          ease: [0.25, 0.1, 0.35, 0.96],
        },
      });

      await animationControls
        .start({
          translateX: "0",
          translateY: "0",

          transition: {
            duration: 1.1,
            ease: [0.25, 0.1, 0.35, 0.96],
          },
        })
        .then(() => {
          animationControls.set({
            zIndex: 20,
          });
        });
    };

    void startAnimation();
  }, []);

  return (
    <>
      <Head>
        <title>Matheus Berghahn</title>
        <meta
          name="description"
          content="I'm Matheus, 22 years old, and I live in Brazil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16" />
      </Head>

      <motion.div
        className="w-full h-full p-default-window-sm sm:p-default-window overflow-hidden"
        animate={backgroundControls}
      >
        {["vertical", "horizontal"].map((direction) => (
          <motion.div
            key={direction}
            className={cn(
              "w-full h-full fixed top-0 left-0 bg-primary-800 z-50 hidden sm:block",
              {
                "bg-primary-700": direction === "horizontal",
              }
            )}
            animate={
              direction === "horizontal"
                ? horizontalBackgroundControls
                : verticalBackgroundControls
            }
          />
        ))}

        <motion.div
          className="relative title__wrapper md:z-[51]"
          style={{
            translateX: "50%",
            translateY: "50%",
          }}
          animate={animationControls}
        >
          <AnimatedText element="h1" text="Matheus" />
          <AnimatedText element="h1" text="Berghahn" />

          <AnimatedText
            element="span"
            text="Front-end Developer"
            artificialDelay={twBreakpoint === "sm" ? 0 : 2.5}
          />

        <Image
          src="/img_port_2.jpg"
          alt="photoHome"
          width={300}
          height={433}
          className="photoHome sm:opacity-0"
        />
        </motion.div>
      </motion.div>
    </>
  );
}
