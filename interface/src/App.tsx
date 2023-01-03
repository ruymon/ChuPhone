import { HashRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from './apps/Calculator';
import { Ifood } from './apps/Ifood';
import { PlayStore } from './apps/PlayStore';
import { Spotify } from './apps/Spotify';
import { PhoneLayout } from "./layouts/PhoneLayout";
import { BootPage } from './pages/BootPage';
import { HomePage } from './pages/HomePage';


export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<BootPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />

          <Route path="/spotify">
            <Route index element={<Spotify />} />
          </Route>

          <Route path="/store" element={<PlayStore />} />
          <Route path="/ifood" element={<Ifood />} />

        </Route>
      </Routes>
    </HashRouter>
    
  )
};
