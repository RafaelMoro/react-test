import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import planet from './assets/planet.webp';
import space from './assets/space.webp';

function App() {
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${space})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${planet})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
        >
          <h2 style={{ textAlign: 'center' }}>Welcome to Parallax example</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
        >
          <h3 style={{ textAlign: 'center' }}>Web development is fun!</h3>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
