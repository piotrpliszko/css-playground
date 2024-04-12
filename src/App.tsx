import { Outlet, ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        {/* TODO header */}
        <Outlet />
      </div>
      <ScrollRestoration />
    </>
  );
}

export default App;
