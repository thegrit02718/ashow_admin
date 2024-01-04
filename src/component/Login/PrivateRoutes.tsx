import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

interface PrivateRouteProps {
  authentication: boolean; // true :인증을 반드시 해야하만 접속가능, false : 인증을 반디스 안해야만 접속 가능
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): React.ReactElement | null {
  const { admin } = useCookies(["admin"])[0];
  /**
   * 로그인 했는지 여부
   * 로그인 했을 경우 : authentication true 반환
   * 로그인 안했을 경우 : null(로그아웃 버튼 눌렀을경우 null로 설정) 반환
   */
  if (authentication) {
    // 인증이 필요한 페이지
    if (admin === null) {
      // 로그인하지 않은 경우
      return <Navigate to="/home" />;
    } else if (admin !== "administrator") {
      // 로그인은 했지만 관리자가 아닌 경우
      return <Navigate to="/home" />;
    } else {
      // 로그인하고 관리자인 경우
      return <Outlet />;
    }
  } else {
    // 인증이 필요 없는 페이지
    if (admin === "administrator") {
      //관리자가 사용자 페이지에 접속했을 경우
      return <Navigate to="/admin" />;
    } else {
      // 유저 혹은 관리자가 아닌 경우 > 로그인 페이지 / 유저일 경우 원하는 페이지 이동
      return admin !== "member" ? <Navigate to="/" /> : <Outlet />;
    }
  }
}
