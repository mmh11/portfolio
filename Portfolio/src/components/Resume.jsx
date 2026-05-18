import { useState } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image1 from '../assets/1761372917445.jpg'
import Image2 from '../assets/1761952471443.jpg'

export default function Resume() {
    const [previewImage, setPreviewImage] = useState(null)
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const previewAltText = previewImage === Image1
        ? "Verde project award graphic for Monash PG Industry Experience Expo Winner 2025"
        : "Postgraduate Industry Experience Industry Night group photo with Verde team members"

    const handleImageOpen = (imageSrc) => {
        setPreviewImage(imageSrc)
        setIsPreviewOpen(true)
    }

    const handleImageClose = () => {
        setIsPreviewOpen(false)
    }

    const handleDialogExited = () => {
        setPreviewImage(null)
    }

    return (
        <>
            <div className="resume-div-wrap">
                <Box>
                    <Grid container spacing={0}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Grid size={10}>
                                <h1 className="noto-serif-resume-title">Sze Ming (Martin) Hui</h1>
                                <p className="noto-serif-resume-subtext">Granted 5 Years Working VISA (485) till 2031</p>
                                <br/>
                                <p className="noto-serif-resume-text">
                                    Cybersecurity graduate with hands-on experience designing secure network architectures, 
                                    implementing cloud-based backend services, and conducting structured penetration testing. 
                                    Experienced in DMZ design, VPN configuration, AWS Lambda development, and security risk assessment. 
                                    Seeking a junior cybersecurity or cloud security role to apply practical defensive and offensive security skills in production environments.
                                </p>
                            </Grid>
                            <Grid size={10}>
                                <br/><br/><br/>
                                <h1 className="noto-serif-resume-title">Recent Projects</h1>
                                
                                <p className="noto-serif-resume-subtext">Network Security Design & Attack Simulation</p>
                                <p className="noto-serif-resume-text-bold">Network Security Unit Final Assessment (2025)</p>
                                <br/>
                                <p className="noto-serif-resume-text">
                                    &bull; Designed and implemented a secure multi-campus network in GNS3, including firewalls, BGP routing, DNS, CA, Web, SMTP, and SSH servers.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Configured IPSec site-to-site and remote access VPNs with ESP encryption and validated encrypted traffic using Wireshark.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Performed BGP prefix hijacking attack simulation and implemented defensive countermeasures to mitigate traffic redirection.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Designed and enforced firewall policies with implicit deny rules and service-specific access controls.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Deployed and configured Snort IDS to detect TCP port scanning and DoS attacks using custom detection rules.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Conducted security analysis identifying potential firewall bypass techniques and proposed architectural improvements.
                                </p>

                                <br/><br/><br/>
                                <p className="noto-serif-resume-subtext">Verde - Personalised Carbon Footprint Tracker</p>
                                <p className="noto-serif-resume-text-bold">
                                    <a href="https://eportfolio.monash.edu/view/view.php?t=852256f850e2a509baaf" target="_blank" rel="noopener noreferrer">Monash PG Industry Expo Winner (2025) <OpenInNewIcon sx={{ fontSize: '25px', verticalAlign: 'text-bottom' }} /></a>
                                </p>
                                <br/>
                                <p className="noto-serif-resume-text">
                                    &bull; Authored a formal security plan outlining Data Flow Diagrams, risk assessment, data protection strategies, and mitigation controls.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Conducted regular penetration testing to identify vulnerabilities and implemented remediation measures.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Built secure backend APIs & Lambda functions with proper input validation and user authentication & authorization to protect sensitive user data.
                                </p>
                                <p className="noto-serif-resume-text">
                                    &bull; Considered privacy principles in handling behavioural data and implemented safeguards against common web vulnerabilities.
                                </p>
                                
                                <br/><br/><br/>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item size={{ xs: 12, md: 6.6 }}>
                                        <img
                                            className="img-size"
                                            src={Image1}
                                            alt="Verde project award graphic for Monash PG Industry Experience Expo Winner 2025"
                                            onClick={() => handleImageOpen(Image1)}
                                            style={{ cursor: 'zoom-in' }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 0, md: 0.3 }}/>
                                    <Grid item size={{ xs: 12, md: 5 }}>
                                        <img
                                            className="img-size"
                                            src={Image2}
                                            alt="Postgraduate Industry Experience Industry Night group photo with Verde team members"
                                            onClick={() => handleImageOpen(Image2)}
                                            style={{ cursor: 'zoom-in' }}
                                        />
                                    </Grid>
                            </Grid>
                                
                                <br/><br/><br/>
                            </Grid>
                            </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Grid size={10}>
                                <h1 className="noto-serif-resume-title">Contact</h1>
                                <br/>
                                <Grid container spacing={2}>
                                    <Grid spacing={12}>
                                        <p className="noto-serif-resume-text-nojust"><LocalPhoneIcon className="mui-icon"/> (61) 0434321101</p>
                                        <p className="noto-serif-resume-text-nojust"><EmailIcon className="mui-icon"/> huim13a@gmail.com</p>
                                    </Grid>
                                    <Grid spacing={12}>
                                        <p className="noto-serif-resume-text-nojust"><LinkedInIcon className="mui-icon"/><a href="https://www.linkedin.com/in/sze-ming-hui-baa202225/" target="_blank" rel="noopener noreferrer"> Sze Ming (Martin) Hui</a></p>
                                        <p className="noto-serif-resume-text-nojust"><GitHubIcon className="mui-icon"/><a href="https://github.com/mmh11" target="_blank" rel="noopener noreferrer"> mmh11</a></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={10}>
                                <br/><br/><br/><br/>
                                <h1 className="noto-serif-resume-title">Education</h1>
                                
                                <p className="noto-serif-resume-subtext">Monash University (2024 - 2025)</p>
                                <p className="noto-serif-resume-text-bold">
                                    Master of Cybersecurity (Awarded with distinction)
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    GPA: 3.625
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    WAM: 82.125
                                </p>
                                <br/>
                                <p className="noto-serif-resume-subtext">The Hong Kong Polytechnic University (2019 - 2023)</p>
                                <p className="noto-serif-resume-text-bold">
                                    BSc (HONS) Financial Technology & Artificial Intelligence (Secound Class Honours, Division 1)
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    GPA: 3.03
                                </p>
                            </Grid>
                            <Grid size={10}>
                                <br/><br/><br/><br/>
                                <h1 className="noto-serif-resume-title">Working Experience</h1>
                                <p className="noto-serif-resume-subtext">Automated Systems (H.K.) Limited (Jan - Aug 2022)</p>
                                <br/>
                                <p className="noto-serif-resume-text-bold">The eformss system (Education Bureau)</p>
                                <p className="noto-serif-resume-text-nojust">
                                    &bull; Used ReactJs to perform components development
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    &bull; Used React-Hook-Forms & React-Redux to perform multi-layer forms development
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    &bull; Used CSS to optimize system layout
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    &bull; Used Gitlab, Jira & SourceTree to perform DevOps & version control
                                </p>
                                <br/>
                                <p className="noto-serif-resume-text-bold">The eTAX system (Inland Revenue Department)</p>
                                <p className="noto-serif-resume-text-nojust">
                                    &bull; Used CSS & JavaScript to perform debugging
                                </p>
                                <p className="noto-serif-resume-text-nojust">
                                    &bull; Support team members with reports & documentations
                                </p>
                            </Grid>
                            <Grid size={10}>
                                <br/><br/><br/><br/>
                                <h1 className="noto-serif-resume-title">Skills & Tools</h1>
                                <br/>

                                <Grid container spacing={0}>
                                    <Grid size={6}>
                                        <p className="noto-serif-resume-text-bold">
                                            Kali Linux
                                        </p>
                                        <p className="noto-serif-resume-text-nojust">
                                            &bull; Nmap 
                                            <br/>
                                            &bull; Metasploit
                                            <br/>
                                            &bull; Wireshark
                                            <br/>
                                            &bull; Burpsuite
                                        </p>
                                        <br/>
                                        <p className="noto-serif-resume-text-bold">
                                            GNS3 (Network Config)
                                        </p>
                                        <p className="noto-serif-resume-text-nojust">
                                            &bull; BGP
                                            <br/>
                                            &bull; VPN
                                            <br/>
                                            &bull; Firewall
                                            <br/>
                                            &bull; DMZ Design
                                        </p>
                                        <br/>
                                    </Grid>

                                    <Grid size={6}>
                                        <p className="noto-serif-resume-text-bold">
                                            AWS
                                        </p>
                                        <p className="noto-serif-resume-text-nojust">
                                            &bull; IAM & Cognito
                                            <br/>
                                            &bull; API Gateway & WAF
                                            <br/>
                                            &bull; VPC
                                            <br/>
                                            &bull; Lambda & Aurora (MySQL)
                                        </p>
                                        <br/>
                                        <p className="noto-serif-resume-text-bold">
                                            Others
                                        </p>
                                        <p className="noto-serif-resume-text-nojust">
                                            &bull; Security Planning
                                            <br/>
                                            &bull; Pentest Reporting & Threat Modeling
                                            <br/>
                                            &bull; ReactJs & Python
                                        </p>
                                    </Grid>
                            </Grid>

                            </Grid>
                            </Grid>
                        
                    </Grid>
                </Box>
            </div>
            <Dialog
                open={isPreviewOpen}
                onClose={handleImageClose}
                TransitionProps={{ onExited: handleDialogExited }}
                maxWidth="lg"
                fullWidth
            >
                <DialogContent sx={{ p: 1 }}>
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt={previewAltText}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    ) : null}
                </DialogContent>
            </Dialog>
        </>
    )
}




