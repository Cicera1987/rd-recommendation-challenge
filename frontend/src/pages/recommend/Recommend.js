import { useState } from 'react';
import RecommendationList from '../../components/RecommendationList/RecommendationList';
import PageTemplate from '../../template/pageTemplate';
import Form from '../../components/Form/Form';
import { FollowButton } from '../../components/Form/Buttons';
import { ToGoBack } from '../../components/assets/icons';
import { useNavigate } from 'react-router-dom';

export default function Recommend() {
  const [recommendations, setRecommendations] = useState([]);
  const navegate = useNavigate();

  const handleRecommend = (data) => {
    setRecommendations(data);
  };
  return (
    <>
      <div className="fixed ml-1 md:ml-8  mt-24">
        <FollowButton icon={<ToGoBack />} onNext={() => navegate('/')} />
      </div>
      <PageTemplate
        leftContent={<Form onRecommend={handleRecommend} />}
        rightContent={<RecommendationList recommendations={recommendations} />}
      />
    </>
  );
}
