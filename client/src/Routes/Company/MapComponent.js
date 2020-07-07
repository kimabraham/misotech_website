import React from 'react';
import { KakaoMap, Marker } from 'react-kakao-maps';

export default function MapView() {
  return (
    <KakaoMap
      apiUrl={
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=bc5382e1f14cbdf8fa1045cec1296954'
      }
      width="70vw"
      height="40vw"
      level={2}
      lat={37.6353543}
      lng={127.290383}>
      <Marker lat={37.6353543} lng={127.290383}></Marker>
    </KakaoMap>
  );
}
