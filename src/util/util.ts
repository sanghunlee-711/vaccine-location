import { Geo } from "../constant/interface";

export const getLocation = (): Geo => {
  let textContext: string = "";
  let result = {};
  const success = (position: GeolocationPosition): Geo => {
    console.log("success?");

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    result = { latitude, longitude, statusText: textContext };
    console.log(`Hello in Util ${result}`);
    return result;
  };

  // navigator.geolocation.getCurrentPosition(function (position) {
  //   console.log(position);
  // });
  const error = (): Geo => {
    console.log("error?");
    textContext = "회원님의 위치를 찾을 수 없습니다.";
    result = { statusText: textContext };
    return result;
  };

  if (!navigator.geolocation) {
    textContext = "회원님의 웹에서 위치정보가 허락되지 않습니다.";
  } else {
    textContext = "잠시만 기다려주세요 ...";
    navigator.geolocation.getCurrentPosition(success, error);
  }
  return result;
};
