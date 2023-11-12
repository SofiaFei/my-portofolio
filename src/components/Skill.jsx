import React from "react";
// icon
import { BsPatchCheckFill } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const Skill = () => {
    return (
        <section className="section" id='skill'>
            <div className="container mx-auto">
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}>
                    <h2 className="h2 leading-tight text-accent text-center mb-3">My Experience</h2>
                    <h3 className="h3 text-center mb-16">What Skills I Have</h3>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-center gap-8 sm:gap-4">
                    <motion.div 
                    variants={fadeIn('right', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="sm:w-11/12 w-full md:w-4/5 sm:mx-auto bg-accent/50 hover:bg-accent/5 border-transparent hover:border-accent/50 border-solid border-[1px] rounded-[32px] px-4 lg:px-20 py-8 lg:py-[38px] md:p-8">
                        <h3 className="text-center text-[20px] tracking-wider font-primary font-semibold mb-8">Frontend Development</h3>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-2 lg:gap-x-8 sm:p-2 md:p-4 ml-3 sm:ml-12 md:ml-10 lg:ml-2">
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold ">HTML</h4>
                                    <small className="font-light">Experienced</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">CSS</h4>
                                    <small className="font-light">Experienced</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500 ">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">JavaScript</h4>
                                    <small className="font-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Bootstrap</h4>
                                    <small className="font-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Tailwind</h4>
                                    <small className="font-light">Experienced</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">React</h4>
                                    <small className="font-light">Basic</small>
                                </div>
                            </article>
                        </div>
                    </motion.div>

                    <motion.div 
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="sm:w-11/12 w-full md:w-4/5 sm:mx-auto bg-accent/50 hover:bg-accent/5 border-transparent hover:border-accent/50 border-solid border-[1px] rounded-[32px] px-4 lg:px-20 py-8 lg:py-[38px] md:p-8">
                        <h3 className="text-center text-[20px] tracking-wider font-primary font-semibold mb-8">Backend Development</h3>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-2 lg:gap-x-8 sm:p-2 md:p-4 ml-3 sm:ml-12 md:ml-10 lg:ml-2">
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">NodeJS</h4>
                                    <small className="font-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">PHP</h4>
                                    <small className="font-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">MySQL</h4>
                                    <small className="font-light">Experienced</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Python</h4>
                                    <small className="font-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="flex gap-4">
                                <div className="mt-[6px] text-purple-500">
                                    <BsPatchCheckFill />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Laravel</h4>
                                    <small className="font-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skill;