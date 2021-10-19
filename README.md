# REACT-MICRO-APP-LOADER
It is a react component, mainly used to load the other micro react apps and webcomponents using maifest files, solve the problems of cross-team collaboration and reduce the build dependecy .
## Goals
To compose multiple independently delivered front-end applications into a whole, and to decompose front-end applications into some smaller and simpler applications that can be "independently developed", "independently tested" and "independently deployed", while still appearing to users as cohesive individual products.

## Getting Started

### To load a react app
>####  <Loader url='http://localhost:5001/manifest.json' identifier = "footerloader" loading={\<h3>loading ...\</h3>} appdata= {{"count":count} }namespace='footerApp' />

### To load a web component
>#### <Loader url='http://localhost:5002/counter.js' identifier= "webcomponentloader" loading={\<h3>loading ...\</h3>}>
>#### \<web-component name-attribute={count}>\</web-component> 
>#### \</Loader> 

### Attributes 
>***appdata*** contains data you want to pass to your micro app as object.</br>
>***namespace*** name under which your exporting the app(Required only in case of microapp).</br>
>***selector*** id given to the div on which app is loaded.</br>
>***loading*** element to show while loading.</br>
>***url*** url of the mainfest.json file(Required).</br>
>***deferloading*** it is boolean to load script async or non-async,true by default.
>***identifier*** id for the loader(Required)

