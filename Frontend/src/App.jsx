import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import AnimatedBackground from "./animation/AnimatedBackground.jsx"

function App() {

  return (
    <>
      <AnimatedBackground />
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh' }}>
        <AuthProvider>
          <InterviewProvider>
            <RouterProvider router={router} />
          </InterviewProvider>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
