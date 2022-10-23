import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyled } from './style/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  );
}
