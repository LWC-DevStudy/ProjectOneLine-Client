import React from 'react';
// style
import styled from 'styled-components';

// elements
import Grid from '../elements/Grid.js';

function Login() {
  return (
    <React.Fragment>
      <Grid height="100%" bgColor="blue">
        <Grid width="100%" bgColor="blue">
          <Once>One line a day</Once>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const Once = styled.h1`
  font-size: 30px;
  text-align: center;
  color: black;
`;

export default Login;
