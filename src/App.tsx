import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import generalRoutes from './Layout/Routes/GeneralRutes';
import NotFound from './Pages/404/NotFound';

const App = () => {
  return (
    <main className='App'>
      <Router>
        <Routes>
          {generalRoutes.map((route, idx: number) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
