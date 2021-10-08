import { useState } from "react";

const LoadScript = (url, id, deferloading) => {
  let promise = new Promise(function (resolve, reject) {
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

const microAppScript = async (manifestPath, namespace, deferloading) => {
  const response = await fetch(manifestPath, { mode: "cors" });
  const data = await response.json();
  const promises = [];

  for (var key of Object.keys(data)) {
    if (key.match(/\.[0-9a-z]+$/i)[0] == ".js") {
      promises.push(LoadScript(data[key], `${key}-${namespace}`, deferloading));
    }
  }
  return Promise.allSettled(promises);
};


const useScriptLoader = (
  url,
  selector,
  deferloading,
  namespace,
  appdata,
) => {
  const [loaded, setLoaded] = useState(false);
  const load = async () => {
    await microAppScript(url, namespace,deferloading);
    if (window && window[namespace]) window[namespace].default.render(selector, appdata);
    setLoaded(true);
    
  };
  return { loaded, load };
};

export default useScriptLoader;
