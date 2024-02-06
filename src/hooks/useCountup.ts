import { useEffect, useState } from "react";

/**
 * @description  easeOutExpo 함수는 주어진 시간에 대한 이지 아웃(Out) 형태의 지수 함수(Math.pow)를 반환하는 hook입니다.
 * 이 hook은 시작 부분에 빠르게 가속하다가 나중에는 천천히 감속하는 효과를 제공합니다.
 * @param t 0에서 1 사이의 값으로 나타낸 시간(진행 상태)
 * @param Math.pow x의 y승을 계산 / ex) Math.pow(2,-1) => 2의 -1승 = 0.5
 * @returns 이지 아웃 형태의 지수 함수에 따른 값
 */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * useCountup은 숫자를 카운트하는 과정에서 부드러운 애니메이션을 걸고자 만들어진 hook입니다.
 * @param end 마지막 숫자
 * @param start 시작되는 숫자
 * @param duration 애니메이션이 펼쳐지는 시간
 * @param frameRate 숫자가 카운트되는 애니메이션 속도
 * @param progress 0~1까지 진행 상황
 * @returns 카운트 된 현재 숫자
 */
export default function useCountUp(
  end: number,

  duration = 2000
) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const frameRate = 1000 / 100;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      const progress = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round(start + (end - start) * progress));

      if (progress === 1) {
        clearInterval(counter);
        setStart(end); // 현재 카운트가 완료된 후 최근 start 값을 현재 end 값으로 업데이트
      }
    }, frameRate);

    // 컴포넌트가 언마운트되면 clearInterval
    return () => clearInterval(counter);
  }, [end, start, duration]);

  return count;
}
