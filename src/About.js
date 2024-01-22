import { useLocation } from 'react-router-dom';
import qs from 'qs';

const About = () => {
    const query = useLocation();
    const showDetail =
        qs.parse(query.search, {
            ignoreQueryPrefix: true,
        }).detail === 'true';
    return (
        <div>
            <h1> 소개 </h1>
            <p> 라우터 기초 실습</p>
            {showDetail && <p> 추가 정보 ... </p>}
        </div>
    );
};

export default About;
