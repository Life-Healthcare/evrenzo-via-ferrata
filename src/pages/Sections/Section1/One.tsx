import { useNavigate } from "react-router-dom";
import ButtonStart from "../../../components/ButtonStart";
import { motion } from "framer-motion";
import { useContext } from "react";
import SlideContext from "../../../contexts/SlideContext";
import Triangle from "../../../components/Triangle";
import DisclaimerBottom from "../../../components/DisclaimerBottom";
import ScreensaverFooter from "../../../components/ScreensaverFooter";

export default () => {
  const navigate = useNavigate();
  const [slideDirection] = useContext(SlideContext);

  return (
    <motion.article
      variants={slideDirection}
      exit="exit"
      animate="animate"
      initial="initial"
      style={{ backgroundImage: `url(./images/section1-ss.png)` }}
      className="bottom-mask absolute flex flex-col w-full h-full bg-cover bg-fixed bg-center text-white p-12 text-center"
    >
      <img
        className="w-[calc(1845px*var(--scale-x))] "
        src="./images/section1-1.svg"
      />
      <section className="flex flex-col flex-grow justify-center items-center gap-24 absolute top-1/2 left-1/2 -translate-x-1/2">
        <ButtonStart onClick={() => navigate("/1/2")} />
      </section>
    </motion.article>
  );
};
