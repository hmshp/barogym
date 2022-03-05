/* global kakao */
import React, { useEffect, useState } from "react";

const KaKaoMap = () => {

  const [positions, setPositions] = useState([
    {
      content : '<div style="padding:5px;">barojym</div>',
      latlng : new kakao.maps.LatLng(37.49904142712934, 127.03291139455666)
    },
  ]);

  const geoloc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition (function(pos) {});
      navigator.permissions.query({name:'geolocation'})
      .then(function(result) {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              setPositions([
                positions[0],
                {
                  content : '<div style="padding:5px;">현재위치</div>',
                  latlng : new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
                }
              ]); 
            }
          )
        } else if (result.state === 'denied'||result.statnpe === 'prompt') {
          alert("요청거부")
        }
      });
    } else {
      alert("지원안함")
    }
  }
  
  const [map, setMap] = useState();

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: positions[0].latlng,
      level: 4,
    };
    if(!map){
      setMap(new kakao.maps.Map(container, options));
    }else {
      if(positions[1]){
        map.setCenter(positions[1].latlng);
      }
    }
    
    for (let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다.
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
      });
      // 마커에 표시할 인포윈도우를 생성합니다.
      const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
      });
      // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다.
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다.
      (function(marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다.
        kakao.maps.event.addListener(marker, 'mouseover', function() {
          infowindow.open(map, marker);
        });
        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
          infowindow.close();
        });
        
      })(marker, infowindow);
    }
    
  }, [positions, map]);

  return (
    <>
      <div id="map" style={{width:"500px", height:"400px"}}></div>
      <button type="button" onClick={()=>{geoloc();}}>현재위치</button>
    </>
  );
};

export default KaKaoMap;