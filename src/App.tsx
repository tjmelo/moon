import React, { useEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom';
import Scope from "./components/scope";
import "./config/i18n";
import "./stylus/_theme.styl";
import { rootStyle } from './utils'

const App = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shadowRootRef, setShadowRootRef] = useState<ShadowRoot | null>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const shadowRoot = sectionRef.current.attachShadow({ mode: 'open' });
      const event = new CustomEvent("shadowroot-created");
      sectionRef.current.dispatchEvent(event);
      setShadowRootRef(shadowRoot)

      const styleElement = rootStyle();
      styleElement && shadowRoot.appendChild(styleElement);
    }
  }, []);

  return (
    <section id="tmx-moon" ref={sectionRef}>
      {shadowRootRef &&
        createPortal(
          <Scope />,
          shadowRootRef
        )}
    </section>
  );
};

export default App;
