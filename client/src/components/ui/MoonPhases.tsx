import { motion } from "framer-motion"
import { SVGProps, useState } from "react"
import styles from "../../styles/SVG.module.css"
import { Link } from "react-router-dom"
const MoonPhases = (props: SVGProps<SVGSVGElement>) => {

    const [isHovered, setIsHovered] = useState([
        { name: "moonOne", hovered: false },
        { name: "moonTwo", hovered: false },
        { name: "moonThree", hovered: false },
        { name: "moonFour", hovered: false },
        { name: "moonFive", hovered: false },
    ])

    // animate nav links to pulse on hover over associated moon phases
    const handleChange = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        const { id } = e.currentTarget
        setIsHovered((prev) => prev.map((moon) => moon.name === id ? { ...moon, hovered: !moon.hovered } : moon))
    }

    // animate moon phases to populate sequentially on page load
    const moonPhases = {
        visible: (i: number) => ({
            scale: 1,
            transition: {
                duration: i * 0.3,
            },
        }),
        hidden: { scale: 0 },
    }

    // animate stars in svg to pulse at random intervals
    const stars = {
        visible: () => ({
            opacity: [0.3, 1, 0.3],
            transition: {
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
            },
        }),
    }
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 -20 500 500"
            xmlSpace="preserve"
            aria-labelledby="moonPhases home page banner"
            {...props}
            fill="pink"
            stroke="black"
            strokeWidth="0.7"
            className={styles.navSVG}
        >
            <style type="text/css">
                {
                    ".st0{fill:#FFFFFF;}\r\n\t.st1{fill:#1D262D;}\r\n\t.st2{fill:#1D1D1B;}\r\n\t.st3{fill:#E6D7BD;}\r\n\t.st4{fill:#231F20;}\r\n\t.st5{fill-rule:evenodd;clip-rule:evenodd;}\r\n\t.st6{fill:none;stroke:#000000;stroke-width:7;stroke-miterlimit:10;}\r\n\t.st7{fill:#010001;}\r\n\t.st8{fill:#E4E6E9;}\r\n\t.st9{fill:#1F140F;}"
                }
            </style>
            <g>
                <g>
                    <path d="M242.1,473.8c-0.1-3.1,2.4-5.7,5.5-5.8l0,0c3.1-0.1,5.7,2.4,5.8,5.5l0,0c0.1,3.1-2.4,5.7-5.5,5.8l0,0c0,0-0.1,0-0.1,0l0,0 C244.6,479.3,242.1,476.9,242.1,473.8z" />
                    <path d="M218.8,478c-3.1-0.3-5.4-3.2-5-6.3l0,0c0.4-3.1,3.2-5.3,6.3-5l0,0c3.1,0.3,5.4,3.2,5,6.3l0,0c-0.3,2.9-2.8,5-5.6,5l0,0 C219.3,478.1,219,478.1,218.8,478z" />
                    <path d="M270.3,472c-0.5-3.1,1.6-6,4.7-6.5l0,0c3.1-0.5,6,1.6,6.5,4.7l0,0c0.5,3.1-1.6,6-4.7,6.5l0,0c-0.3,0-0.6,0.1-0.9,0.1l0,0 C273.1,476.8,270.7,474.8,270.3,472z" />
                    <path d="M190.3,472.9c-3-0.8-4.9-3.8-4.1-6.9l0,0c0.8-3,3.8-4.9,6.9-4.1l0,0c3,0.8,4.9,3.8,4.1,6.9l0,0c-0.6,2.6-3,4.3-5.5,4.3 l0,0C191.2,473.1,190.7,473,190.3,472.9z" />
                    <path d="M298,466.5c-0.9-3,0.8-6.2,3.8-7.1l0,0c3-0.9,6.2,0.8,7.1,3.8l0,0c0.9,3-0.8,6.2-3.8,7.1l0,0l0,0l0,0 c-0.5,0.2-1.1,0.2-1.6,0.2l0,0C301,470.5,298.8,468.9,298,466.5z" />
                    <path d="M162.6,463.9L162.6,463.9L162.6,463.9c-2.9-1.2-4.3-4.5-3.1-7.4l0,0c1.2-2.9,4.5-4.3,7.4-3.1l0,0c2.9,1.2,4.3,4.5,3.1,7.4 l0,0c-0.9,2.2-3,3.5-5.3,3.5l0,0C164,464.3,163.3,464.2,162.6,463.9z" />
                    <path d="M324.7,457.2c-1.3-2.8-0.1-6.2,2.8-7.5l0,0c2.8-1.3,6.2-0.1,7.5,2.8l0,0c1.3,2.8,0.1,6.2-2.8,7.5l0,0 c-0.8,0.3-1.6,0.5-2.4,0.5l0,0C327.7,460.5,325.7,459.2,324.7,457.2z" />
                    <path d="M136.4,451.2c-2.7-1.5-3.6-5-2.1-7.7l0,0c1.5-2.7,5-3.6,7.7-2.1l0,0c2.7,1.5,3.6,5,2.1,7.7l0,0c-1.1,1.8-3,2.8-4.9,2.8 l0,0C138.3,452,137.3,451.7,136.4,451.2z" />
                    <path d="M349.9,444.3c-1.7-2.6-0.9-6.1,1.7-7.8l0,0c2.6-1.7,6.1-0.9,7.8,1.8l0,0c1.7,2.6,0.9,6.1-1.7,7.8l0,0 c-0.9,0.6-2,0.9-3,0.9l0,0C352.8,447,351,446,349.9,444.3z" />
                    <path d="M112.3,435.1c-2.5-1.9-3-5.5-1-7.9l0,0c1.9-2.5,5.5-3,7.9-1l0,0c2.5,1.9,2.9,5.5,1,7.9l0,0c-1.1,1.4-2.8,2.2-4.5,2.2l0,0 C114.5,436.3,113.3,435.9,112.3,435.1z" />
                    <path d="M373.2,428.2c-2-2.4-1.7-6,0.7-8l0,0c2.4-2,6-1.7,8,0.7l0,0c2,2.4,1.7,6-0.7,8l0,0l0,0l0,0c-1.1,0.9-2.4,1.3-3.6,1.3l0,0 C375.9,430.2,374.3,429.5,373.2,428.2z" />
                    <path d="M90.5,415.9c-2.2-2.2-2.2-5.8,0-8l0,0c2.2-2.2,5.8-2.2,8,0l0,0c2.2,2.2,2.2,5.8,0,8l0,0c-1.1,1.1-2.5,1.6-4,1.6l0,0 C93,417.6,91.6,417,90.5,415.9z" />
                    <path d="M394.1,409.1c-2.3-2.1-2.5-5.7-0.4-8l0,0c2.1-2.3,5.7-2.5,8-0.4l0,0c2.3,2.1,2.5,5.7,0.4,8l0,0c-1.1,1.2-2.7,1.9-4.2,1.9 l0,0C396.5,410.6,395.1,410.1,394.1,409.1z" />
                    <path d="M71.5,394c-1.9-2.5-1.4-6.1,1.1-7.9l0,0c2.5-1.9,6.1-1.4,7.9,1.1l0,0c1.9,2.5,1.4,6-1.1,7.9l0,0c-1,0.8-2.2,1.1-3.4,1.1 l0,0C74.3,396.2,72.6,395.4,71.5,394z" />
                    <path d="M412.2,387.4c-2.6-1.8-3.2-5.3-1.5-7.9l0,0c1.8-2.6,5.3-3.2,7.9-1.5l0,0c2.6,1.8,3.2,5.3,1.5,7.9l0,0 c-1.1,1.6-2.9,2.5-4.7,2.5l0,0C414.3,388.4,413.2,388.1,412.2,387.4z" />
                    <path d="M55.6,369.7c-1.5-2.7-0.6-6.2,2.2-7.7l0,0c2.7-1.5,6.2-0.6,7.7,2.2l0,0c1.5,2.7,0.6,6.2-2.2,7.7l0,0 c-0.9,0.5-1.8,0.7-2.8,0.7l0,0C58.5,372.5,56.6,371.5,55.6,369.7z" />
                    <path d="M427.2,363.4c-2.8-1.4-3.9-4.8-2.5-7.6l0,0c1.4-2.8,4.8-3.9,7.6-2.5l0,0c2.8,1.4,3.9,4.8,2.5,7.6l0,0c-1,2-3,3.1-5.1,3.1 l0,0C428.9,364,428,363.8,427.2,363.4z" />
                    <path d="M43.1,343.4L43.1,343.4L43.1,343.4c-1.2-2.9,0.3-6.2,3.2-7.3l0,0c2.9-1.1,6.2,0.3,7.3,3.2l0,0c1.1,2.9-0.3,6.2-3.2,7.4 l0,0c-0.7,0.3-1.4,0.4-2.1,0.4l0,0C46.1,347,44,345.7,43.1,343.4z" />
                    <path d="M438.9,337.6c-3-1-4.5-4.2-3.5-7.2l0,0c1-3,4.2-4.5,7.2-3.5l0,0c3,1,4.5,4.2,3.5,7.2l0,0c-0.8,2.4-3,3.8-5.4,3.8l0,0 C440.1,337.9,439.5,337.8,438.9,337.6z" />
                    <path d="M34.3,315.8c-0.7-3,1.1-6.1,4.2-6.8l0,0c3-0.7,6.1,1.1,6.8,4.2l0,0c0.7,3-1.1,6.1-4.2,6.8l0,0c-0.4,0.1-0.9,0.2-1.3,0.2 l0,0C37.3,320.1,34.9,318.3,34.3,315.8z" />
                    <path d="M446.9,310.5c-3.1-0.6-5.1-3.6-4.5-6.6l0,0c0.6-3.1,3.6-5.1,6.6-4.5l0,0c3.1,0.6,5.1,3.6,4.5,6.6l0,0 c-0.5,2.7-2.9,4.6-5.5,4.6l0,0C447.6,310.6,447.2,310.6,446.9,310.5z" />
                    <path d="M29.4,287.1c-0.3-3.1,1.9-5.9,5-6.2l0,0c3.1-0.3,5.9,1.9,6.2,5l0,0c0.3,3.1-1.9,5.9-5,6.2l0,0c-0.2,0-0.4,0-0.6,0l0,0 C32.1,292.2,29.7,290,29.4,287.1z" />
                    <path d="M33.8,263.9c-3.1-0.1-5.6-2.7-5.5-5.8l0,0c0.1-3.1,2.7-5.6,5.8-5.5l0,0c3.1,0.1,5.6,2.7,5.5,5.8l0,0 c-0.1,3.1-2.6,5.5-5.7,5.5l0,0C33.9,263.9,33.9,263.9,33.8,263.9z" />
                    <path d="M444.4,238.1c-0.4-3.1,1.8-5.9,4.9-6.4l0,0c3.1-0.4,5.9,1.8,6.3,4.9l0,0c0.4,3.1-1.8,5.9-4.9,6.3l0,0c-0.3,0-0.5,0-0.7,0 l0,0C447.3,243,444.8,240.9,444.4,238.1z" />
                    <path d="M35.8,235.7c-3.1-0.5-5.2-3.4-4.7-6.5l0,0c0.5-3.1,3.4-5.2,6.5-4.7l0,0c3.1,0.5,5.2,3.4,4.7,6.5l0,0 c-0.5,2.8-2.9,4.7-5.6,4.7l0,0C36.4,235.8,36.1,235.8,35.8,235.7z" />
                    <path d="M439,211.1L439,211.1c-0.8-3,1-6.1,4-7l0,0c3-0.8,6.1,1,7,4l0,0c0.8,3-1,6.1-4,7l0,0c-0.5,0.1-1,0.2-1.5,0.2l0,0 C442,215.3,439.7,213.6,439,211.1z" />
                    <path d="M41.6,208c-3-0.9-4.7-4.1-3.7-7.1l0,0c0.9-3,4.1-4.7,7.1-3.7l0,0c3,0.9,4.6,4.1,3.7,7.1l0,0c-0.8,2.4-3,4-5.4,4l0,0 C42.7,208.3,42.2,208.2,41.6,208z" />
                    <path d="M430,185.1L430,185.1c-1.2-2.9,0.1-6.2,3-7.4l0,0c2.9-1.2,6.2,0.1,7.4,3l0,0c0,0,0,0,0,0l0,0c1.2,2.9-0.1,6.2-3,7.4l0,0 c-0.7,0.3-1.5,0.5-2.2,0.5l0,0C433,188.6,430.9,187.3,430,185.1z" />
                    <path d="M51.1,181.4c-2.8-1.3-4-4.7-2.7-7.5l0,0c1.3-2.8,4.7-4.1,7.5-2.7l0,0c2.8,1.3,4,4.7,2.7,7.5l0,0c-1,2.1-3,3.3-5.1,3.3l0,0 C52.7,181.9,51.9,181.7,51.1,181.4z" />
                    <path d="M417.5,160.6L417.5,160.6c-1.6-2.7-0.7-6.2,2-7.8l0,0c2.7-1.6,6.2-0.7,7.8,2l0,0c1.6,2.7,0.7,6.2-2,7.8l0,0 c-0.9,0.5-1.9,0.8-2.9,0.8l0,0C420.4,163.4,418.6,162.4,417.5,160.6z" />
                    <path d="M64.1,156.2c-2.6-1.7-3.4-5.2-1.7-7.8l0,0l0,0l0,0c1.7-2.6,5.2-3.4,7.8-1.7l0,0c2.6,1.7,3.4,5.2,1.7,7.8l0,0 c-1.1,1.7-2.9,2.6-4.8,2.6l0,0C66.1,157.1,65.1,156.8,64.1,156.2z" />
                    <path d="M401.8,138c-2-2.4-1.5-6,0.9-8l0,0c2.4-2,6-1.5,8,0.9l0,0c2,2.4,1.5,6-0.9,8l0,0c-1,0.8-2.3,1.2-3.5,1.2l0,0 C404.6,140.2,402.9,139.4,401.8,138z" />
                    <path d="M80.4,133.1c-2.4-2-2.6-5.6-0.6-8l0,0c2-2.4,5.6-2.7,8-0.6l0,0c2.4,2,2.7,5.6,0.6,8l0,0c-1.1,1.3-2.7,2-4.3,2l0,0 C82.8,134.5,81.5,134,80.4,133.1z" />
                    <path d="M447.1,274.7c-2.3-2.2-2.3-5.7-0.2-8l0,0c2.2-2.3,5.7-2.3,8-0.2l0,0c2.3,2.2,2.3,5.7,0.2,8l0,0c-1.1,1.2-2.6,1.7-4.1,1.7 l0,0C449.6,276.2,448.2,275.7,447.1,274.7z" />
                </g>
                <Link to="bookmarks"><motion.text id="0" animate={isHovered[0].hovered ? { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } } : {}} className={styles.linkText} x="10" y="90" fontSize="18px" fill="pink">bookmarks</motion.text> </Link>
                <Link to="necklaces"> <motion.text id="1" animate={isHovered[1].hovered ? { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } } : {}} className={styles.linkText} x="100" y="30" fontSize="18px" fill="pink">necklaces</motion.text> </Link>
                <Link to="bracelets"> <motion.text id="2" animate={isHovered[2].hovered ? { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } } : {}} className={styles.linkText} x="200" y="0" fontSize="18px" fill="pink">bracelets</motion.text></Link>
                <Link to="earrings"> <motion.text id="3" animate={isHovered[3].hovered ? { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } } : {}} className={styles.linkText} x="300" y="30" fontSize="18px" fill="pink">earrings</motion.text></Link>
                <Link to="keychains"> <motion.text id="4" animate={isHovered[4].hovered ? { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } } : {}} className={styles.linkText} x="400" y="90" fontSize="18px" fill="pink">keychains</motion.text></Link>
                <g>

                    {/* first set of three moons */}
                    <motion.path whileHover={{ scale: 1.1, transition: { duration: 1.2 } }}
                        custom={3} id="moonThree" animate="visible" initial="hidden" variants={moonPhases} onMouseEnter={(e) => handleChange(e)} onMouseLeave={(e) => handleChange(e)} d="M274.4,62.7c-0.5,3.9-2,7.4-4.2,10.4c-4.1,5.5-10.6,9.4-17.3,10.9c-6.3,1.4-13,0.6-18.9-1.8c-11-4.6-17.8-15.6-16.9-27.5 c0.4-5.6,2.4-11.2,5.9-15.6c0.8-0.9,1.5-1.9,2.3-2.8c7.2-7.2,18.3-10.5,28.2-7.9c2.8,0.7,5.5,2,7.9,3.4 c6.1,3.5,10.1,8.6,12.1,15.4C275,52.3,275,57.5,274.4,62.7z" />

                    <motion.path
                        custom={2} id="moonTwo" whileHover={{ scale: 1.1, transition: { duration: 1.2 } }} onMouseEnter={(e) => handleChange(e)} onMouseLeave={(e) => handleChange(e)} animate="visible" initial="hidden" variants={moonPhases} d="M151.4,72.5c-2.4-2-5.1-3.5-8-4.7c-0.9-0.4-1.1-1-0.8-1.9c0.1-0.4,0.3-0.8,0.5-1.2c5.1-12.3,20.6-19.5,33.4-16.3 c3.4,0.9,7.3,2.5,10.1,4.7c5.1,3.9,8.8,9.5,10.2,15.8c0.9,4,1.2,8.8,0.5,12.8c-0.4,2.4-1.2,4.8-2.3,6.9c-1.8,3.5-4.5,7.3-7.4,9.9 c-3,2.6-6.5,4.4-10.3,5.3c-5.3,1.3-10.5,1.4-15.8-0.4c-1-0.3-1.2-0.7-0.7-1.6c1.3-2.8,2-5.7,1.8-8.7 C161.9,85,157.6,77.6,151.4,72.5z" />

                    <motion.path id="moonOne" onMouseEnter={(e) => handleChange(e)} onMouseLeave={(e) => handleChange(e)}
                        custom={1} whileHover={{ scale: 1.1, transition: { duration: 1.2 } }} animate="visible" initial="hidden" variants={moonPhases} d="M121.9,126.6c-0.8-9.5-7.9-17.3-17-19.8c-2.4-0.6-5-0.9-7.4-0.9c-2.8,0.1-5.8,0.6-8.5,1.6c-0.2,0.1-0.7,0-0.8-0.2 c-0.1-0.2-0.1-0.6,0.1-0.8c0.1-0.3,0.4-0.4,0.6-0.7c2.2-2.5,4.9-4.5,8.2-6.6c10.3-6.5,24.1-5.8,33,2.7c4.2,4,7.5,9.1,8.7,14.8 c0.6,2.9,0.7,5.9,0.4,8.8c-0.6,5.4-2.7,10.6-6.4,14.8c-1.3,1.5-2.8,2.9-4.5,4.1c-2.4,1.7-5,3.1-7.8,4c-3.7,1.2-6.9,2-10.3,2.1 c-0.3,0-0.6,0.1-0.9,0.1c-0.3-0.1-0.6-0.3-0.7-0.5c-0.1-0.2,0.1-0.6,0.3-0.7C116.5,145,122.6,135.5,121.9,126.6z" />

                    {/* stars */}
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M214.6,122.6c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.7,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.4,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.3,0.1,0.9,0.5,0.9,1 C214.7,122.4,214.6,122.5,214.6,122.6z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M103.4,188.4c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.7,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.4,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.4,0.1,0.9,0.5,0.9,1 C103.5,188.2,103.5,188.3,103.4,188.4z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M293.8,116.3c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.7,0.6c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.3,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.4,0.1,0.9,0.5,0.9,1 C294,116.1,293.9,116.2,293.8,116.3z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M401.1,192.8c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.7,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.4,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.4-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.4,0.1,0.9,0.5,0.9,1 C401.2,192.6,401.2,192.7,401.1,192.8z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M412.4,247.2c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.7,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.3,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.3,0.1,0.9,0.5,0.9,1 C412.6,247,412.5,247.1,412.4,247.2z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M304.5,410.4c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.7,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.4,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.3,0.1,0.9,0.5,0.9,1 C304.6,410.2,304.6,410.3,304.5,410.4z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M200.5,427.4c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.8,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.5-0.4,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.4,0.1,0.9,0.5,0.9,1 C200.7,427.2,200.6,427.3,200.5,427.4z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M81.8,276.1c-0.2,0.2-0.5,0.3-0.7,0.4c-0.6,0.2-1.2,0.4-1.8,0.7c-1,0.4-1.9,0.8-2.8,1.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.4,1.2-0.8,2.5-1.2,3.7c-0.2,0.6-0.4,1.2-0.6,1.9c-0.2,0.4-0.4,1-0.7,1.3c-0.6,0.5-1.1-0.3-1.2-0.8c-0.2-0.5-0.3-1.1-0.4-1.6 c-0.3-1.2-0.6-2.3-0.9-3.5c-0.2-0.8-0.7-1.1-1.3-1.2c-1.5-0.4-3-0.8-4.5-1.2c-0.9-0.3-1.2-1.3-0.2-1.7c1.6-0.7,3.2-1.3,4.8-1.8 c0.6-0.2,0.8-0.4,1-1c0.3-1.2,0.6-2.4,0.9-3.5c0.3-0.9,0.4-1.9,0.9-2.8c0.5-0.8,1.1-0.7,1.5,0.1c0.3,0.6,0.4,1.2,0.5,1.8 c0.3,1.4,0.6,2.7,0.9,4.1c0.1,0.6,0.4,0.7,1,0.8c1.2,0.2,2.4,0.5,3.7,0.8c0.5,0.1,1,0.2,1.5,0.4c0.3,0.1,0.9,0.5,0.9,1 C81.9,275.9,81.8,276,81.8,276.1z" />

                    {/* second set of three moons */}

                    <motion.path whileHover={{ scale: 1.1, transition: { duration: 1.2 } }}
                        custom={4} id="moonFour" onMouseEnter={(e) => handleChange(e)} onMouseLeave={(e) => handleChange(e)} animate="visible" initial="hidden" variants={moonPhases} d="M330.8,93.1c-0.2,3.1,0.6,6,1.8,8.7c0.4,1,0.3,1.3-0.7,1.6c-5.2,1.7-10.5,1.7-15.8,0.4c-3.8-1-7.4-2.7-10.3-5.3 c-2.9-2.6-5.7-6.4-7.4-9.9c-1.1-2.2-1.9-4.5-2.3-6.9c-0.7-4-0.4-8.9,0.5-12.8c1.4-6.3,5.1-11.9,10.2-15.8 c2.8-2.1,6.7-3.8,10.1-4.7c12.8-3.2,28.3,4,33.4,16.3c0.2,0.4,0.3,0.8,0.5,1.2c0.3,0.9,0.1,1.5-0.8,1.9c-2.9,1.2-5.6,2.7-8,4.7 C335.6,77.6,331.3,85,330.8,93.1z" />
                    <motion.path whileHover={{ scale: 1.1, transition: { duration: 1.2 } }}
                        custom={5} id="moonFive" onMouseEnter={(e) => handleChange(e)} onMouseLeave={(e) => handleChange(e)} animate="visible" initial="hidden" variants={moonPhases} d="M384.3,149.5c0.2,0.1,0.4,0.5,0.3,0.7c-0.1,0.2-0.4,0.4-0.7,0.5c-0.3,0.1-0.6-0.1-0.9-0.1c-3.3-0.1-6.6-0.9-10.3-2.1 c-2.8-0.9-5.4-2.3-7.8-4c-1.6-1.2-3.1-2.6-4.5-4.1c-3.7-4.2-5.8-9.4-6.4-14.8c-0.3-2.9-0.2-5.9,0.4-8.8c1.2-5.7,4.5-10.8,8.7-14.8 c8.9-8.5,22.7-9.2,33-2.7c3.3,2.1,5.9,4.1,8.2,6.6c0.2,0.2,0.5,0.4,0.6,0.7c0.1,0.2,0.2,0.6,0.1,0.8c-0.1,0.2-0.5,0.3-0.8,0.2 c-2.6-1-5.7-1.5-8.5-1.6c-2.5-0.1-5.1,0.2-7.4,0.9c-9.1,2.4-16.2,10.2-17,19.8C370.7,135.5,376.8,145,384.3,149.5z" />

                    {/* stars */}
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M359.5,185.5c-0.3,0.3-0.7,0.4-1,0.5c-0.8,0.3-1.6,0.6-2.4,0.9c-1.3,0.5-2.6,1-3.9,1.6c-0.5,0.2-1,0.7-1.2,1.3 c-0.6,1.7-1.1,3.4-1.7,5.1c-0.3,0.9-0.6,1.7-0.9,2.6c-0.2,0.6-0.5,1.4-1,1.9c-0.8,0.7-1.5-0.4-1.7-1.1c-0.3-0.7-0.4-1.5-0.6-2.2 c-0.4-1.6-0.8-3.2-1.2-4.9c-0.2-1.1-0.9-1.5-1.9-1.7c-2.1-0.5-4.2-1.1-6.2-1.7c-1.3-0.4-1.6-1.8-0.2-2.4c2.2-0.9,4.4-1.8,6.6-2.6 c0.8-0.3,1.1-0.6,1.3-1.4c0.4-1.6,0.8-3.3,1.2-4.9c0.4-1.3,0.6-2.7,1.2-3.8c0.6-1.1,1.5-0.9,2,0.1c0.4,0.8,0.5,1.7,0.7,2.5 c0.5,1.9,0.9,3.8,1.3,5.7c0.2,0.8,0.5,1,1.3,1.2c1.7,0.3,3.4,0.7,5,1c0.7,0.2,1.4,0.3,2.1,0.6c0.5,0.2,1.3,0.7,1.2,1.3 C359.7,185.2,359.6,185.4,359.5,185.5z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M237.4,388.2c-0.3,0.3-0.7,0.4-1,0.5c-0.8,0.3-1.6,0.6-2.4,0.9c-1.3,0.5-2.6,1-3.9,1.6c-0.5,0.2-1,0.7-1.2,1.3 c-0.6,1.7-1.1,3.4-1.7,5.1c-0.3,0.9-0.6,1.7-0.9,2.6c-0.2,0.6-0.5,1.4-1,1.9c-0.8,0.7-1.5-0.4-1.7-1.1c-0.3-0.7-0.4-1.5-0.6-2.2 c-0.4-1.6-0.8-3.2-1.2-4.9c-0.2-1.1-0.9-1.5-1.8-1.7c-2.1-0.5-4.2-1.1-6.2-1.7c-1.3-0.4-1.6-1.8-0.2-2.4c2.2-0.9,4.4-1.8,6.6-2.6 c0.8-0.3,1.1-0.6,1.3-1.4c0.4-1.6,0.8-3.3,1.2-4.9c0.4-1.3,0.6-2.7,1.2-3.8c0.6-1.1,1.5-0.9,2,0.1c0.4,0.8,0.5,1.7,0.7,2.5 c0.5,1.9,0.9,3.8,1.3,5.7c0.2,0.8,0.5,1,1.3,1.2c1.7,0.3,3.4,0.7,5.1,1.1c0.7,0.2,1.4,0.3,2.1,0.6c0.5,0.2,1.3,0.7,1.2,1.3 C237.6,387.9,237.6,388.1,237.4,388.2z" />
                    <motion.path animate="visible"
                        variants={stars} style={{ fill: "#fff8b6" }} d="M157.2,215.1c-0.3,0.3-0.7,0.4-1,0.5c-0.8,0.3-1.6,0.6-2.4,0.9c-1.3,0.5-2.6,1-3.9,1.6c-0.5,0.2-1,0.7-1.2,1.3 c-0.6,1.7-1.1,3.4-1.7,5.1c-0.3,0.9-0.6,1.7-0.9,2.6c-0.2,0.6-0.5,1.4-1,1.9c-0.8,0.7-1.5-0.4-1.7-1.1c-0.3-0.7-0.4-1.5-0.6-2.2 c-0.4-1.6-0.8-3.2-1.2-4.9c-0.2-1.1-0.9-1.5-1.9-1.7c-2.1-0.5-4.2-1.1-6.2-1.7c-1.3-0.4-1.6-1.8-0.2-2.4c2.2-0.9,4.4-1.8,6.6-2.6 c0.8-0.3,1.1-0.6,1.3-1.4c0.4-1.6,0.8-3.3,1.2-4.9c0.4-1.3,0.6-2.7,1.2-3.8c0.6-1.1,1.5-0.9,2,0.1c0.4,0.8,0.5,1.7,0.7,2.5 c0.5,1.9,0.9,3.8,1.3,5.7c0.2,0.8,0.5,1,1.3,1.2c1.7,0.3,3.4,0.7,5.1,1c0.7,0.2,1.4,0.3,2.1,0.6c0.5,0.2,1.3,0.7,1.2,1.3 C157.4,214.8,157.3,215,157.2,215.1z" />

                    <g>
                        <path d="M406.5,273.1c-1-0.6-3.4-0.2-6.2,1.1c-4.4,2-8.4,4.2-18.4,10.4c-13.2,8.1-16.6,10.8-22.5,17.6c-5,5.7-6.7,8.8-11.7,20.8 c-6.2,14.8-6.4,15.2-8.1,17c-1.6,1.7-3.7,4.4-6.1,7.8c-1,1.5-1.9,2.6-1.9,2.6c-0.4,0,3-12.7,5.5-20.9c2.3-7.3,4.5-15.2,6.2-22 c1.4-5.4,1.7-6.2,5.8-14.9c4.3-9,6.1-14.6,7.6-22.6c1-5.8,1.8-16.2,2-26c0-3.1,0.1-6.7,0.1-8c0-1.3,0-3.7-0.2-5.3 c-0.2-2.6-0.3-3-0.9-3.4c-0.9-0.7-1.9-0.1-3.3,2c-2.8,4.1-8.2,15.2-11,22.5c-5.1,13.5-5.8,25.1-2.3,42l1.3,6.4l-1.2,4.9 c-1.1,4.7-5.5,20.5-6.4,23.2l-0.5,1.3l-0.8-8.8c-0.5-5.9-0.8-10.5-0.8-13.9c0-7.9-0.6-13.6-1.9-19.3c-0.6-2.6-1.5-5.9-2-7.5 c-0.8-2.9-3.9-10.4-5.5-13.7c-1.4-2.8-4.8-8-6.6-10c-1.6-1.8-3.9-3.2-4.9-3.2c-0.8,0.1-1.7,1.1-1.8,2.1c0,0.4-0.1,0.9-0.2,1.1 c0,0.2,0.6,4,1.5,8.4c2.2,11.4,2.7,15,3.3,21.8c0.6,7.1,1.3,11.2,2.6,15.4c2.4,7.4,5.2,12.2,11.8,20l2.7,3.2l0.3,3.6 c0.4,5.1,0.2,8.4-1.1,13.3c-2.3,9-4.5,20.9-5.4,30.1c-0.3,2.9-0.5,5.3-0.6,5.5c-0.1,0.4-3.3-6.1-4.5-9 c-2.6-6.6-3.4-11.6-3.5-22.2c-0.1-9.7-0.6-13.7-3.7-26c-0.7-2.9-1.8-7.8-2.5-11c-1.7-8.1-2.4-9.7-4.2-9.6 c-1.1,0.1-2.1,1.6-3.2,4.6c-2.7,7.2-3.4,15.6-2,23.4c0.6,3.1,3,13.6,3.8,16.4c1.4,4.6,6.1,13.1,10.6,19.1c0.4,0.5,1.1,2,1.5,3.3 c1.2,3.5,3.7,8.8,5.7,12l1.7,2.8l-0.1,3.2c-0.3,10,1.6,23.7,3.7,27.3c0.5,0.8,1.5,1,1.9,0.4c0.2-0.3,0.1-0.9-0.5-2.6 c-1.1-3.3-1.7-6.3-2.2-11.9c-0.4-5.1-0.4-5.2,0.2-6.9c0.9-2.5,3.4-6.1,5.5-7.9c1-0.9,4.7-3.4,8.4-5.6c7.2-4.4,10-6.5,13.9-10.4 c4.1-4.1,6.9-8.4,9.2-14.2c3.1-7.9,5-15.6,4.2-17.3c-0.4-0.8-1.5-1-2.3-0.4c-0.3,0.2-3.7,3.3-7.5,6.7c-3.8,3.5-7.7,7.1-8.7,8 c-7.9,7.3-12,12.4-15.7,19.7c-1.4,2.7-5.9,13.9-5.9,14.4c0,0.4-1.7,3.3-1.9,3.1c-0.2-0.2,0.2-7.4,0.7-12.9 c0.5-6,1.9-15.3,2.4-16.9c0.4-1.3,3-5.4,5.8-9.3c6.4-8.7,8.5-10.4,21.1-16.7c9.6-4.8,11.7-6.1,18.9-11.9 c6.5-5.2,10.7-9.2,15-14.3c6.1-7.2,8.8-11.6,12.8-20.3C407,277.3,407.9,274,406.5,273.1z" />
                        <path d="M316.9,191.7c-2.6-1.4-5.4-2.1-8.3-2.7c-10-1.9-19.9-0.7-29.6,2c-1.1,0.3-2.2,1-3.5,0.4c0.2-0.4,0.2-0.6,0.3-0.7 c1-0.8,2.1-1.6,3.1-2.4c11.5-8.6,20.3-19.4,26.4-32.4c1-2.1,1.9-4.3,2.2-6.7c0.2-2.5-1.1-3.6-3.5-2.9c-2.5,0.8-4.9,1.9-7.4,2.7 c-16.9,5.8-30.4,16.2-41.3,30.2c-0.5,0.7-0.8,1.6-2,1.6c0-0.4-0.2-0.9-0.1-1.3c2.8-14.4,2.3-28.9,0.7-43.4 c-0.7-6-1.9-11.9-4.6-17.4c-1.4-2.9-3.3-3.1-5.4-0.6c-1.8,2.2-3.3,4.5-4.9,6.8c-10.5,15.2-13.9,32-11.8,50.2 c0.6,4.9,1.9,9.7,3.1,15c-2.2-1.3-3.1-3-4.2-4.4c-7.1-9.2-15.3-17.3-24.5-24.6c-6.5-5.2-13.7-9-21.4-11.9c-1.2-0.5-2.5-0.9-3.8-1 c-1.8,0-2.8,0.8-2.8,2.6c0,0.9,0.2,1.8,0.4,2.6c9.2,31.6,30.9,49.1,62.5,55.5c3.6,0.7,3.7,0.6,3.4,4.4 c-0.9,10.2-1.7,20.5-2.2,30.7c-1,20,0.3,39.9,1.7,59.8c0.5,6.5,1.4,13,2.2,20c-1.7-1.4-2-3.1-2.5-4.5 c-8.3-20.7-16.5-41.4-24.8-62.1c-6.8-17.1-15.3-33.3-24.9-48.9c-0.9-1.5-2-2.9-3.1-4.3c-0.7-0.8-1.6-1.3-2.7-0.7 c-0.9,0.5-1.1,1.4-1,2.2c0.1,1.2,0.3,2.3,0.6,3.5c2.7,11.9,5.6,23.7,9.3,35.3c6.8,21.6,13.8,43,23.8,63.3 c6.8,13.9,16,25.9,27.5,36.2c1.4,1.3,2.1,2.6,2.5,4.4c1.6,7.3,3.4,14.6,5.2,21.8c3.4,13.8,7.7,27.4,13.5,40.4 c0.5,1.2,1,3.4,2.8,2.6c2-0.8,0.5-2.6,0-3.7c-4-9.2-7.1-18.6-9.9-28.2c-0.7-2.3-0.8-4.5-0.2-6.9c1-3.4,1.8-6.8,2.6-10.2 c4-16.9,6.6-34,9.6-51c2.4-13.7,5.2-27.4,6.5-41.3c1.1-11.8,2.1-23.7,3.1-35.5c0.3-3.2,0.5-6.4,0.7-9.7c0.1-1.2-0.2-2.5-1.5-2.9 c-1.4-0.5-2.2,0.5-2.8,1.6c-0.5,0.9-1,1.8-1.5,2.7c-3.7,7.8-7.1,15.8-9.7,24.1c-8.1,26.1-11.9,52.9-13.5,80 c-0.3,5.5-0.5,10.9-0.8,16.4c-10.1-45.2-11.9-90.7-6.8-136.8c2,0.4,3.5,0.8,5.1,1.1c11.1,1.9,22.2,1,33.2-1 c12.8-2.3,24.2-7.9,35.3-14.3C320.3,195.7,320.1,193.4,316.9,191.7z" />
                        <path d="M195,331.9c-0.4-2-1.7-7.1-4.5-4.1c-1.9,2.1-2.8,5.2-3.7,7.7c-1.3,3.6-2.5,7.2-3.9,10.7c-4.8,11.7-5.9,15.6-7.3,25.2 c-0.8,5.6-1.7,9.6-2.8,13c0,0.2-2.2,6.3-3.4,9.7c-0.5-3.1-1.1-7-1.5-8.7c-0.8-4-5.6-24.5-6.2-26.8c-0.5-1.8-0.5-1.9-0.1-4.2 c1-5.2,2.6-10.9,3.7-12.7c0.3-0.6,2.6-3,5.1-5.4c6-5.8,9.4-10.5,12.5-16.9c2.6-5.4,3.2-9.9,2.8-18.2c-0.4-8.1-0.7-9.8-1.7-10.9 c-0.7-0.8-1.8-0.7-2.8,0.2c-0.5,0.4-2,2.6-3.4,4.8c-2.5,4.2-5.2,8.1-9.1,13.7c-4.9,6.9-7.8,15.1-7.7,21.6c0,2.3,0.7,7,1.4,9.8 c0.3,1.1,0.3,1.5,0,2.3c-0.2,0.6-0.8,2.7-1.3,4.9c-0.6,2.1-1,3.9-1.1,3.9c-0.1,0.1-0.8-2.9-1.8-6.6c-0.9-3.7-2.4-9.2-3.2-12.3 l-1.6-5.7l0.1-9c0.1-9.4,0.3-12.6,1-14.6c0.2-0.7,1.3-3.5,2.5-6.3c3.8-9,4.9-13.4,5.1-19.3c0.1-3.6,0-4.6-0.9-10.4 c-0.5-3.5-1.1-7.6-1.2-9.1c-0.4-3.4-0.7-4.5-1.4-5.3c-1.5-1.5-2.7-0.3-5,5c-4.3,9.9-5.6,14.3-6.2,21.3c-0.3,3.7,0,7.6,1.1,11.6 c0.4,1.7,1.4,5.2,2.1,7.8c0.7,2.6,1.3,4.9,1.4,5c0.1,0.1,0,1.1-0.1,2c-0.1,1-0.3,4.8-0.4,8.6l-0.1,6.8l-0.9-2.3 c-0.5-1.3-1.7-4.2-2.7-6.5c-1-2.3-2.2-5.6-2.8-7.2c-1.1-3-5.5-17.3-9.3-30.3c-2.7-9.2-4.1-13-6.4-17.6c-4-8-8.3-12.7-14.1-15.6 c-0.8-0.4-3.3-1.4-5.4-2.1c-2.5-0.9-4.9-1.9-7.2-3.1c-6-3.2-7-3.7-8.2-3.7c-0.7,0-1.2,0.2-1.5,0.5c-1.4,1.5-0.4,6.7,3.2,17.6 c4.7,13.9,7.7,19.1,16.2,28.2c4.3,4.6,5.8,6.4,10.1,12c2.4,3.1,5,6.6,5.9,7.6c2.2,2.7,6.1,6.3,8.4,7.9c1.8,1.3,6.7,3.8,7.4,3.8 c0.4,0,0.6,0.3,2.5,5c3.5,8.6,5.7,15.2,8.4,25.7c2.8,11.1,6,23.8,5.9,23.9c-0.1,0.1-5.1-6.1-7.8-9.7c-2.8-3.7-7.5-10.8-9.5-14.3 c-9.7-16.4-16.9-25.1-31.4-37.7c-7.1-6.2-9.3-7.8-10.8-7.8c-1.1,0-1.4,0.2-1.8,1c-0.4,0.8-0.4,1.6,0.6,6.2 c2.8,13,5.9,21.3,10.2,27.3c2.6,3.6,7.1,8,10.4,10.1c3.4,2.2,11,6,15.5,7.8c1.9,0.7,5.4,2.2,7.9,3.2l4.4,1.8l1.8,2.4 c2.5,3.4,5,6.5,8.1,10.1c1.4,1.7,2.8,3.4,3,3.8c0.3,0.4,0.9,2.7,1.5,5.1c1.6,6.6,3.4,15.2,3.4,15.7c0,0.3-0.5,0-1.6-1.2 c-2.4-2.5-3.5-4-6.8-9.3c-5.7-9-7.5-11.3-10.9-14.1c-4.8-3.8-12-6.7-16.9-6.6c-0.6,0-2.5-0.2-4.1-0.5c-1.6-0.3-3.7-0.5-4.5-0.5 c-1.3,0-1.6,0.1-2,0.7c-0.3,0.4-0.5,0.9-0.5,1.2c0,1.8,3.6,6.1,8,9.6c6.3,5,10.9,7.3,19.9,10.2c3.5,1.1,7.5,2.5,8.7,3.1 c2.2,1,2.4,1.2,3.8,3.2c0.9,1.1,2.7,3.3,4,4.7c3.4,3.5,3.5,3.7,3.9,6.4c0.2,1.3,0.7,4.9,1.2,8.1c0.5,3.2,1,7.2,1.2,9.1 c0.3,2.6,0.5,3.4,0.8,3.8c0.5,0.5,1.1,0.4,1.5-0.3c0.3-0.5-0.4-6.9-1.5-13.4c-0.2-1.2-0.5-3.1-0.8-5c1.5-4.3,4.5-13.1,4.8-13.4 c3.6-3.6,7.6-7,10.7-11.1c2.6-3.4,3.9-7.7,5.5-11.7C194.7,352.9,197.1,342.4,195,331.9z" />
                    </g>
                </g>
            </g>
        </svg>
    )
}
export default MoonPhases


