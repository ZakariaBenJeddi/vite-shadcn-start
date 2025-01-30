
import { Button } from "./components/ui/button"
import { Progress } from "./components/ui/progress"
import Login from "./pages/login"


const App = () => {
  return (
    <div className="p-5 space-y-2 bg-gray-100">
      {/* <Button>Click me</Button>
      <Progress value={33} /> */}
      <Login/>
    </div>
  )
}

export default App