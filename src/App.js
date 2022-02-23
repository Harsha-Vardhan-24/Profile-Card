import "./styles.css";
import Image from "../components/Image";
import HeadingText from "../components/HeadingText";
import Button from "../components/Button";
import About from "../components/About";
import Intrests from "../components/Intrests";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="App">
      <Image />
      <HeadingText />
      <Button />
      <About />
      <Intrests />
      <Footer />
    </div>
  );
}
