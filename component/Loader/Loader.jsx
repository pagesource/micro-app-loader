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
  identifier,
  children
}) => {
 
  const { loaded,load} = useScriptLoader(
    url,
    selector,
    deferloading,
    namespace,
    appdata,
    identifier
  );

  useEffect(() => {
   load().then(() => console.log("Loaded"));
  });

  return (
   
      <div id={identifier}>{loaded ? children : loading}</div>
    
  );
};
Loader.propTypes = {
  url: PropTypes.string.isRequired,
  selector: PropTypes.string,
  loading: PropTypes.node,
  deferloading: PropTypes.bool,
  namespace: PropTypes.string,
  appdata: PropTypes.object,
  identifier:PropTypes.string.isRequired
  
};
Loader.defaultProps = {
  deferloading: true,
  loading: <p> Loading </p>,
  appdata: {},
  selector:null,
  namespace:null
};

export default Loader;






