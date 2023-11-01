import React, { useEffect } from 'react';
import { PopupButton } from 'react-calendly';

export default function SimpleCalendly({ firstTitle, secondTitle, text, buttonText }) {
  const onClick = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/eugene-venger/30min-1' });
    return false;
  };

  useEffect(() => {
    const calendlyScript = document.createElement('script');
    calendlyScript.id = 'calendlyScript';
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.type = 'text/javascript';
    calendlyScript.async = true;
    document.head.appendChild(calendlyScript);
    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(document.getElementById('calendlyScript'));
    };
  }, []); // Empty array ensures this runs on mount and unmount only

  return (
    <div className="py-12 md:py-16 lg:py-12 ">
      <div className="relative isolate overflow-hidden bg-gray-900 ">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {firstTitle}
              <br />
              {secondTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">{text}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <button
                onClick={onClick}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {buttonText}
              </button> */}
              <PopupButton
                url="https://calendly.com/eugene-venger/30min-1"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById('root')}
                text="Click here to schedule!"
              />
              {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="rgb(255, 0, 102)" />
              <stop offset={1} stopColor="rgb(16 16 16 / 66%)" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
