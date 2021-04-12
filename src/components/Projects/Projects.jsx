import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import classNames from 'classnames/bind';

const Projects = () => {
  const { gameProjects } = useContext(PortfolioContext);
  const { appProjects } = useContext(PortfolioContext);
  const { dotnetProjects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [showGames, setShowGames] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showDotnet, setShowDotnet] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const getProjects = (projects) => (
      projects.map((project) => {
        const { title, info, info2, platform, url, repo, img, id } = project;
        return (
          <Row key={id}>
            <Col lg={4} sm={12}>
              <Fade top
              /*left={isDesktop}*/ bottom={isMobile} duration={500} /*delay={500}*/
                distance="50px">                                                                      
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                  <div>
                    <p>
                      {info ||
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                    </p>
                    <p className="mb-4">{info2 || ''}</p>
                    <p className="mb-4">Plataforma: {platform || ''}.</p>
                  </div>
                  {(<a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--project"                                                
                    href={url || '#!'}>              
                    Página Oficial
                  </a>)}
    
                  {repo && (
                    <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main"                                                                              
                      href={repo} >                        
                    Repositório
                    </a>
                  )}
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade top
                //right={isDesktop}
                bottom={isMobile}
                duration={500}
                //delay=1000
                distance="50px"
              >
                <div className="project-wrapper__image">                           
                  <div data-tilt>
                    <ProjectImg alt={title} filename={img}/>
                  </div>          
                </div>
              </Fade>
            </Col>
          </Row>
        );
      })
    )

  const games = getProjects(gameProjects);
  const apps = getProjects(appProjects);
  const dotnet = getProjects(dotnetProjects);
  
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projetos" />
            <div className={classNames({"show-hide-btns": true, 
            "go-left": showGames, "go-right": !showGames})}>                
                  <p target="_blank" rel="noopener noreferrer" 
                    className="cta-btn cta-btn--project toggle-projects" 
                    onClick={() => setShowGames(!showGames)}>
                    <img src={require("../../../assets/unity-icon.png")}/>
                    <span>Games</span>
                  </p>              
            </div>
            {showGames && games}

            <div className={classNames({"show-hide-btns": true, 
            "go-left": showApps, "go-right": !showApps})}>
                <p target="_blank" rel="noopener noreferrer" 
                  className="cta-btn cta-btn--project toggle-projects" 
                  onClick={() => setShowApps(!showApps)}>
                  <img src={require("../../../assets/react.png")}/>
                  <span>Apps</span>
                </p>
            </div>                                       
            
            {showApps && apps}

            <div className={classNames({"show-hide-btns": true, 
            "go-left": showDotnet, "go-right": !showDotnet})}>
                <p target="_blank" rel="noopener noreferrer" 
                  className="cta-btn cta-btn--project toggle-projects" 
                  onClick={() => setShowDotnet(!showDotnet)}>
                  <img src={require("../../../assets/vs.png")}/>
                  <span>.NET</span>
                </p>
            </div>                                       
            
            {showDotnet && dotnet}
        </div>
      </Container>
    </section>
  );
};

export default Projects;