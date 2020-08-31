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
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [showGames, setShowGames] = useState(false);
  const [showApps, setShowApps] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const gameProjects = projects.map((project) => {
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
              <a
                href={url || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <ProjectImg alt={title} filename={img}/>
                  </div>
                </Tilt>
              </a>
            </div>
          </Fade>
        </Col>
      </Row>
    );
  })
  
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
            {showGames && gameProjects}

            <div className={classNames({"show-hide-btns": true, 
            "go-left": showApps, "go-right": !showApps})}>
                <p target="_blank" rel="noopener noreferrer" 
                  className="cta-btn cta-btn--project toggle-projects" 
                  onClick={() => setShowApps(!showApps)}>
                  <img src={require("../../../assets/react.png")}/>
                  <span>Apps</span>
                </p>
            </div>
            {showApps && gameProjects}
        </div>
      </Container>
    </section>
  );
};

export default Projects;