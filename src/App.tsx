import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const CharacterModel = lazy(() => import("./components/Character/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
import { LoadingProvider } from "./context/LoadingProvider";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <MainContainer>
                <Suspense>
                  <ErrorBoundary fallback={null}>
                    <CharacterModel />
                  </ErrorBoundary>
                </Suspense>
              </MainContainer>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
