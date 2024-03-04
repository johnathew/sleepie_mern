import { dehydrate } from "@tanstack/react-query";
import Charms from "../components/Charms";

const Bracelets = () => {
  return (
    <Charms dehydratedState={dehydrate} />
  )
};

export default Bracelets;
