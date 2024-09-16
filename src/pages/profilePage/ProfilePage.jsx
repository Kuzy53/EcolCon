import React, { useState, useEffect } from 'react';
import s from './ProfilePage.module.scss';
import Avatar from '/avatar.png'

const ProfilePage = () => {

  return (
    <>
        <div className={s.container}>
            <div className={s.profileContainer}>
                <div className={s.profileHeader}>
                <img src={Avatar} alt="Avatar" />
                <h1>Кузнецов Никита Георгиевич</h1>
                    <div className={s.profileHeader_flex}>
                            <div className={s.profile_flex}>
                                <h1>Email: nikita129343@mail.ru</h1>
                                <h1>телефон: 89996567006</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProfilePage;
