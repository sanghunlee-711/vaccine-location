import React from 'react';
import styled from 'styled-components';
import Repository from '../../store/repository';
import {useEffect, useState} from 'react';

const Home = () => {


    useEffect(()=>{
        // const data = new Repository("api.odcloud.kr/api/15077586/v1/centers")
        // const data2 = data.getData();

        // console.log(data2);
    },[])
    return(
        <Check>
            Hello Home
        </Check>
    )
}

const Check = styled.div`
    color: red;
`
export default Home;