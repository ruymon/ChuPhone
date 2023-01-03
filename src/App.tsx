import { HashRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from './apps/Calculator';
import { Home } from './apps/Home';
import { PlayStore } from './apps/PlayStore';
import { Spotify } from './apps/Spotify';
import { Startup } from './apps/Startup';
import { PhoneLayout } from "./layouts/PhoneLayout";


export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<Startup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />

          <Route path="/spotify">
            <Route index element={<Spotify />} />
          </Route>

          <Route path="/store">
            <Route index element={<PlayStore />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
    
  )
};
