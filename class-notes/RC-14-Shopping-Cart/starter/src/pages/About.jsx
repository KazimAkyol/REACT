import React from "react";

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                    <div className="card p-3 py-4">
                        <div className="text-center">
                            <img
                                src="https://png.pngtree.com/png-clipart/20210523/original/pngtree-colorless-character-avatar-with-glasses-png-image_6317135.jpg"
                                width={125}
                                className="rounded-circle"
                                alt="a"
                            />
                        </div>
                        <div className="text-center mt-3">
                            <span className="bg-secondary p-1 px-4 rounded text-white">
                                Pro
                            </span>
                            <h5 className="mt-2 mb-0">Kazim Akyol</h5>
                            <span>Fullstack Developer</span>
                            <div className="px-5 mt-2">
                                <p className="fonts">
                                    I am currently training as a full-time Full-Stack Web Developer. My goal is to develop myself in this field in the best way possible and work on current projects. I am passionate about coding and always
                                    eager to leran new technologies. I believe in the power of
                                    collaboration and teamwork, and I am excited to contribute to
                                    innovative projects that make a difference. I am committed to
                                    continously improving my skills and staying up-to-date with the
                                    latest industry trends. Let's connect and explore new opprtunities
                                    together!
                                </p>
                            </div>
                            <ul className="social-list">
                                <li>
                                    <i className="fa-brands fa-linkedin" />
                                </li>
                                <li>
                                    <i className="fa-brands fa-google" />
                                </li>
                            </ul>
                            <div className="buttons">
                                <button className="btn btn-outline-primary px-4">
                                    <a
                                        className="text-decoration-none text-black "
                                        href="https://github.com/KazimAkyol"
                                        target="true"
                                    >
                                        Message
                                    </a>
                                </button>
                                <button className="btn btn-primary px-4 ms-3">
                                    <a
                                        className="text-decoration-none text-white"
                                        href="https://github.com/KazimAkyol"
                                        target="true"
                                    >
                                        Contact
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
