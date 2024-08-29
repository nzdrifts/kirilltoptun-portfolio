import styles from "./App.module.css"

import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

function App() {

  return (
    <div className={styles.App}>
      <Skills />
      <Projects />
    </div>
  )
}

export default App
