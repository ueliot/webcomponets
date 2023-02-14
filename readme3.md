# LINKS y NOTAS  

- https://www.youtube.com/watch?v=3IDoPAaW4Bg   (Shadow DOM)
- https://www.youtube.com/watch?v=cdJnn4LloR0   otro implementacion de webcomponentes
- https://github.com/vanillawc    //vanilla webcomponents 
- https://github.com/Polydile/dile-components   //polydile webcomponets
- https://www.youtube.com/watch?v=3S_up4XQX5E&list=PLIcuwIrm4rKfVEWId6In6rzVY6Xum0y9u&index=11  //video sobre dilecomponents
- https://dile-components.polydile.com/ 
- https://esbuild.github.io/getting-started/
- https://dev.to/ushieru/esbuild-desarrollo-sin-dolor-5hmf
- https://midu.dev/empaquetadores-de-aplicaciones-web-2021/
- https://blog.logrocket.com/building-web-components-with-webc-vanilla-javascript/
- https://www.section.io/engineering-education/how-to-create-a-web-component-with-vanilla-javascript/
- https://www.youtube.com/watch?v=gfvFEBXMVSU   //contruyendo un web component
- https://www.youtube.com/playlist?list=PLIcuwIrm4rKfVEWId6In6rzVY6Xum0y9u  webcomponents

  

las librerias las podemos usar mediante cdns incrustadas en nuestra web o descargandolas\
al igual que nuestros script en local\
  

ojo type=module src="ruta-del-cdn-o-archivo.min.js" en el index.html\
siempre funciona a travez de http\
en otras palabras necesita un servidor web que cargue index.html en\
caso contrario no funcionará el type=module .\
  

npm (gestor de dependencias) nos ayuda a descargar librerias y frameworks js, estas se instalan en el directorio \
local del proyecto o global (para todo el ordenador), si usamos librerias para desarrollo se instalan con \
la opcion -dev esto no ira a produccion ya que solo es una herramienta de ayuda.\

-

cuando usamos import  en un script.js este debe llamar a la ruta donde esta el archivo js (Siempre)\
ejm: descargamos un webcomponent en npm vamos a https://github.com/vanillawc, escogemos el componente\
y vemos como instalarlo  npm i @vanillawc/wc-bullet-chain\

-
primero creamos la estructura del proyecto con:\
```
>npm init -y  //para decirle todo  si
```
creamos index.js \
usamos import 'nombre_de_la_libreria' en nuestro ejemplo sería: \
-
funciona asi: import '../node_modules/@vanillawc/wc-bullet-chain/index.min.js'\
import '@vanillawc/wc-bullet-chain'\
cuando usamos npm estamos acostumbrados a llamarlos  asi, por su nombre de instalacion de la lib\
si no se tiene una herramienta empaquetadora como wenpack, snowpack u otro como sbuild\
no cargara, ya que la herramienta es la que transforma el nombre del import "nombre" \
con la ruta completa donde se encuentra.  Estos herramientan nos ayudan a eso.\
  

Para usar un web componente:\
```
>npm init -y
>npm i @vanillawc/wc-bullet-chain
//usaryo usare esbuil
>npm install --save-exact esbuild

```
- ====================================
## Combinacion de teclas en chromebook
- https://www.nextpit.es/guia-completa-de-atajos-de-chrome-os
## ctrl+k ctrl+s  //muestra atajos del teclado
- Atajos rapidos vscode  https://www.youtube.com/watch?v=W6PmvvUS5WU
  

- ====================================
- https://www.youtube.com/watch?v=wcAtgRAYQ7o  //Lit de midudev hace 1 año
- https://www.youtube.com/watch?v=N-NnxiVln8I&list=PLWYKfSbdsjJiwd7H_eDd9WvyXKF8PRUIS  //Patrones de diseño en javascript
- https://github.com/powerhdeleon?tab=repositories //repositorio
- https://www.youtube.com/playlist?list=PLWYKfSbdsjJiJ_cpAVWktKzwmg4YhEucD  // todos los patrones de este canal
- https://www.youtube.com/watch?v=eLVAIxpQotw   //curso de ts
- https://www.youtube.com/watch?v=xmRLrZ8EUbM   //programacion funcional ts


//jsonplaceholder   https://jsonplaceholder.typicode.com/
  

- 
Importing an HTML Module in webcomponent\
HTML Imports esta muerto el proyecto pero ES6 modul est en boga\
Mirarse la pagina de webcomponents\
ES6 Modul  https://caniuse.com/?search=ES6%20modul\

```
<script type="module">
    import {content} from "import.html"
    document.body.appendChild(content);
</script>

```
  

## script from package.json 
```
"build": "npm run build:prod",
"build:dev": "esbuild index.js --bundle --define:process.env.NODE_ENV='development' --outfile=bundle.js",
"build:prod": "esbuild index.js --bundle --define:process.env.NODE_ENV='production' --minify --outfile=bundle.min.js"

```

- Desintalaré sbuild y usaré vite que ya usa esbuild x debajo 
- https://vitejs.dev/guide/why.html
  
  ## Usando Lit Elements de midudev
  - https://www.youtube.com/watch?v=wcAtgRAYQ7o
  - https://www.youtube.com/watch?v=JXcNPXGHjlM
  - https://www.youtube.com/watch?v=rfI0hHTyH8g&list=PLIcuwIrm4rKeeN4g3GIAKGpzUNJtu9sQK
  - https://lit.dev/
  - https://github.com/web-padawan/awesome-lit
  - https://github.com/web-padawan/awesome-web-components
  - https://github.com/web-padawan?tab=repositories
  - https://shoelace.style/components/textarea
