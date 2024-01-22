import { useParams } from 'react-router-dom';

const profileData = {
    minjae: {
        name: '권민재',
        description: '배겐드 개발자',
    },
    beer: {
        name: '맥주',
        description: '맥주',
    },
};

const Profile = () => {
    const { username } = useParams();
    const profile = profileData[username];
    if (!profile) {
        return <div>선택한 사용자가 없습니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};
export default Profile;
