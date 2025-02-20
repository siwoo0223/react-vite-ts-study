import { Suspense, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './features/layout/layout';
import { Pages } from './pages'
import { Paths } from './paths';
import { LoadingScreen } from './pages/loading';
import { useSelector } from 'react-redux';
import './App.css'

export default function App() {
  const loginState = useSelector((state: any) => state.login.userInfo.username);
  const [me, setMe] = useState(false);

  useEffect(() => {
    setMe(loginState != null); // loginState가 null이 아니면 true
  }, [loginState]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={Paths.HOME} element={<Pages.HOME />} />
        </Route>
        <Route path={Paths.LOGIN} element={<Pages.LOGIN />} />
        <Route path={Paths.REGISTER} element={<Pages.REGISTER />} />
        <Route path="*" element={<Pages.NOT_FOUND />} />
      </Routes>
    </Suspense>
  )
}
