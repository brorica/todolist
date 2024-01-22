import { useNavigate } from 'react-router-dom';

function HistorySample() {
    const navigate = useNavigate();
    const goBack = () => {
        const confirm = window.confirm('정말 이동하겠어요?');
        if (confirm) {
            navigate(-1);
        }
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <div>
            <button onClick={goBack}>뒤로 가기</button>
            <button onClick={goHome}>홈으로 </button>
        </div>
    );
}

export default HistorySample;
