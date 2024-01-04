import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalsState } from "../../../../recoil/stateModal";
import { AddressModalProps } from "../../../../types/Modal";
import { getCoordinates } from "../../../../util/naverMap";
import { AdrressState } from "../../../../recoil/stateProduct";
import { RecoilProps } from "../../../../types/Modal";

interface NaverMapProps {
  id: string;
  type: string;
}

export function NaverMap({ id, type }: NaverMapProps) {
  const { naver } = window;
  const [addressState, setAdrressState] =
    useRecoilState<AddressModalProps<RecoilProps>>(AdrressState);
  const address = addressState.address[type];
  const [myLocation, setMyLocation] = useState({
    latitude: 37.4979517,
    longitude: 127.0276188,
  });

  useEffect(() => {
    const updateMap = async () => {
      if (address) {
        try {
          const { x, y } = await getCoordinates(address); // 주소로 위도, 경도 구하는 함수 실행
          setMyLocation({
            latitude: y,
            longitude: x,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };

    updateMap();
  }, [address]); // 주소 변경 시에만 지도 업데이트

  useEffect(() => {
    const location = new naver.maps.LatLng(
      myLocation.latitude,
      myLocation.longitude
    );

    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    const map = new naver.maps.Map(id, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [myLocation]); // 경도,위도 변경 시에만 마커 업데이트

  return (
    <>
      <div id={id} style={{ height: "250px" }} />
    </>
  );
}
