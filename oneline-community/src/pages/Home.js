// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useLocation } from 'react-router-dom';

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
            <h1 style={{margin:'150px 0 -300px 0', fontSize:'60px', color:'white'}}>One line a day</h1>
                
                <Grid>
                    <Link to='/write' style={{textDecoration:'none'}}>
                        <Button
                            width="30%" 
                            padding="12px" 
                            margin="350px 0 0 350px"
                            addstyle={() => {
                                return css`
                                display:block;
                                `;
                              }}
                            >
                            작성하기
                        </Button>
                    </Link>

                    <ContentsDiv/>
                    <ContentsDiv/>
                    <ContentsDiv/>
                </Grid>
                      
            </Grid>
        </div>
    )
}

export default Home
