import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    target: 'esnext'
  },
  test:{ // setting for the npm test, using Vitest
    "import.meta.vitest":"undefined", // make sure our inline testing is not shown in final build
    includeSource:["src/**/*.{js,ts,jsx}"], 
    cover:{
      reporter:["html","text"]
    }
  }
})
