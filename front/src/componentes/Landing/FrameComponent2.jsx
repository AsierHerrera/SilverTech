import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const onGoToTopContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image8']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={`frame-wrapper3 ${className}`}>
      <div className="cmo-te-est-frenando-la-tecno-parent">
        <h1 className="cmo-te-est">
          ¿Cómo te está frenando la tecnología que usas actualmente?
        </h1>
        <div className="content-link">
          <div className="gototop" onClick={onGoToTopContainerClick}>
            <div className="rectangle-group">
              <div className="frame-item" />
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/group-128.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
