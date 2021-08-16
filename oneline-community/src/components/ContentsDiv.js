// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

// STYLE
import { flexBox, flexHoz } from '../shared/style';

//ELEMENTS
import { Image, Grid, Text, Button } from '../elements/index';

function ContentsDiv(post) {
    return (
        <Grid
          clickEvent={()=>history.push('/detail/:postId')}
          bgColor="yellow"
          height="auto"
          padding="10px 0 0 30px"
          margin="30px 0 0 0"
          border="2px solid #FFD32A"
          addstyle={() => {
            return css`
              ${flexBox('space-between')}
              position: relative;
              top: 170px;
            `;
          }}
        >

          <Grid
           padding="4px"
           margin="4px"
          >
            <Text
              width="400px"
              color="black" 
              fontWeight="bold" 
              fontSize="20px" 
              >
            {post.contents}
            </Text>
          </Grid>
          
          <Grid 
            addstyle={() => {
            return css`
              position: relative;
              left: 40px;
              bottom: 20px;
            `;
          }}>
            <FavoriteIcon 
              style={{
                color:'red', 
                fontSize:'20px', 
                position:'relative', 
                top: '3px',
                marginRight: '5px'}}>
            </FavoriteIcon>
            1
          </Grid>
        
      </Grid>
    )
}

export default ContentsDiv;
