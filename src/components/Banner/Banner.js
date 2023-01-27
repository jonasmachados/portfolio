import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from "../../assets/pdf/Curriculo.pdf";
import SvgDev from "../SVG/SvgDev";

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 4.1 }
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px var(--primary-color)",
    boxShadow: "0px 0px 8px var(--primary-color)",
    transition: {
      duration: 0.3,
      repeatType: "mirror",
      repeat: Infinity
    }
  }
}

const bannerVariants = {
  hidden: {
    scale: 0.9
  },
  visible: {
    scale: 1,
    transition: { duration: 1.3 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const listVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 1.8,
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: {  scale: 0 },
  visible: {
    scale: 1,
    paddingBottom: 30
  }
};

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "Web Developer"];
  const period = 900;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const listInfo = ["🌱 I’m currently learning web development (NodeJS, ReactJS and SpringBoot).",
    "🧑‍💻 I’am looking for new job opportunities to Dev Full Stack Springboot | React."]

  return (
    <div className="banner" id="home" >

      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <span className="tagline">Welcome to my Portfolio</span>
        <h1>
          {" "}
          {`Hi! I'm Jonas`}<br></br>{" "}
          <span
            className="txt-rotate"
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <h2>Developer | React | SpringBoot</h2>

        <motion.ul className="listVariants"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {listInfo.map((index) => {
            return (
              <>
                <motion.li
                  variants={item}
                >
                  {index}
                </motion.li>
              </>
            );
          })}
        </motion.ul>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          onClick={() => window.open(Pdf) &
            console.log("connect")}> Resume
        </motion.button>

      </motion.div>

      <div>
        <SvgDev />
      </div>
    </div>
  );
};

export default Banner;
