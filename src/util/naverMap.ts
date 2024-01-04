export const getCoordinates = (
  address: string
): Promise<{ x: number; y: number }> => {
  return new Promise((resolve, reject) => {
    naver.maps.Service.fromAddrToCoord(
      { query: address },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          reject("Something wrong!");
          return;
        }

        const x = Number(response.v2.addresses[0].x);
        const y = Number(response.v2.addresses[0].y);

        resolve({ x, y });
      }
    );
  });
};
