import React from "react";
import styled from "styled-components";
import Repository from "../../store/repository";
import { useEffect, useState } from "react";

interface CenterModel {
  id: number;
  centerName: string;
  sido: string;
  sigungu: string;
  facilityName: string;
  zipCode: string;
  address: string;
  lat: string;
  lng: string;
  centerType: string;
  org: string;
}

const Home = () => {
  const [officialData, setOfficialData] = useState<CenterModel[]>([]);

  useEffect(() => {
    const key =
      "F52gYVgaB%2BSCLqULy593sfCPCoByQh4h0c3xjXygQSJuVy54sgiUS6nK510OW%2FaBUIcBCDWoisHgQg%2B79ChSjQ%3D%3D";
    const URL = "https://api.odcloud.kr/api/15077586/v1/centers";
    const _repo = new Repository(`${URL}?serviceKey=${key}&page=1&perPage=100`);
    const data = _repo.getData();
    data.then((res) => setOfficialData(res.data));
  }, []);

  return (
    <ListContainer
      onClick={() => {
        console.log(officialData ? officialData : "Hlelo");
      }}
    >
      {officialData?.map(
        ({
          id,
          centerName,
          sido,
          sigungu,
          facilityName,
          zipCode,
          address,
          lat,
          lng,
          centerType,
          org,
        }) => (
          <NamingWrapper>
            <li>id: {id}</li>
            <li>centerName: {centerName}</li>
            <li>sido: {sido}</li>
            <li>sigungu: {sigungu}</li>
            <li>facilityName: {facilityName}</li>
            <li>zipCode: {zipCode}</li>
            <li>address: {address}</li>
            <li>lat: {lat}</li>
            <li>lng: {lng}</li>
            <li>centerType: {centerType}</li>
            <li>org: {org}</li>
          </NamingWrapper>
        )
      )}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NamingWrapper = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  li {
    margin: 1vh;
    list-style: none;
  }
`;
export default Home;
