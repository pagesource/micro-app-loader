import { useState } from "react";

const LoadScript = (url, deferloading) => {
  let promise = new Promise(function (resolve, reject) {
    const id = window.btoa(url);
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
      resolve('ok')
    };
    script.onerror=()=>{
      resolve('ok')
    }

  });
  return promise;
};

const microAppScript = async (manifestPath, deferloading) => {
  try {
    const response = await fetch(manifestPath, { mode: "cors" });
    if (!response.ok) return;
    const data = await response.json();
    const promises = [];

    for (var key of Object.keys(data)) {
      if (key.match(/\.[0-9a-z]+$/i)[0] == ".js") {
        promises.push(LoadScript(data[key], deferloading));
      }
    }
    return Promise.allSettled(promises);
  } catch (err) {
    console.log(err);
    return;
  }
};

const loader = async (url, deferloading) => {
  if (url.match(/\.[0-9a-z]+$/i)[0] == ".js") {
    const id = encodeURI(url);
    await LoadScript(url, deferloading);
  } else {
    await microAppScript(url, deferloading);
  }
};

const useScriptLoader = (
  url,
  selector,
  deferloading,
  namespace,
  appdata,
  id
) => {
  const [loaded, setLoaded] = useState(false);
  const load = async () => {
    await loader(url, deferloading);
    setLoaded(true);
    if (window && namespace in window) {
      if (selector != null && document.getElementById(selector)) {
        window[namespace].default.render(selector, appdata);
      } else {
        console.log(namespace);
        window[namespace].default.render(id, appdata);
      }
    }
  };
  return { loaded, load };
};

export default useScriptLoader;
