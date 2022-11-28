import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vitejs.dev/config/
const root = resolve(__dirname,'src') // like python Path(), create a path that resolve to src
const outDir=resolve(__dirname,'dist')
export default defineConfig({
  root,
  plugins: [react()],
  // https://vitejs.dev/config/build-options.html#build-rollupoptions
  build:{
    target: 'esnext',
    outDir, // the output directory for our build, defualt is a folder dist
    // tell the vite that ok to empty folder of outDir, default is true
    // warning appear if the root directory has been change  hence need to re apply true
    emptyOutDir: true,
    // https://rollupjs.org/guide/en/#input 
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'), // set main path to src/index.html
        secret: resolve(root, 'secret', 'index.html'), //set the about page to src/about/index.hmtl
        profilePage: resolve(root, 'ProfilePage', 'index.html'), //set the about page to src/about/index.hmtl
        }
    }
  },
  test:{ // setting for the npm test, using Vitest
    "import.meta.vitest":"undefined", // make sure our inline testing is not shown in final build
    includeSource:["src/**/*.{js,ts,jsx}"], 
    cover:{
      reporter:["html","text"]
    }
  }
})
