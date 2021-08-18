// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// style
import { css } from 'styled-components';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// COMPONENTS
import ContentsDiv from '../components/ContentsDiv';

// REDUX
import { getPostDB } from '../redux/modules/post';
import { logInCheck } from '../redux/modules/user';

function Home() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  React.useEffect(() => {
    dispatch(getPostDB());
  }, []);
  React.useEffect(() => {
    dispatch(logInCheck());
  });
  return (
    <div>
      <Grid margin="0px auto 20px auto">
        <h1
          style={{
            margin: '150px 0 -300px 0',
            fontSize: '60px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          One line a day
        </h1>

        <Grid>
          <Link to="/write" style={{ textDecoration: 'none' }}>
            <Button
              width="30%"
              padding="12px"
              margin="350px 0 0 375px"
              addstyle={() => {
                return css`
                  display: block;
                `;
              }}
              fontWeight="bold"
              color="black"
            >
              작성하기
            </Button>
          </Link>
          <Grid margin="-120px 0 0 0">
            {postList.map((p, idx) => {
              return <ContentsDiv key={idx} {...p} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
