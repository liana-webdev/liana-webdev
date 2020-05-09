import React, { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/src/i18n';
import './home.scss';
import { Link } from 'react-router-dom';
import Routes from '@/src/Routes';
type HomePageProps = {} & ComponentProps<'div'>;
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="lang container text-center mt-2">
        <a onClick={() => i18n.changeLanguage('ru')}>Русский</a>
        <a onClick={() => i18n.changeLanguage('en')}>English</a>
      </div>
      <div className="motion">
        <div id="main" className="container">
          <div id="brand" className="row ">
            <div className="text-center py-3 col-md-6 align-self-center">
              <img
                className="logo"
                // style="height: 100px;"
                src="img/my_logo_lc.png"
                alt=""
              />
              {/* <h2 style="color: #ff1f1f;" className="h2 who pb-4">LIANA</h2> */}
              {/* <h1 style="color: #ffffff; font-weight: 900;" className="who display-4">Front-End Web Developer</h1> */}
              <p className="lead pt-4 text-white">
                {t(
                  'Hello, my name is Liana. I design and build beautiful websites.'
                )}
              </p>
            </div>

            <div
              id="navigation"
              className="text-center
    col-md-6"
            >
              <ul>
                <li className="d-inline-block zoom-box">
                  <Link to={Routes.WORK}>{t('my work')}</Link>
                </li>
                <br />
                <li className="d-inline-block zoom-box">
                  <Link to={Routes.CONTACT}>{t('contact me')}</Link>
                </li>
                <li className="text-white d-inline-block zoom-box">
                  <a className="text-white" href="index.html">
                    {t('home page')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="text-cetner container p-3">
        <div
          className="card text-white"
          // style="background-color: transparent;"
        >
          <div className="card-body about-me-title mb-4">
            <a href="projects.html">
              <h5 className="overlay text-center">Learn More</h5>
              <div className="blur-hover">
                <div className="blur-in">
                  <h4 className="card-title  p-1 h1">
                    <i className="fas fa-arrow-alt-circle-right pl-1"></i>
                    {t('Self-taught')}
                  </h4>
                  <h6 className="card-subtitle text-white px-5 h2">
                    {t(`I am a self-taught front-end web developer who seeks more
                    knowledge everyday. Constantly learning something new keeps
                    me inspired for more creative and professional work.`)}
                  </h6>
                </div>
              </div>
            </a>
          </div>

          <div className="card-body about-me-title  mb-4">
            <a href="projects.html">
              <h5 className="overlay text-center">Learn More</h5>
              <div className="blur-hover">
                <div className="blur-in">
                  <h4 className="card-title  p-1 h1">
                    <i className="fas fa-arrow-alt-circle-right pl-1"></i>
                    {t('Creative')}
                  </h4>
                  <h6 className="card-subtitle text-white px-5 h2">
                    {t('I')}
                    <u>{t('love')}</u> {t('making things look')}
                    <span className="rainbow font-weight-bold">
                      {t('beautiful')}
                    </span>
                    {t(
                      '. It is my passion to develop not only functional, but'
                    )}
                    <i>{t('catchy')}</i>,
                    {t(' good looking user interfaces and experiences.')}
                  </h6>
                </div>
              </div>
            </a>
          </div>

          <div className="card-body about-me-title">
            <Link to={Routes.WORK}>
              <h5 className="overlay text-center">{t('Learn More')}</h5>
              <div className="blur-hover">
                <div className="blur-in">
                  <h4 className="card-title  p-1 h1">
                    <i className="fas fa-arrow-alt-circle-right pl-1"></i>
                    {t('Recognised')}
                  </h4>
                  <h6 className="card-subtitle text-white px-5 h2">
                    {t(`I always offer my clients the best I can do. They appreciate
                    my approach to details, honesty and responsobility.`)}
                  </h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
