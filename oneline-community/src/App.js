// library
import React from 'react';
import { Route } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

// style
import theme from './shared/style';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Write from './pages/Write';
import Detail from './pages/Detail';

// components
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: '0 0 150px 0' }}>
        <Header />
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/write" exact component={Write} />
      <Route path="/login" exact component={Login} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/detail/:postId" exact component={Detail} />
    </ThemeProvider>
  );
}

export default App;
