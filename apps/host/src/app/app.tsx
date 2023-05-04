import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const UmkmTheme = React.lazy(() => import('umkm-theme/Module'));
// const SharedComponents = React.lazy(() => import('shared-components/Module'));
// import SharedComponents from 'shared-components/Module';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/umkm-theme">UmkmTheme</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        {/* <Route path="/shared" element={<SharedComponents />} /> */}
        <Route path="/umkm-theme" element={<UmkmTheme />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
