import React, { useState, useEffect } from 'react';
import s from './ProfilePage.module.scss';
import Avatar from '/avatar.png';
import ProfItem1 from '/profItem1.svg';

const ProfilePage = () => {

  return (
    <>
        <div className={s.container}>
            <div className={s.profileContainer}>
                <div className={s.profileHeader}>
                <img src={Avatar} alt="Avatar" />
                <h1 className={s.profileName}>Кузнецов Никита Георгиевич</h1>
                    <div className={s.profileHeader_flex}>
                            <div className={s.profile_flex}>
                                <h1>Email: nikita129343@mail.ru</h1>
                                <h1>телефон: 89996567006</h1>
                            </div>
                    </div>
                </div>

                <div className={s.profileMenu}>
                    <h1 className={`${s.profileLink} ${s.activeLink}`}>активные</h1>
                    <h1 className={s.profileLink}>архив</h1>
                </div>

                <div className={s.profileList}>
                    <div className={s.profileItem}>
                        <div className={s.profileInfo}>
                            <img src={ProfItem1} alt="ProfItem1" />
                            <h1>Выставка технологий переработки</h1>
                            <h2>Краснопресненская набережная, 14 ЦВК "Экспоцентр"</h2>
                            <p>с 23 января 2024 по 26 января 2024</p>
                            <button>X</button>
                        </div>
                        <button className={s.profileInfoBtn}>подробнее</button>
                    </div>

                    <div className={s.profileItem}>
                        <div className={s.profileInfo}>
                            <img src={ProfItem1} alt="ProfItem1" />
                            <h1>Выставка технологий переработки</h1>
                            <h2>Краснопресненская набережная, 14 ЦВК "Экспоцентр"</h2>
                            <p>с 23 января 2024 по 26 января 2024</p>
                            <button>X</button>
                        </div>
                        <button className={s.profileInfoBtn}>подробнее</button>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default ProfilePage;
