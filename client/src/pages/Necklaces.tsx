import React from "react";
import Charms from "../components/Charms";
import { dehydrate } from "@tanstack/react-query";

const Necklaces = () => {
    return <Charms dehydratedState={dehydrate} />
};

export default Necklaces;
