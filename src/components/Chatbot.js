import React, { useEffect } from "react";

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '677957dd11ca569c18c18c6f' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production'
            });
          }
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="voiceflow-chat-widget" />;
};

export default Chatbot;
