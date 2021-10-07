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
}) => {
  const { loaded, microAppUrlResolver } = useScriptLoader(
    url,
    selector,
    deferloading,
    namespace,
    appdata
  );

  useEffect(() => {
    microAppUrlResolver().then(() => console.log("Loaded"));
  });

  return (
    <>
      <div>{loaded ? "" : loading}</div>
      <div id={selector}></div>
    </>
  );
};
Loader.propTypes = {
  url: PropTypes.string.isRequired,
  selector: PropTypes.string.isRequired,
  loading: PropTypes.node,
  deferloading: PropTypes.bool,
  namespace: PropTypes.string.isRequired,
  appdata: PropTypes.object,
};
Loader.defaultProps = {
  deferloading: true,
  loading: <p> Loading </p>,
  appdata: {},
};

export default Loader;
