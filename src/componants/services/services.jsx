import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { Fade } from 'react-awesome-reveal';
const Services = () => {
    return ( 
        <>
        <Fade left>
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services-container">
                <article className='services'>
                    <div className="services-head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="services-list">
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Pixel-perfect responsive UI.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Design systems & tokens.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Accessible components (WCAG AA).</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Rapid prototyping & usability tests.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>User flows & wireframes.</p>
                        </li>
                    </ul>
                </article>
                 {/* END UI/UX DESIGN */}
                 <article className='services'>
                    <div className="services-head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="services-list">
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>React + TypeScript + Next.js.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>State management (Redux/Zustand).</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>API integration (REST/GraphQL).</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Performance tuning (Core Web Vitals).</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Testing: Jest / RTL / Cypress.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>CI/CD, code reviews, best practices.</p>
                        </li>
                    </ul>
                </article>
                {/* END WEB DEVELOPMENT */}
                <article className='services'>
                    <div className="services-head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="services-list">
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Developer docs & style guides.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Storybook component demos.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Technical blogs & how-tos.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Live demos and sandboxes.</p>
                        </li>
                        <li>
                            <BiCheck className='services-list-icon'/>
                            <p>Team mentoring & knowledge sharing.</p>
                        </li>
                    </ul>
                </article>
                {/* END CONTENT CREATION */}
            </div>
        </section>
        </Fade>
        </>
     );
}
 
export default Services;