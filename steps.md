# Steps

1. Install react-spring/parallax

```
pnpm i @react-spring/parallax @react-spring/web
```

2. Add two images

3. Import Parallax and ParallaxLayer

```jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
```

4. Wrap your components inside Parallax and ParallaxLayer
   It's important to set the pages prop and the offset.
   The offset prop determines where the layer will be at when scrolled to (0=start, 1=1st page, ...)

```jsx
<Parallax pages={2}>
  <ParallaxLayer>
    <div className="welcome-text">
      <h2>Welcome to Parallax example</h2>
    </div>
  </ParallaxLayer>

  <ParallaxLayer offset={1}>
    <div className="web-text">
      <h3>Web development is fun!</h3>
    </div>
  </ParallaxLayer>
</Parallax>
```

5. Set the speed prop in the Parallax Layer to scroll at different speeds

```jsx
<div className="App">
  <Parallax pages={2}>
    <ParallaxLayer speed={1}>
      <div className="welcome-text">
        <h2>Welcome to Parallax example</h2>
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={0.5}>
      <div className="web-text">
        <h3>Web development is fun!</h3>
      </div>
    </ParallaxLayer>
  </Parallax>
</div>
```

6. Add background image to a parallax layer using style prop

```jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import planet from "./assets/planet.webp";
import space from "./assets/space.webp";

<div className="App">
  <Parallax pages={2}>
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        backgroundImage: `url(${planet})`,
        backgroundSize: "cover",
      }}
    >
      <div className="welcome-text">
        <h2>Welcome to Parallax example</h2>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={0.5}
      style={{
        backgroundImage: `url(${space})`,
        backgroundSize: "cover",
      }}
    >
      <div className="web-text">
        <h3>Web development is fun!</h3>
      </div>
    </ParallaxLayer>
  </Parallax>
</div>;
```

7. Add factor
   The factor is the size of the page.
   By default, each layer will have a factor of 1. Means that the size is equal to one page.

```jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import planet from "./assets/planet.webp";
import space from "./assets/space.webp";

<div className="App">
  <Parallax pages={2}>
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        backgroundImage: `url(${planet})`,
        backgroundSize: "cover",
      }}
      factor={2}
    >
      <div className="welcome-text">
        <h2>Welcome to Parallax example</h2>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={0.5}
      style={{
        backgroundImage: `url(${space})`,
        backgroundSize: "cover",
      }}
      factor={4}
    >
      <div className="web-text">
        <h3>Web development is fun!</h3>
      </div>
    </ParallaxLayer>
  </Parallax>
</div>;
```
