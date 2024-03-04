import { dehydrate } from "@tanstack/react-query";
import Charms from "../components/Charms";

const Bookmarks = () => { 

    return (
        <>
            <Charms dehydratedState={dehydrate} />
        </>
    )
};

export default Bookmarks;
