import React, { useEffect} from "react";

import PropTypes from "prop-types";
import useScriptLoader from "../../customhook/useScriptLoader.js";

const Loader = ({
  url,
  selector,
  loading,
  deferloading,
  namespace,
  appdata,
  children
}) => {
  const { loaded,load} = useScriptLoader(
    url,
    selector,
    deferloading,
    namespace,
    appdata,
  );

  useEffect(() => {
   load().then(() => console.log("Loaded"));
  });

  return (
    <>
      <div>{loaded ? "" : loading}</div>
      <div id={selector}>{children}</div>
    </>
  );
};
Loader.propTypes = {
  url: PropTypes.string.isRequired,
  selector: PropTypes.string.isRequired,
  loading: PropTypes.node,
  deferloading: PropTypes.bool,
  namespace: PropTypes.string.isRequired,
  appdata: PropTypes.object
  
};
Loader.defaultProps = {
  deferloading: true,
  loading: <p> Loading </p>,
  appdata: {}
};

export default Loader;
