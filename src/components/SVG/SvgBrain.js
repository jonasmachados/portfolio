import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: .3 }
    },
}

const pathVariantsOnOffWhite = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: .8,
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
};

const pathVariantsOnOffGray = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 1.2,
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
};

const SvgBrain = () => {
    return (
        <header>
            <motion.svg className="skills-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 738.81995 576.27002"
                variants={svgVariants}
                initial="hidden"
                whileInView="visible"
            >
                <path d="M844.96867,410.38909s-17.37008,9.66141-12.37008,20.66141,76,2,76,2-5-15-14-18S844.96867,410.38909,844.96867,410.38909Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <path d="M838.19741,412.96505a33.803,33.803,0,0,1,11.44641-4.73315,77.516,77.516,0,0,1,41.17743,1.2843l-.24481-.1991a45.94574,45.94574,0,0,1,14.66607,12.22834Z" transform="translate(-230.59003 -161.86499)" fill="#ccc" />
                <path d="M915.11861,460.27047q-.36,5.385-.72,10.76a172.67437,172.67437,0,0,1-2.45,22.38c-1.22,6.19-3.16,12.33-6.63,17.6-3.47,5.26-8.62,9.61-14.72,11.21a26.97334,26.97334,0,0,1-11.42.25c-7.13-4.05-11.96,1.13-4.84,6.4a55.18743,55.18743,0,0,0,5.03,3.31l3.23,49.87-60-13,11.71-66.34a39.58958,39.58958,0,0,1-4.9-5.35c-6.71-8.91-9.02-20.52-8.58-31.66.45-11.15,3.42-22.02,6.37-32.77a84.27789,84.27789,0,0,1,2.72-8.61005c1.31.54,2.64,1.03,3.99,1.44,8.63,2.62,17.8,2.83,26.82,2.82q24.075-.015,48.09-1.88a46.14229,46.14229,0,0,1,6.53,19.94A92.56934,92.56934,0,0,1,915.11861,460.27047Z" transform="translate(-230.59003 -161.86499)" fill="#ccc" />
                <path d="M658.5,595.645l92.37,8.19995.99.09V209.795q-.49494-.345-.99-.69a288.32258,288.32258,0,0,0-62.01-32.94l-4.72,65.1-.43,5.96-4.67,64.56L677.6,331.645l-18.93,261.7Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <path d="M430.07,202.455c-.66.42-1.32.84-1.98,1.28v400.2l1.98-.18,91.37-8.11-.17-2.30005L502.34,331.645l-1.44-19.86-4.67-64.56-.43-5.96-4.95-68.27A287.68677,287.68677,0,0,0,430.07,202.455Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <path d="M428.09,203.735c-1.33.86-2.66,1.74-3.97,2.63v403.03c0,10.06995,5.97,18.51,13.95,20.66a15.24855,15.24855,0,0,0,4,.53h296.8a15.11793,15.11793,0,0,0,3.99-.53,17.05993,17.05993,0,0,0,7.78-4.66,22.91866,22.91866,0,0,0,6.18-16V213.375c-1.64-1.21-3.29-2.41-4.96-3.58q-.49494-.345-.99-.69v400.29a16.10772,16.10772,0,0,1-.46,3.85c-1.41,5.95-6.06,10.31-11.54,10.31H442.07c-6.62,0-12-6.35-12-14.16V202.455C429.41,202.875,428.75,203.295,428.09,203.735Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <rect x="196.50257" y="79.40401" width="326.75223" height="5.95901" fill="#e6e6e6" />
                <path d="M653.77,165.255c-1.98-.49-3.96-.95-5.96-1.38v161.81h5.96Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <path d="M533.13,161.865c-1.99.37-3.98.75-5.96,1.16v162.66h5.96Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <path d="M363.03,620.155a26.71127,26.71127,0,0,0,1.93,9.98,25.54045,25.54045,0,0,0,1.75,3.56,27.096,27.096,0,0,0,3.02,4.18,26.76039,26.76039,0,0,0,20.12,9.11H781.16a26.82,26.82,0,0,0,0-53.64H389.85A26.84644,26.84644,0,0,0,363.03,620.155Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <rect x="427.0926" y="311.78391" width="324.76589" height="19.86336" transform="translate(948.36106 481.5662) rotate(-180)" fill="#e6e6e6" />
                <path d="M575.57119,305.82491h27.8087a0,0,0,0,1,0,0v0a10.92484,10.92484,0,0,1-10.92484,10.92484h-5.959a10.92484,10.92484,0,0,1-10.92484-10.92484v0A0,0,0,0,1,575.57119,305.82491Z" transform="translate(948.36106 460.70967) rotate(-180)" fill="#e6e6e6" />
                <path d="M230.59,635.475a289.004,289.004,0,0,0,28.12,28.95H941.29a289.004,289.004,0,0,0,28.12-28.95Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M415.75,538.665v102.56H487.6V538.665a3.448,3.448,0,0,0-2.43-3.3,3.17459,3.17459,0,0,0-1.03-.16H419.22A3.46327,3.46327,0,0,0,415.75,538.665Zm28.04,35.24a7.67033,7.67033,0,0,1,15.34,0v11.9a7.6701,7.6701,0,0,1-15.34,0Z" transform="translate(-230.59003 -161.86499)" fill="#2f2e41" />
                <path d="M415.53,637.945v9.89a1.94622,1.94622,0,0,0,1.93,1.94h68.43a1.93971,1.93971,0,0,0,1.93-1.94v-9.89Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M302.72,384.145v187.26a9.00714,9.00714,0,0,0,9,9h277.5a9.0071,9.0071,0,0,0,9-9V384.145a9.01147,9.01147,0,0,0-9-8.99H311.72A9.01151,9.01151,0,0,0,302.72,384.145Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M309.23,386.475v182.62a4.81833,4.81833,0,0,0,4.81,4.81H586.91a4.81829,4.81829,0,0,0,4.81-4.81V386.475a4.82046,4.82046,0,0,0-4.81-4.82H314.04A4.8205,4.8205,0,0,0,309.23,386.475Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <path d="M364.87,652.105a2.94839,2.94839,0,0,0,2.32,1.11H529.53a2.98724,2.98724,0,0,0,2.92-3.6l-2.52-11.97a2.99262,2.99262,0,0,0-1.86-2.17,2.89455,2.89455,0,0,0-1.06-.2H369.7a2.89431,2.89431,0,0,0-1.06.2,2.99238,2.99238,0,0,0-1.86,2.17l-2.52,11.97A2.98494,2.98494,0,0,0,364.87,652.105Z" transform="translate(-230.59003 -161.86499)" fill="#2f2e41" />
                <rect x="520.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(816.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="510.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(796.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="500.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(776.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="490.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(756.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="480.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(736.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="470.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(716.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="460.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(696.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="450.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(676.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="440.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(656.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="430.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(636.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="420.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(616.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="410.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(596.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="400.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(576.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="390.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(556.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="380.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(536.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="370.857" y="637.43078" width="5" height="3" rx="0.48819" transform="translate(516.12397 1115.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="520.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(816.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="510.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(796.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="500.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(776.3603 1125.99656) rotate(-180)" fill="#3f3d56" /><rect x="490.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(756.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="480.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(736.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="470.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(716.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="460.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(696.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="450.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(676.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="440.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(656.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="430.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(636.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="420.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(616.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="410.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(596.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="400.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(576.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="390.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(556.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="380.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(536.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="370.97516" y="642.43078" width="5" height="3" rx="0.48819" transform="translate(516.3603 1125.99656) rotate(-180)" fill="#3f3d56" />
                <rect x="437.97516" y="648.43078" width="40" height="3" rx="0.48819" transform="translate(685.3603 1137.99656) rotate(-180)" fill="#3f3d56" />
                <path d="M327.75187,406.8117H583.07523a1.01559,1.01559,0,0,0,0-2.03069H327.75187a1.01559,1.01559,0,0,0,0,2.03069Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <ellipse cx="335.10501" cy="231.64882" rx="5.95043" ry="6.08304" fill="#3f3d56" />
                <ellipse cx="314.54899" cy="231.64882" rx="5.95043" ry="6.08304" fill="#3f3d56" />
                <ellipse cx="293.99297" cy="231.64882" rx="5.95043" ry="6.08304" fill="#3f3d56" />
                <path d="M339.04,390.045a1.0948,1.0948,0,0,0,1.09,1.1h14.6a1.1053,1.1053,0,0,0,0-2.21h-14.6A1.1034,1.1034,0,0,0,339.04,390.045Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M339.04,394.195a1.09474,1.09474,0,0,0,1.09,1.1h14.6a1.10527,1.10527,0,0,0,0-2.21h-14.6A1.1034,1.1034,0,0,0,339.04,394.195Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M339.04,398.335a1.1034,1.1034,0,0,0,1.09,1.11h14.6a1.1053,1.1053,0,0,0,0-2.21h-14.6A1.09476,1.09476,0,0,0,339.04,398.335Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <motion.rect variants={pathVariantsOnOffWhite} x="104.83596" y="268.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="164.83596" y="268.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <rect x="181.83596" y="268.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <motion.rect variants={pathVariantsOnOffWhite} x="121.15615" y="268.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="201.15615" y="268.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <motion.rect variants={pathVariantsOnOffWhite} x="120.83596" y="281.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="180.83596" y="281.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <rect x="197.83596" y="281.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <motion.rect variants={pathVariantsOnOffWhite} x="137.15615" y="281.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="217.15615" y="281.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <motion.rect variants={pathVariantsOnOffWhite} x="136.83596" y="294.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="196.83596" y="294.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <rect x="213.83596" y="294.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <rect x="153.15615" y="294.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <motion.rect variants={pathVariantsOnOffWhite} x="233.15615" y="294.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="152.83596" y="307.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <rect x="212.83596" y="307.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#e6e6e6" />
                <rect x="229.83596" y="307.5433" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="169.15615" y="307.06314" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="164.83596" y="359.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="181.83596" y="359.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="201.15615" y="359.71699" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="104.83596" y="359.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="121.15615" y="359.71699" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="120.83596" y="346.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="180.83596" y="346.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="197.83596" y="346.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="137.15615" y="346.71699" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="136.83596" y="333.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="196.83596" y="333.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="213.83596" y="333.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="153.15615" y="333.71699" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <motion.rect variants={pathVariantsOnOffWhite} x="152.83596" y="320.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="212.83596" y="320.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="229.83596" y="320.23682" width="11.00609" height="5.75992" rx="2.87996" fill="#020401" />
                <rect x="169.15615" y="320.71699" width="38.3657" height="5.75992" rx="2.87996" fill="#020401" />
                <path d="M324.69,708.905c.61.31,1.23.62,1.84.92,15.8,7.9,28.43994,12.39,45.73,17.31,1.46-16.3,2.87-44.95,4.24-62.71.36-4.61.72-8.48,1.07-11.21a15.1823,15.1823,0,0,1,.88-4.25l-.06,4.25-.15,11.21-.87,64.11a288.58782,288.58782,0,0,0,65.84,9.49c1.16.03,2.3.05,3.4.06995.39.01.77.02,1.15.02,1.25.01,2.49.02,3.74.02a289.27116,289.27116,0,0,0,69.54-8.43c-.49-16.13-.98-44.46-1.45-65.28-.1-4.07-.19-7.86-.29-11.21-.19-7.16-.39-12.31995-.58-14.05a4.36108,4.36108,0,0,1,.39.97,97.15388,97.15388,0,0,1,1.89,13.08c.35,3.35.7,7.14,1.05,11.21,1.86,21.63,3.8,51.04,5.8,63.51a285.47262,285.47262,0,0,0,34.97-12.03q9-3.75,17.68-8.09c-1.1-7.2-2.25-15.27-3.43-23.64-.92-6.49-1.87-13.16-2.84-19.75-1.5-10.18-23.79-81.32-25.19995-84.02-1.21-2.31-2.36005-4.49-3.45-6.5-2.64-4.88-4.88-8.77-6.54-11.23a55.25656,55.25656,0,0,0-29.28-22.21l-.3-.08-.21.09-20.45-6.28-2.99-.92-2.01-.62-7.08-5.39-3.85-2.93-3.61-2.75-7.06-5.37-43.71,2.69-8.51,20.49-19.06,6.97-.32995-.15-.29-.12-.3.08a55.306,55.306,0,0,0-29.28,22.21c-.93994,1.41-2.08,3.27-3.37,5.52-1.1,1.91-2.3,4.09-3.6,6.5-1.85,3.43-3.87,7.3-6.01,11.49-.47.92-.95,1.86-1.43,2.81q-1.335,2.63993-2.71,5.38995c-2.13,4.25-4.33,8.69-6.53,13.2-1.91,3.91-3.84,11.95-5.74,22.18-1.57,8.5-3.13,18.52-4.64,28.95-1.98,13.52.13,29.71-1.66,42.15C324.92,707.365,324.8,708.135,324.69,708.905Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" /><polygon points="303.59 473.566 295.093 440.774 287.59 469.07 303.59 473.566" opacity="0.2" />
                <path d="M308.07,614.065c3.04,41.88-.11,60.32,16.67,94.85a286.15918,286.15918,0,0,0,47.52,18.22q2.55.72,5.11,1.4a288.58782,288.58782,0,0,0,65.84,9.49c1.16.03,2.3.05,3.4.06995.39.01.77.02,1.15.02,1.25.01,2.49.02,3.74.02a289.27116,289.27116,0,0,0,69.54-8.43q3.42-.84,6.81-1.77a285.47262,285.47262,0,0,0,34.97-12.03q9-3.75,17.68-8.09c1.31-.66,2.62-1.32,3.91-2,6.63-11.66,10.4-25.84,10.48-42.88C590.3,633.575,318.21,588.745,308.07,614.065Z" transform="translate(-230.59003 -161.86499)" fill="#2f2e41" />
                <path d="M308.07788,621.23718c-.15527-2.59271-.32886-5.27093-.53131-8.05987,10.14-25.32,282.23,19.51,286.82,48.87-.01264,2.69184-.12775,5.30414-.32129,7.85456C582.92969,640.92358,324.44055,598.31555,308.07788,621.23718Z" transform="translate(-230.59003 -161.86499)" opacity="0.2" />
                <path d="M246.41933,635.05074a6.41621,6.41621,0,0,0,6.18311,4.331L279.09426,638.7a6.32847,6.32847,0,0,0,5.98085-4.657l3.74889-40.08722a9.794,9.794,0,0,0,4.23792.87079A9.66133,9.66133,0,0,0,292.577,575.51a8.184,8.184,0,0,0-1.73619.18056,6.54764,6.54764,0,0,0-4.87405-2.103l-40.75051,1.05229a5.85418,5.85418,0,0,0-1.00519.1248,6.36455,6.36455,0,0,0-4.87318,8.26464Zm43.17346-43.81684,2.66763-9.55274a6.50638,6.50638,0,0,0,.02037-3.37458c.12944-.00034.24362-.06168.37306-.062a6.91049,6.91049,0,0,1,.32357,13.81714A6.50522,6.50522,0,0,1,289.59279,591.2339Z" transform="translate(-230.59003 -161.86499)" fill="#2f2e41" />
                <path d="M244.21109,574.76459c.86818,4.96412,10.62909,8.45388,22.36585,7.8473,10.79271-.49726,19.61746-4.287,21.23421-8.77851a6.025,6.025,0,0,0-1.84436-.24588l-40.75051,1.05229A5.85418,5.85418,0,0,0,244.21109,574.76459Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M268.728,613.02251a.49659.49659,0,0,0,.15091-.06642l5.75315-3.76566a.49922.49922,0,0,0,.00032-.83621l-5.97978-3.91667a.49972.49972,0,1,0-.54792.83585l5.34091,3.49818-5.114,3.34794a.49991.49991,0,0,0,.39637.903Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <path d="M259.6412,613.44155a.5.5,0,0,0,.12608-.91842l-5.30305-3.04034,5.1256-3.80723a.49963.49963,0,1,0-.596-.80208l-5.73863,4.26265a.49951.49951,0,0,0,.04918.83476l5.96526,3.41968A.49962.49962,0,0,0,259.6412,613.44155Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <path d="M268.15573,616.32252a.48211.48211,0,0,0,.137-.05785.49976.49976,0,0,0,.16751-.68714l-8.15548-13.40836a.50026.50026,0,0,0-.85441.52058l8.15548,13.40835A.50033.50033,0,0,0,268.15573,616.32252Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <rect x="582.00856" y="398.18551" width="89" height="78" fill="#3f3d56" />
                <path d="M914.79019,451.10052a47.54278,47.54278,0,0,0,4.14441,28.74269c1.60845,3.27865,3.60034,7.22833,1.64181,10.31067a6.35146,6.35146,0,0,1-4.78427,2.65123,15.579,15.579,0,0,1-5.58345-.723" transform="translate(-230.59003 -161.86499)" fill="#ccc" />
                <motion.ellipse variants={pathVariantsOnOffGray} cx="606.00856" cy="256.68551" rx="3" ry="2.5" fill="#3f3d56" />
                <motion.ellipse variants={pathVariantsOnOffGray} cx="617.00856" cy="257.68551" rx="3" ry="2.5" fill="#3f3d56" />
                <motion.ellipse variants={pathVariantsOnOffGray} cx="628.00856" cy="262.68551" rx="3" ry="2.5" fill="#3f3d56" />
                <motion.ellipse variants={pathVariantsOnOffGray} cx="641.00856" cy="259.68551" rx="3" ry="2.5" fill="#3f3d56" />
                <path d="M598.524,471.43367c14.57046-4.04481,30.799.29013,42.05845,10.21976A43.88754,43.88754,0,0,1,653.461,501.80168c2.8747,9.25872,3.35019,19.02542,3.65131,28.6497.33295,10.64162.62195,21.28479.932,31.9271.29563,10.14716.33033,20.34171,1.00732,30.47209.56808,8.50055,1.92876,17.32514,6.47812,24.698,4.21772,6.83533,10.88125,11.45055,18.41173,13.99454,7.63283,2.57857,15.86067,3.17883,23.86752,3.12609a184.22208,184.22208,0,0,0,27.82752-2.20319c17.48705-2.80135,34.75967-9.94681,45.44026-24.68866a40.90967,40.90967,0,0,0,7.92253-23.02829c.22517-9.67482-2.86589-19.0455-6.25147-27.98171-3.29459-8.69606-6.85892-17.26379-8.94441-26.35578a110.576,110.576,0,0,1-2.74946-25.94259,114.04736,114.04736,0,0,1,12.22941-50.22476,98.67948,98.67948,0,0,1,15.01373-22.075c6.16842-6.712,13.80654-12.25291,22.88968-14.06934a27.63786,27.63786,0,0,1,13.36778.53755c1.85346.555,2.64543-2.33953.79752-2.89284-8.99811-2.69425-18.77351-.64565-26.75136,4.03063-7.84426,4.598-14.04332,11.49575-19.30419,18.80938A116.16931,116.16931,0,0,0,772.86781,538.54c5.3387,17.489,16.95029,35.69377,11.96192,54.62083-4.36632,16.56686-19.49159,27.82514-35.11678,32.911-9.47941,3.08546-19.41782,4.39075-29.33129,5.06595-8.37748.57059-16.86908.93352-25.2225-.1431-7.67264-.98887-15.56465-3.33433-21.51352-8.48465-6.52072-5.64541-9.50111-13.75775-10.79827-22.08308-1.46766-9.41955-1.25195-19.13285-1.52886-28.63751l-.9452-32.44314c-.53384-18.32358-.07373-38.63119-11.99528-53.81409a49.95822,49.95822,0,0,0-39.69658-18.60967,44.882,44.882,0,0,0-10.95493,1.61827,1.50128,1.50128,0,0,0,.79752,2.89283Z" transform="translate(-230.59003 -161.86499)" fill="#3f3d56" />
                <path d="M385.55645,452.45491a57.57081,57.57081,0,0,0,114.03711-15.90964l-.114-.81682a57.57081,57.57081,0,0,0-113.90549,16.724Z" transform="translate(-230.59003 -161.86499)" fill="#ffb6b6" />
                <path d="M436.30821,500.05886c-2.97656-5.99564-6.03523-12.43313-5.22664-19.078s7.30115-13.01532,13.70389-11.06278c3.82874,1.16759,6.73216,4.93479,10.73093,5.11467,5.502.2475,8.63493-6.05895,10.32968-11.29926l6.90225-21.34241c13.3133,10.45893-3.54751-.50593,12.94413-4.33463,6.46988-1.502,13.0015-4.41026,16.78137-9.87177s3.72872-13.91344-1.49453-18.01627c-2.56109-2.01172-5.96348-2.76793-8.41174-4.91554a9.40722,9.40722,0,0,1,7.457-16.3953l-17.56635-2.13577,5.2-9.47967c-3.75968,2.98431-9.00488,3.40151-13.73187,2.56672s-9.18269-2.765-13.80855-4.04671c-22.2072-6.153-47.956,4.76087-58.97743,24.99811a22.4777,22.4777,0,0,0-24.484,7.15867c-4.68052,5.98169-5.93217,13.94744-6.08887,21.54108a93.36791,93.36791,0,0,0,9.66245,43.21851c2.06958,4.17151,4.51579,8.26359,8.03345,11.31494s43.27139,19.95473,47.85937,19.1578" transform="translate(-230.59003 -161.86499)" fill="#2f2e41" />
                <path d="M851.59859,460.5505a29.65677,29.65677,0,0,1-.99,7.69v.01c-.01.05-.03.1-.04.15-2.02,7.43-6.84,12.65-12.47,12.65-5.6,0-10.4-5.18-12.45-12.55-.14-.51-.26-1.02-.37-1.55-.14-.59-.25-1.2-.34-1.83-.08-.5-.14-1.01-.19-1.53-.07-.72-.12-1.44-.13-2.19v-.01c-.02-.28-.02-.56-.02-.84v-.25l.01-.01a29.29714,29.29714,0,0,1,.25-3.79c.07-.53.15-1.04.25-1.55.12-.62.25-1.23.41-1.83.13-.53.28-1.04.44-1.55.22-.68.46-1.34.73-1.97.17-.41.35-.81.53-1.2,2.46-5.06,6.42-8.35,10.88-8.35,6.17,0,11.37,6.29,12.98,14.87.02.13.05.26.06.39v.01A29.58013,29.58013,0,0,1,851.59859,460.5505Z" transform="translate(-230.59003 -161.86499)" fill="#e6e6e6" />
                <path d="M827.34859,448.84048a.79582.79582,0,0,1-.66.76c.17-.41.35-.81.53-1.2A.83923.83923,0,0,1,827.34859,448.84048Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <rect x="599.0043" y="286.06472" width="10.35447" height="1.55454" rx="0.77727" fill="#aae9bc" />
                <path d="M827.07857,452.34048a.781.781,0,0,1-.78.78h-.78c.13-.53.28-1.04.44-1.55h.34A.779.779,0,0,1,827.07857,452.34048Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <rect x="598.10822" y="289.70287" width="2.97042" height="1.55454" rx="0.77727" fill="#aae9bc" />
                <rect x="603.32252" y="289.57327" width="10.35447" height="1.55454" rx="0.77727" fill="#aae9bc" />
                <rect x="597.83833" y="293.21142" width="2.97042" height="1.55454" rx="0.77727" fill="#aae9bc" />
                <rect x="602.42644" y="293.21142" width="2.97042" height="1.55454" rx="0.77727" fill="#aae9bc" />
                <path d="M826.99862,455.72049a.78106.78106,0,0,1-.78.78h-1.36c.07-.53.15-1.04.25-1.55h1.11A.77256.77256,0,0,1,826.99862,455.72049Z" transform="translate(-230.59003 -161.86499)" fill="#aae9bc" />
                <rect x="607.64074" y="293.08183" width="10.35447" height="1.55454" rx="0.77727" fill="#aae9bc" />
                <path d="M827.34859,460.84048a.77253.77253,0,0,1-.78.77h-1.41a.79058.79058,0,0,1-.54-.21v-.01c-.02-.28-.02-.56-.02-.84v-.25l.01-.01a.76989.76989,0,0,1,.55-.23h1.41A.781.781,0,0,1,827.34859,460.84048Z" transform="translate(-230.59003 -161.86499)" fill="#ccc" />
                <rect x="599.0043" y="298.06472" width="10.35447" height="1.55454" rx="0.77727" fill="#ccc" />
                <path d="M827.07857,464.34048a.781.781,0,0,1-.78.78h-1.36c-.08-.5-.14-1.01-.19-1.53a.33979.33979,0,0,1,.13995-.02h1.41A.779.779,0,0,1,827.07857,464.34048Z" transform="translate(-230.59003 -161.86499)" fill="#ccc" />
                <rect x="598.10822" y="301.70287" width="2.97042" height="1.55454" rx="0.77727" fill="#ccc" />
                <rect x="603.32252" y="301.57327" width="10.35447" height="1.55454" rx="0.77727" fill="#ccc" />
                <rect x="597.83833" y="305.21142" width="2.97042" height="1.55454" rx="0.77727" fill="#ccc" />
                <rect x="602.42644" y="305.21142" width="2.97042" height="1.55454" rx="0.77727" fill="#ccc" />
                <path d="M826.99862,467.72049a.78106.78106,0,0,1-.78.78h-.57c-.14-.51-.26-1.02-.37-1.55h.94A.77256.77256,0,0,1,826.99862,467.72049Z" transform="translate(-230.59003 -161.86499)" fill="#ccc" />
                <rect x="607.64074" y="305.08183" width="10.35447" height="1.55454" rx="0.77727" fill="#ccc" />

            </motion.svg>

        </header >



    )
}

export default SvgBrain;