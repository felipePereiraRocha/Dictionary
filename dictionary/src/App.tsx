import { WordSearch } from "./Components/Dictionary"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Heading"


function App() {
  return (
    <>
    <div className="min-h-[100dvh] flex-col bg-sky-50 overflow-x-hidden m-0 p-0 scroll-smooth">
    <Header/>
    <WordSearch/>
    <Footer/>
    </div>
    </>
  )
}

export default App
