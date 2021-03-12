import React from "react";
import Repository from "../../store/repository";
import { useEffect, useState } from "react";
import { key, URL } from "../../constant/constant";
import { CenterModel, Geo } from "../../constant/interface";
import { getLocation } from "../../util/util";
import {
  ListContainer,
  NamingWrapper,
  LocationButton,
} from "./style/HomeStyle";

const Home: React.FC = (): JSX.Element => {
  const [officialData, setOfficialData] = useState<CenterModel[]>([]);
  const [geoLocation, setGeoLocation] = useState<Geo>({});

  useEffect(() => {
    const _repo = new Repository(`${URL}?serviceKey=${key}&page=1&perPage=100`);
    const data = _repo.getData();
    data.then((res) => setOfficialData(res.data));
  }, []);

  const getLocationData = () => {
    const data = getLocation();
    setGeoLocation(data);
  };

  return (
    <>
      <ListContainer>
        {officialData?.map(
          (
            {
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
            },
            index
          ) => (
            <NamingWrapper key={id}>
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
      <LocationButton>
        <button onClick={() => getLocationData()}>Get Location!</button>
        <span>{geoLocation ? "Locating?.." : "geoLocation"}</span>
      </LocationButton>
    </>
  );
};

export default Home;
