// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';
import styled, { css } from 'styled-components';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// COMPONENTS
import ContentsDiv from '../components/ContentsDiv';

// REDUX
// import { getPostDB } from '../redux/modules/post';

function Home() {
  return (
    <div>
      <Grid margin="0px auto 20px auto">
        <h1 style={{ fontSize: '60px', color: 'white' }}>One line a day</h1>
        <Grid>
          <Grid>
            <Button
              width="30%"
              padding="12px"
              margin="0 0 0 377px"
              addstyle={() => {
                return css`
                  display: block;
                `;
              }}
            >
              작성하기
            </Button>
          </Grid>
          <Grid margin="-120px 0 0 0">
            <ContentsDiv />
            <ContentsDiv />
            <ContentsDiv />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
