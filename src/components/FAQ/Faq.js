import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className="my-lg-0 pb-sm-5 py-5 mt-5 mb-0 mt-md-0">
            <div>
                <h2 className="my-2 m-lg-5 fw-semibold display-5 text-light">Frequently Asked Questions</h2>
                <p className='px-lg-0 px-3 fs-5 mb-1 mb-lg-5 text-light'>Below are some frequently asked questions by our visiters :</p>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-8 mx-auto" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is cors?</Accordion.Header>
                        <Accordion.Body className="fs-6">Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-8 mx-auto" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why are you using firebase?</Accordion.Header>
                        <Accordion.Body className="fs-6 text-start">
                            Firebase offers numerous easy-to-use SDKs, efficient back-end services, and user interface libraries for authenticating the users on the application. Typically, it takes months to establish a functional authentication process, but with Firebase, the whole system can be set up in minutes and less than 15 lines of code. Most importantly, firebase provides a very high level of security.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-8 mx-auto" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body className="fs-6">Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-8 mx-auto" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body className="fs-6">The private route component is used to protect selected pages in a React app from unauthenticated users. The component will simply check the current user state from the user, destructured from useContext hook. The private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the login page with the return url passed in the Navigate component.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-8 mx-auto" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body className="fs-6">Node.js is a open source server related environment. Node.js is free and runs on various platforms (windows, linux,  Mac os etc). It uses Javascript on the server. Node js is a javascript runtime.Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;