import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image1 from '../assets/1761372917445.jpg'
import Image2 from '../assets/1761952471443.jpg'

export default function Resume() {
    return (
        <div className="resume-div-wrap">
            <Box>
                <Grid container spacing={0}>
                    <Grid size={7}>
                        <Grid size={10}>
                            <h1 className="noto-serif-resume-title">Sze Ming (Martin) Hui</h1>
                            <p className="noto-serif-resume-subtext">Granted 5 Years Working VISA (485) till 2031</p>
                            <br/>
                            <p className="noto-serif-resume-text">
                                Cybersecurity graduate with a strong focus on cloud technologies and secure system design. 
                                Hands-on experience in penetration testing labs, 
                                secure application development, 
                                and deploying containerized services in cloud environments. 
                                Passionate about identifying vulnerabilities, 
                                strengthening system resilience, 
                                and continuously developing practical security skills. 
                                Seeking a junior cybersecurity role where I can contribute technical capability while growing under industry mentorship.
                            </p>
                        </Grid>
                        <Grid size={10}>
                            <br/><br/><br/><br/><br/>
                            <h1 className="noto-serif-resume-title">Recent Projects</h1>
                            
                            <p className="noto-serif-resume-subtext">Network Security Design & Attack Simulation</p>
                            <p className="noto-serif-resume-text-bold">Network Security Unit Final Assessment (2025)</p>
                            <br/>
                            <p className="noto-serif-resume-text">
                                • Designed and implemented a secure multi-campus network in GNS3, including firewalls, BGP routing, DNS, CA, Web, SMTP, and SSH servers.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Configured IPSec site-to-site and remote access VPNs with ESP encryption and validated encrypted traffic using Wireshark.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Performed BGP prefix hijacking attack simulation and implemented defensive countermeasures to mitigate traffic redirection.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Designed and enforced firewall policies with implicit deny rules and service-specific access controls.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Deployed and configured Snort IDS to detect TCP port scanning and DoS attacks using custom detection rules.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Conducted security analysis identifying potential firewall bypass techniques and proposed architectural improvements.
                            </p>

                            <br/><br/><br/>
                            <p className="noto-serif-resume-subtext">Verde - Personalised Carbon Footprint Tracker</p>
                            <p className="noto-serif-resume-text-bold">
                                <a href="https://lnkd.in/gQcTEGGM" target="_blank" rel="noopener noreferrer">Monash PG Industry Expo Winner (2025)</a>
                            </p>
                            <br/>
                            <p className="noto-serif-resume-text">
                                • Authored a formal security plan outlining Data Flow Diagrams, risk assessment, data protection strategies, and mitigation controls.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Conducted regular penetration testing to identify vulnerabilities and implemented remediation measures.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Built secure backend APIs & Lambda functions with proper input validation and user authentication & authorization to protect sensitive user data.
                            </p>
                            <p className="noto-serif-resume-text">
                                • Considered privacy principles in handling behavioural data and implemented safeguards against common web vulnerabilities.
                            </p>
                            
                            <br/><br/>
                            <Grid container spacing={0} alignItems="center">
                                <Grid item size={6.7}>
                                    <img className="img-size" src={Image1} alt="" />
                                </Grid>
                                <Grid item size={0.3}/>
                                <Grid item size={5}>
                                    <img className="img-size" src={Image2} alt="" />
                                </Grid>
                            </Grid>
                            
                            <br/>
                        </Grid>
                    </Grid>
                    <Grid size={4}>
                        <Grid size={10}>
                            <h1 className="noto-serif-resume-title">Contact</h1>
                            <br/>
                            <p className="noto-serif-resume-text"><LocalPhoneIcon className="mui-icon"/> (61) 0434321101</p>
                            <p className="noto-serif-resume-text"><EmailIcon className="mui-icon"/> huim13a@gmail.com</p>
                            <p className="noto-serif-resume-text"><LinkedInIcon className="mui-icon"/><a href="https://www.linkedin.com/in/sze-ming-hui-baa202225/" target="_blank" rel="noopener noreferrer"> Sze Ming (Martin) Hui</a></p>
                            <p className="noto-serif-resume-text"><GitHubIcon className="mui-icon"/><a href="https://github.com/mmh11" target="_blank" rel="noopener noreferrer"> mmh11</a></p>
                        </Grid>
                        <Grid size={10}>
                            <br/><br/><br/><br/>
                            <h1 className="noto-serif-resume-title">Education</h1>
                            
                            <p className="noto-serif-resume-subtext">Monash University (2024 - 2025)</p>
                            <p className="noto-serif-resume-text-bold">
                                Master of Cybersecurity (Awarded with distinction)
                            </p>
                            <p className="noto-serif-resume-text">
                                GPA: 3.625
                            </p>
                            <p className="noto-serif-resume-text">
                                WAM: 82.125
                            </p>
                            <br/>
                            <p className="noto-serif-resume-subtext">The Hong Kong Polytechnic University (2019 - 2023)</p>
                            <p className="noto-serif-resume-text-bold">
                                BSc (HONS) Financial Technology & Artificial Intelligence (Secound Class Honours, Division 1)
                            </p>
                            <p className="noto-serif-resume-text">
                                GPA: 3.03
                            </p>
                        </Grid>
                        <Grid size={10}>
                            <br/><br/><br/><br/>
                            <h1 className="noto-serif-resume-title">Working Experience</h1>
                            <p className="noto-serif-resume-subtext">Automated Systems (H.K.) Limited (Jan - Aug 2022)</p>
                            <br/>
                            <p className="noto-serif-resume-text-bold">The eformss system (Education Bureau)</p>
                            <p className="noto-serif-resume-text">
                                • Used ReactJs to perform components development
                            </p>
                            <p className="noto-serif-resume-text">
                                • Used React-Hook-Forms & React-Redux to perform multi-layer forms development
                            </p>
                            <p className="noto-serif-resume-text">
                                • Used CSS to optimize system layout
                            </p>
                            <p className="noto-serif-resume-text">
                                • Used Gitlab, Jira & SourceTree to perform DevOps & version control
                            </p>
                            <br/>
                            <p className="noto-serif-resume-text-bold">The eTAX system (Inland Revenue Department)</p>
                            <p className="noto-serif-resume-text">
                                • Used CSS & JavaScript to perform debugging
                            </p>
                            <p className="noto-serif-resume-text">
                                • Support team members with reports & documentations
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}