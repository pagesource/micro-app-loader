import {  useState } from "react";

const LoadScript = (url, key, deferloading, namespace) => {
  let promise = new Promise(function (resolve, reject) {
    const id = `${key}-${namespace}`;

    const existingScript = document.getElementById(id);
    if (existingScript) {
      return resolve("ok");
    }
    const script = document.createElement("script");
    script.src = url;
    script.id = id;
    script.defer = deferloading;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("ok");
    };
  });
  return promise;
};

const useScriptLoader = (
  manifestPath,
  selector,
  deferloading,
  namespace,
  appdata
) => {
  const [loaded, setLoaded] = useState(false);
  const microAppUrlResolver = async () => {
    const response = await fetch(manifestPath, { mode: "cors" });
    const data = await response.json();
    const promises = [];

    for (var key of Object.keys(data)) {
      if (key.match(/\.[0-9a-z]+$/i)[0] == ".js") {
        promises.push(LoadScript(data[key], key, deferloading, namespace));
      }
    }
    Promise.allSettled(promises).then((value) => {
      if (window) {
        window[namespace].default.render(selector, appdata);
        setLoaded(true);
      }
    });
  };
  return { loaded, microAppUrlResolver };
};

export default useScriptLoader;
