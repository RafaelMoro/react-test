# Steps

1. Install react-spring/parallax

```
pnpm i @react-spring/parallax
```

2. Add two images

3. Import Parallax and ParallaxLayer

```jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
```

4. Wrap your components inside Parallax and ParallaxLayer
   It's important to set the pages prop and the offset.

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
