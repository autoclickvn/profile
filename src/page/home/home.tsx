import LoadableUI from 'layout/loadable-ui';
import { useState } from 'react';
import Loadable from 'react-loadable';
import { HomeStyle } from './home.style';

const Project = Loadable({
  loader: () => import('page/project'),
  loading: LoadableUI,
});

const Skill = Loadable({
  loader: () => import('page/skill'),
  loading: LoadableUI,
});

const Information = Loadable({
  loader: () => import('page/info'),
  loading: LoadableUI,
});

const Experience = Loadable({
  loader: () => import('page/exp'),
  loading: LoadableUI,
});

const Contact = Loadable({
  loader: () => import('page/contact'),
  loading: LoadableUI,
});

const Home: React.FC = () => {
  const [showContent, setShowContent] = useState<number>(0);

  return (
    <HomeStyle className="flex items-center justify-center h-full relative">
      {showContent !== 0 && (
        <div
          onClick={() => setShowContent(0)}
          className="h-screen w-full fixed top-0 left-0 bg-gray-700 opacity-70 z-10"
        />
      )}

      <img src={`${process.env.PUBLIC_URL}/assets/home/img-island.webp`} alt="island" />

      <div className="absolute" style={{ left: '50%', top: '45%' }}>
        <button onClick={() => setShowContent(4)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/pin-map-info.webp`}
            className="pin-map w-16 lg:w-24"
            alt="sea shells"
          />
        </button>
      </div>

      <div className="absolute" style={{ left: '20%', top: '48%' }}>
        <button onClick={() => setShowContent(3)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/pin-map-skill.webp`}
            className="pin-map w-16 lg:w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div className="absolute" style={{ right: '17%', top: '45%' }}>
        <button onClick={() => setShowContent(5)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/pin-map-project.webp`}
            className="pin-map w-16 lg:w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div className="absolute" style={{ left: '38%', top: '3%' }}>
        <button onClick={() => setShowContent(1)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/pin-map-exp.webp`}
            className="pin-map w-16 lg:w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <div className="absolute" style={{ right: '24%', top: '5%' }}>
        <button onClick={() => setShowContent(2)} className="outline-none">
          <img
            src={`${process.env.PUBLIC_URL}/assets/home/pin-map-contact.webp`}
            className="pin-map w-16 lg:w-24 cursor-pointer"
            alt="umbrella"
          />
        </button>
      </div>

      <Experience isShow={showContent === 1} />
      <Contact isShow={showContent === 2} />
      <Skill isShow={showContent === 3} />
      <Information isShow={showContent === 4} />
      <Project isShow={showContent === 5} />
    </HomeStyle>
  );
};

export default Home;
