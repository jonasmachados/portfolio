import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/dev.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from "../../assets/pdf/Curriculo.pdf";


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "Web Developer"];
  const period = 600;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {" "}
              {`Hi! I'm Jonas`}<br></br>{" "}
              <span
                className="txt-rotate"
                dataPeriod="600"
                data-rotate='[ "Full Stack Developer", "Web Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <h2>Developer | React | SpringBoot</h2>
            <p>🌱 I’m currently learning web development (NodeJS, ReactJS and SpringBoot).</p>
            <p>🧑‍💻 I’am looking for new job opportunities to Dev Full Stack Springboot | React.</p>
            <button onClick={() => window.open(Pdf) & console.log("connect")}>
              Resume <ArrowRightCircle size={25} />
            </button>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
