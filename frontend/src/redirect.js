import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

export default function Redirect(props){
    let location = useLocation();
    let url = atob(location.pathname.replace("/redirect/",""))
    useEffect(()=>{
        window.open(url, '_blank');
        props.ga.logEvent('notification_clicked', {link: url});
    },[])
    return (
        <div>
            <p>링크를 새 탭에서 여는 중입니다.</p>
            <p>팝업 차단을 해제해 주세요.</p>
            <p>{url}</p>
            <Link to="/">
                홈으로 이동
            </Link>
        </div>
    )
}
