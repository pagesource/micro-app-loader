import React, { useEffect } from "react";
import { LoaderProps } from "./Loader.type.js";
import useScriptLoader from "../../customhook/useScriptLoader";

const Loader:React.FC<LoaderProps> = ({
  url,
  selector,
  loading= <p> Loading </p>,
  deferloading,
  namespace,
  appdata,
  identifier,
  children,
}) => {
  const { loaded, load } = useScriptLoader(
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

  return <div id={identifier} data-testid="loader-testid">{loaded ? children : loading}</div>;
};

export default Loader;
