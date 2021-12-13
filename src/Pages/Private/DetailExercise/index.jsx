import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ChallengeApi from 'src/Apis/ChallengeApi';
import ChallengeCateApi from 'src/Apis/ChallengeCateApi';
import Header from './Components/Header'
import PublishItem from './Components/publish-item';
import PublishNav from './Components/publish-nav';

const DetailExercise = () => {
    const { id } = useParams();
    const [challengeCate, setChallengeCate] = useState(null);
    const [challenge, setChallenge] = useState(null);
    // console.log(challenge)

    useEffect(() => {
        // call category
        (async () => {
            try {
                const { data, status } = await ChallengeCateApi.get(id);
                if (status) setChallengeCate(data.data)
            } catch (error) { }
        })();

        // call challenge
        (async () => {
            try {
                const { data, status } = await ChallengeApi.gets(id);
                if (status) setChallenge(data.data)
            } catch (error) { }
        })();

    }, []);

    return (
        <div className="w-full">
            <Header name={challengeCate?.title} />
            <PublishNav />
            {challenge?.models?.map((item, index) => <PublishItem key={index} index={index} data={item} />)}
            {challenge?.models?.length === 0 && <div className="text-center py-[20vh] select-none"> <p className="font-light text-gray-400">Hãy thêm bài tập đầu tiên</p> </div>}
        </div>
    )
}

export default DetailExercise
