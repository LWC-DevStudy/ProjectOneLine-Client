// library
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';
import styled, { css } from 'styled-components';
import { Link,useLocation } from 'react-router-dom';

import { borderBox, flexBox, flexHoz, flexVer } from '../shared/style';
// elements
import { Grid, Button } from '../elements';
import ContentsDiv from '../components/ContentsDiv';

function Detail() {
  const path = useLocation().pathname;
    //input 값
  const [contents, setContent] = React.useState();

  const $contents = (e) => {
    setContent(e.target.value);
  };

    return (
    <Grid width="100%" height="100vh">
      <Grid margin="auto">
      <ContentsDiv/>
      </Grid>
      <Grid 
        margin="200px auto 0" 
        height="auto"
        addstyle={() => {
          return css`
            ${flexBox('center')}
          `;
        }}
        >
        <Textarea onChange={$contents} />
      </Grid>

      <Grid
          margin="auto"
          width="205px"
          addstyle={() => {
            return css`
              ${flexBox('space-between')}
            `;
          }}
        >

            <Button margin="3px" padding="12px">수정하기</Button>
            <Link to='./'>
            <Button margin="3px" padding="12px">취소하기</Button>
            </Link>
        </Grid>
    </Grid>
    )
}

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 21px;
  margin: 2% auto 5%;
  outline: none;
`;

export default Detail
