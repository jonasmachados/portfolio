import React from 'react';
import { motion } from 'framer-motion';
import '../styles/svg.css';

const svgVariants = {
    hidden: { rotate: 0, opacity: 0 },
    visible: {
        rotate: 360,
        opacity: 1,
        transition: {
            opacity: {
                delay: 2,
                duration: 1,
            },
        },
    },

};

const lineCodeVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        animate: {
            scale: 1.2,
        },
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "linear",
        }
    },
}


const SvgDev = () => {
    return (
        <div className="container-svg">

            <motion.div
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.7} >

                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="dev-svg "
                    viewBox="0 0 400 300"
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <defs>
                        <linearGradient
                            id="linear-gradient"
                            x1="311.03"
                            x2="332.41"
                            y1="208.3"
                            y2="188.56"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#103F65"></stop>
                            <stop offset="1" stopColor="#502019"></stop>
                        </linearGradient>
                        <linearGradient
                            id="linear-gradient-2"
                            x1="137.47"
                            x2="163.23"
                            y1="235.44"
                            y2="211.66"
                            xlinkHref="#linear-gradient"
                        ></linearGradient>
                        <linearGradient
                            id="linear-gradient-3"
                            x1="44.8"
                            x2="68.37"
                            y1="187.6"
                            y2="168.6"
                            xlinkHref="#linear-gradient"
                        ></linearGradient>
                        <linearGradient
                            id="linear-gradient-4"
                            x1="189.93"
                            x2="218.27"
                            y1="210.01"
                            y2="172.22"
                            xlinkHref="#linear-gradient"
                        ></linearGradient>
                    </defs>
                    <path
                        fill="#103F65"
                        d="M194.51 291.25L22 189.3c-5.49-3.08-10.2-8.15-4.85-11.46l173.14-99.78c2.6-1.61
                         6.54-2.66 9.18-1.13L380.54 182c5.49 
                         3.19 6.48 12.1 1 15.29l-164.29 93.8a22.94 22.94
                          0 01-22.74.16z"
                    ></path>
                    <path
                        fill="url(#linear-gradient)"
                        d="M322.29 182.6c-13.16 7.67-22.56 12.83-42.8
                         24.38 15.32 9.31 28.71 
                         16.14 30.43 
                         17.16l44-25c-3.57-1.83-15.25-8.44-31.63-16.54z"
                        opacity="0.32"
                    ></path>
                    <path
                        fill="url(#linear-gradient-2)"
                        d="M151 204.47c-15.86 9.25-27.19 15.46-51.58 29.38
                         18.46 11.22 34.6 19.46
                          36.68 20.68l53-30.09c-4.25-2.24-18.32-10.21-38.1-19.97z"
                        opacity="0.32"
                    ></path>
                    <path
                        fill="url(#linear-gradient-3)"
                        d="M54.27 193.95c8.23-5.48
                         16.6-10.76 24.92-16.09l-11.82-8.63-45.78 19.1c5.53
                          2.9 
                          13 8.33 20.86 13.86 3.91-2.79 7.82-5.58 11.82-8.24z"
                        opacity="0.32"
                    ></path>
                    <path
                        fill="#754c24"
                        d="M83.68 147.26a2.1 2.1 0 00-.37-.78 4.67 4.67 
                        0 
                        00-1.14-1c-5.81-3.93-13.86-5-20-1.17-1.4.88-3.49
                         2.87-2.66 4.75.48 1.09 1.94 1.73 3 2.17A44.57 44.57 
                         0 0073 154c1.3.22 2.62.44 3.93.56a5.43 5.43 0 
                            004.79-2.05c.91-1.19 2.37-3.51 1.96-5.25z"
                    ></path>
                    <path
                        fill="#C8D5DF"
                        d="M59.34 148.2s5.3 4.8
                         14.46 4.1 9.87-5 9.87-5-2.37 
                         30.36-3.62 30.88-5.93 2.78-8.19
                          2.95-9.4-2.69-9.58-3.48-2.94-29.45-2.94-29.45z"
                    ></path>
                    <path
                        fill="#007f68"
                        d="M61 104c-.28-.57-1.15-.07-.86.5 
                        6.27 12.64 7.49
                         26.87 8.62 40.69.05.63 1.05.64 
                         1 0-1.13-14.05-2.39-28.43-8.76-41.19z"
                    ></path>
                    <path
                        fill="#007f68"
                        d="M60.21 104.08s1.75 6.56-.06 
                        9.84-3.3 3.93-1.14 8 7.94 4.62
                         8.32 7.74-2.76-20.01-7.12-25.58zM80.26
                          115.92a82.45 82.45 0 00-8 32.26c0 
                          .78 1.19.77 1.22 0a81 81 0 
                          017.79-31.66c.38-.69-.67-1.31-1.01-.6z"
                    ></path>
                    <path
                        fill="#007f68"
                        d="M81.12 119.11c0-.66-.15-2-.08-3.11l-.7.44c-2.38 
                        5.79-5.94 19.39-7 23.55 1.45-3.12 7.38-3.55 
                        9.12-8a8.19 8.19 0 
                        00.1-5.91 21.82 21.82 0 01-1.44-6.97z"
                    ></path>
                    <path
                        fill="url(#linear-gradient-4)"
                        d="M214.59 232.12c16.12-8.68 54.27-27.87
                         70.27-36.75l-92.08-57.61-66.44 45.11c16.86 8.82 
                         64.92 34.82 88.25 49.25z"
                        opacity="0.32"
                    ></path>
                    <path
                        fill="#010509"
                        d="M136.88 135c.07 21.33.19 40.53.19 40.53s.45 1.74
                         3.66.32v-42.13c-1.28.43-2.56.84-3.85
                          1.28zM226.07 186.84c.07 21.33.19
                           40.53.19 40.53s.45 1.74 
                           3.66.32V185.6c-1.28.4-2.56.84-3.85 1.24zM281
                            154.52c.07 21.33.19 40.53.19 40.53s.45 1.74
                             3.66.32v-42.09c-1.27.42-2.55.84-3.85 1.24z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M136.13 133.72L136.13 137.35 228.17 
                        190.6 284.77 153.43 284.86 149.37"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M136.13 133.72L136.13 137.35 228.17 190.6 284.77
                         153.43 284.86 149.37"
                        opacity="0.76"
                    ></path>
                    <path
                        fill="#010509"
                        d="M136.13 133.72L195.35 99.94 284.86 149.37 227.85 
                        186.96 136.13 133.72z"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M218.31 116.14l-12.47 6a2.87 2.87 0 00-.2
                         5.07l29.57 17.25a2.87 2.87 0 003.86-.93l7.18-11.17"
                    ></path>
                    <path
                        fill="#c2def5"
                        d="M281 84.17L179.13 25.5a3.31 3.31 0 00-5 
                        2.87V90.7a2.56 2.56 0 001.28 2.21l108.39 62.57a1.23
                         1.23 0 001.85-1.07V92.33a9.42 9.42 0 00-4.65-8.16z"
                        className="target-color"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M180.9 31l96.46 55.5a6.76 6.76 0 013.39 
                        5.86v44.7a2.44 2.44 0 01-3.66 2.12l-98.37-56.44a2.41
                         2.41 0 01-1.21-2.09V33a2.27 2.27 0 013.39-2z"
                    ></path>
                    <ellipse
                        cx="222.52"
                        cy="115.11"
                        fill="#ab643c"
                        rx="1.05"
                        ry="0.01"
                        transform="rotate(-10.9 222.599 115.159)"
                    ></ellipse>
                    <ellipse
                        cx="273.43"
                        cy="87.89"
                        fill="#659fe4"
                        rx="1.05"
                        ry="1.14"
                    ></ellipse>
                    <ellipse
                        cx="270.08"
                        cy="86.22"
                        fill="#c5e9ff"
                        rx="1.05"
                        ry="1.14"
                    ></ellipse>
                    <motion.path
                        fill="none"
                        stroke="#00a99d"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M182.92 43.35L242.07 76.96"
                        variants={lineCodeVariant}
                        initial="hidden"
                        animate="visible"
                    ></motion.path>
                    <motion.path
                        fill="none"
                        stroke="#d4145a"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M183.13 52.14L192.71 57.58"
                        variants={lineCodeVariant}
                        initial="hidden"
                        animate="visible"
                    ></motion.path>
                    <motion.path
                        fill="none"
                        stroke="#29abe2"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M195.54 59.42L248.78 88.69"
                        variants={lineCodeVariant}
                        initial="hidden"
                        animate="visible"
                    ></motion.path>
                    <motion.path
                        fill="none"
                        stroke="#f7931e"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M182.92 60.16L203.36 71.43"
                        variants={lineCodeVariant}
                        initial="hidden"
                        animate="visible"
                    ></motion.path>
                    <motion.path
                        fill="none"
                        stroke="#00a99d"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M206.75 73.57L251.58 97.55"
                        variants={lineCodeVariant}
                        initial="hidden"
                        animate="visible"
                    ></motion.path>
                    <path
                        fill="#010509"
                        d="M316.58 80.64v43a4.79 4.79 0 01-7.25 4.12l-40.91-24.4a4.79 4.79 0 01-2.34-4.12V57a4.79 4.79 0 017.19-4.15l40.91 23.62a4.79 4.79 0 012.4 4.17z"
                    ></path>
                    <path
                        fill="none"
                        stroke="#217ECA"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M287.38 75.78L274.12 85.53 286.01 102.22"
                        style={{
                            filter: "drop-shadow(2px 2px 2px #C2DEF5)",
                        }}
                    ></path>
                    <path
                        fill="none"
                        stroke="#217ECA"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        d="M299.11 82.82L308.87 101.88 295.15 108.28"
                        style={{
                            filter: "drop-shadow(2px 2px 2px #C2DEF5)",
                        }}
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M183.77 122.22l-21.49 12.28a1.48 1.48 0 000 
                        2.56L222 171.39a4.77 4.77 0 004.76 0l20.11-11.61a1.54 
                        1.54 0 000-2.67l-60.4-34.89a2.67 2.67 0 00-2.7 0z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M216.24 141.8l-6.13 3.64 4.55 2.64 6.16-3.62zM209.52
                         137.89l-6.13 3.64 5.77 3.35 6.16-3.62zM185.1
                          123.71l-6.23 3.58 5.54 3.22 6.16-3.62zM198.23 
                          131.34L192.1 135l4.55 2.64 6.16-3.62zM191.51 
                          127.43l-6.13 3.64 5.76 3.35c.68-.39 4.54-2.67 
                          6.16-3.62zM221.75 145l-6.13 3.64 4.36 2.53
                           6.15-3.62zM203.74 134.54l-6.13 3.64 4.82 
                           2.8 6.16-3.62zM227.07 148.08l-6.13 3.64 5.77 3.35
                            6.16-3.62z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M233.79 151.99L227.65 155.62 238 161.63 244.23
                         158.05 233.79 151.99z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M178.08 128.35l-6.23 3.58 8.06 4.68
                         6.16-3.62zM193.72 137.43l-6.13 3.64 4.55 2.64
                          6.16-3.62zM205 144l-6.13 3.64 5.77 3.35
                           6.16-3.62zM199.23 140.63l-6.13 3.64 4.82 2.8 
                           6.16-3.62zM211.73 147.89l-6.13 3.64 4.55 2.64 
                           6.15-3.62zM217.24 151.09l-6.13 3.64 4.36 2.53 
                           6.15-3.62zM187 133.53l-6.13 3.64 5.76 3.35 
                           6.16-3.62zM222.55 154.18l-6.13 3.64 5.77 3.35 
                           6.15-3.62z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M223.14 161.72L230.97 166.27 237.21 162.69 229.27
                         158.08 223.14 161.72z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M218.55 161.09L213.99 163.81 219.28 166.87 223.91
                         164.21 218.55 161.09z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M220.38 167.51L224.88 170.11 229.52 167.46 224.93 
                        164.8 220.38 167.51z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M170.39 133.12L165.61 135.78 171.03 138.91 175.72 
                        136.22 170.39 133.12z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M176.73 136.81L172.12 139.55 177.91 142.9 182.59
                         140.21 176.73 136.81z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M183.61 140.8L179.01 143.54 212.89 163.17 217.53 
                        160.5 183.61 140.8z"
                    ></path>
                    <ellipse
                        cx="339.69"
                        cy="192.74"
                        fill="#c2def5"
                        className="target-color"
                        rx="18.83"
                        ry="9.31"
                    ></ellipse>
                    <path
                        fill="#c2def5"
                        d="M358.53 167.94v25.32s-14 13-37.67.21v-25.53"
                        className="target-color"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M343.83 192.49c-5.2 4-11.48 5.9-17.92 6.58a30.14
                         30.14 0 0013.78 3c10 0 18.17-3.86 18.77-8.74l.06-.05v-25.34h-.35c-3.17 9.06-6.51 18.47-14.34 24.55z"
                        opacity="0.21"
                    ></path>
                    <path
                        fill="#c2def5"
                        d="M323.68 177s-3.12-4.77-6.06-2-.37 12.3 8.26
                         13.22V192s-10.83-1.47-12.3-11.2 5.51-11.23 9-8.55"
                        className="target-color"
                    ></path>
                    <ellipse
                        cx="339.69"
                        cy="168.04"
                        fill="#663535"
                        rx="18.83"
                        ry="9.31"
                    ></ellipse>
                    <path
                        fill="#010509"
                        d="M162.47 168c-4.64-3.24-10.1-5-16-3.72-6.28
                         1.38-11.72 5.33-18.12 6.3-1 .15-5.05-.11-5.67.48-17.81 16.86 32 15.05 32 15.05 4.83-4 9.38-7.85 14.18-11.85-1.46-3.2-3.86-4.48-6.39-6.26zM139 192.48l-1.77 50.86c-.07 1.93 2.93 1.93 3 0l1.77-50.86c.1-1.93-2.89-1.92-3 0zM176.37 219.69q-13.6-13.31-26-27.78c-1.26-1.47-3.37.66-2.12 2.12q12.38 14.46 26 27.78c1.38 1.35 3.51-.81 2.12-2.12z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M128.64 187.78q-10.56 19.93-19.89 40.47c-.79 1.74 
                        1.79 3.27 2.59 1.51q9.33-20.54
                         19.89-40.47c.9-1.7-1.68-3.22-2.59-1.51z"
                    ></path>
                    <path
                        fill="#fcbf81"
                        d="M163.71 134c.61-.15 5.74-1.47 7-1.89s5.16-3.45
                         7.28-3 6.39 3.26 6.59 4.2-1 2.08-1.45 
                         2.49-3.54-.72-4.74-.91-3.11 2.65-4.24 3.15-8.43
                          1.81-8.43 1.81M177.5 146.46c.61-.15 5.74-1.47
                           7-1.89s5.16-3.45 7.28-3 6.39 3.26 6.59 4.2-1
                            2.08-1.45 2.49-3.54-.72-4.74-.91-3.11 2.65-4.24 
                            3.15-8.43 1.81-8.43 1.81"
                    ></path>
                    <path
                        fill="#010509"
                        d="M175.51 211.09c.93-1 1.54-2 
                        1.22-3.05-.57-1.87-3.11-2.63-4.85-2.53s-3.54 
                        1-5.3 1.5a13.17 13.17 0 01-5.75.71 1.28 1.28 0
                         01-.8-.45 3.17 3.17 0 01-2.33-2.12l-5.76-2.06s-1.47
                          12.17-1.42 13c.43 6.57 10.24 2.82 10.24 2.82s.35-3 
                          .44-3.37 3.85.77 5.4.53a6.8 6.8 0 002-.93c1.16-.64 
                          2.3-1.32 3.43-2s2.31-1.35 3.48-2.05z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M154 166.17c-2.16.21-4.32.49-6.47.8q1.34 20.73
                        3 41.43c5.6 2.29 7.87 1.23 11.34-2.32.66-13.17 1.81-27
                         1.78-40.28-3.2.14-6.42.28-9.65.37z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M130.73 162.38s-.93 15.13 6.67 18.5 23.19 1.69
                         30.86-2.81a82.82 82.82 0 
                         0112.44-6.21s2-6.62-2.81-9.48-15.35-6.4-24.73 
                         0"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M169.48 139.73c.81-3.09.34-8.19.34-8.19s-9.49
                         1.62-13.49 1-10.54-9-10.54-9l.89 16.6c7.58 1.59 15.43 
                         1.93 22.8-.41z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M193.06 220.57c.93-1 1.54-2
                         1.22-3.05-.57-1.87-3.11-2.63-4.85-2.53s-3.54 1-5.3
                          1.5a13.17 13.17 0 01-5.75.71 1.28 1.28 0 01-.8-.45
                           3.17 3.17 0 01-2.33-2.12l-5.76-2.06s-1.47 12.17-1.42 
                           13c.43 6.57 10.24 2.82 10.24 2.82s.35-3 .44-3.37 
                           3.85.77 5.4.53a6.8 6.8 0 002-.93c1.16-.64 2.3-1.32 
                           3.43-2s2.32-1.35 3.48-2.05z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M170.9 162.75c-2-.94-4.06-.84-6.44-.83.33 4.87.15 
                        6.62.45 11.48l.08 1.29c.92 14.4 2 28.79 3.1 43.18 5.6
                         2.29 7.87 1.23 11.34-2.32.77-15.33 2.22-31.51
                          1.66-46.77-3.23-3.2-6.09-4.11-10.19-6.03z"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M130.6 159.25c0 .37.07 1.62.13 3.13 3.15 4.15 7
                         6.58 13 6.4 
                         4.89-.14 9-2.28 
                         12.8-4.92-.48-8.85-1.91-24-4.14-34.53-.19-.89-2.5-1.49-3.18-1.86-1.59-.87-.66-2.37-2.22-3.3a53.5
                          53.5 0
                           00-7.05-3.44h-.06c-3.89-.06-10.6 2.94-11 8.15-.61
                            8 .27 12.85.89 20.84.23 3.22.56 6.4.83 9.53z"
                    ></path>
                    <path
                        fill="#fcbf81"
                        d="M144.15 105.56c.51.13 4.83 10.07 3.14 
                        16.11s-11.95-.17-14.53-4.77 1.69-13.9 11.39-11.34z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M144 106.95s0 3.28-2.87 4.34-5.26 1.77-5.1 3.1
                         5.19-.19 5.21 2.85a22.66 22.66 0 01-.82 6.06c-.32
                          1.49-8.93-3.08-11.77-10.86s4.27-9.85 4.62-9.9 1-2.17
                           4.47-2.93 4.47.6 4.47.6a4.23 4.23 0 015.09.55c3.21 
                           2.55 2.4 7.21-1.24 9.1z"
                    ></path>
                    <path
                        fill="#217ECA"
                        d="M183.6 144c-4.47.93-13.55
                         2.41-16.76 1-2.49-1.09-10.8-18.91-19.83-20.82l-1.22
                          13.6s12.77 16.2 18.67 17.87c4.29 1.21 15.84-.41 
                          20.91-2.17a19.35 19.35 0 00-1.77-9.48z"
                    ></path>
                    <path
                        fill="#010509"
                        d="M155.31 148.19c-.65-.84-8.05-9.22-8.05-9.22l8.89 
                        18.21z"
                    ></path>
                    <path
                        fill="#c2def5"
                        d="M168.16 174a22.48 22.48 0 01-11.24 8.25c-6.34 
                        1.93-15.56
                         1-18.89-5.61-6.06-12.06-.37-27.16-6.77-38.89a11.76 
                         11.76 0 00-7.43-6.1c-4.15-.91-7 2.21-8.5 5.88-2.7
                          6.58-2.6 14.77-2.47 21.78a118.92 118.92 0 001.23 
                          16.92s3.88 23.51 34.12 17.2a45.47 45.47 0 
                          0014.86-5.5 20.48 20.48 0 
                          006.06-5.33c1.87-2.72.62-5.91-.97-8.6z"
                        className="target-color"
                    ></path>
                </motion.svg>

            </motion.div>

        </div>
    )
}

export default SvgDev;