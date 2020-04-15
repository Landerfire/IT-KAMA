import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img className={s.picture} src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt="" />
            </div> */}
            <div className={s.description__block}>
                <img src={props.profile.photos.large} alt="" />
                <div className={s.description}>
                    <ProfileStatus status={props.profile.aboutMe} />
                    {/* {props.profile.aboutMe} */}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;