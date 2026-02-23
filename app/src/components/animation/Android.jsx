import React, { useState, useEffect } from 'react';
import '../../css/Android.css';

export function Android() {
  const isClient = typeof window !== 'undefined';
  const [showDevices, setShowDevices] = useState(false);
  const [isMobile, setIsMobile] = useState(isClient ? window.innerWidth <= 768 : false);

  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  const handleStartClick = () => setShowDevices(true);
  const handleStopClick = () => setShowDevices(false);

  return (
    <div className="devices-container">
      <div className="hero-section">
        <div className="buttons-container">
          <button
            className={`glass-button start-button ${showDevices ? 'hidden' : ''}`}
            onClick={handleStartClick}
            aria-label="Abrir experiência"
            aria-expanded={showDevices}
            disabled={showDevices}
          >
            <span className="button-text">Open Experience</span>
          </button>

          <button
            className={`glass-button stop-button ${showDevices ? 'visible' : 'hidden'}`}
            onClick={handleStopClick}
            aria-label="Fechar experiência"
            aria-expanded={!showDevices}
          >
            <span className="button-text">Close</span>
          </button>
        </div>
      </div>

      <div className={`devices-section ${showDevices ? 'visible' : 'hidden'}`}>
        <div className="devices-grid">
          <h1 className="gradient-text">
            Globally connected, <br />
            <span className="highlight">cross-platform</span>
          </h1>

          <div className={`devices-showcase ${isMobile ? 'is-mobile' : ''}`}>
            <div className="device-wrapper" data-device="iphone">
              <div className="device iphone" aria-label="iPhone">
                <div className="dynamic-island" />
                <div className="iphone-screen">
                  <div className="screen-content">
                    <div className="app-grid">
                      <span className="app-dot" />
                      <span className="app-dot" />
                      <span className="app-dot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!isMobile && (
              <div className="device-wrapper" data-device="macbook">
                <div className="device macbook" aria-label="MacBook">
                  <div className="macbook-screen">
                    <div className="screen-content">
                      <div className="code-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                  <div className="macbook-base">
                    <div className="keyboard" />
                    <div className="trackpad" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}