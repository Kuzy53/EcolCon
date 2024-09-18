

import { useState } from 'react';
import styles from './BloksEvents.module.css';
import BlockEvent from './BlockEvent';
const BloksEvents = () => {
const eventsList = [
  {
    "id": 1,
    "name": "a",
    "description": "description",
    "start_date": "2024-01-01T00:00:00+03:00",
    "finish_date": "2024-01-01T00:00:00+03:00",
    "image": "src/assets/main/block1.png",
    "address": "address",
    "latitude": 1,
    "longitude": 1,
    "eco_balance": 1,
    "vk_chat_id": 43,
    "vk_chat_link": "https://vk.me/join/AZQ1d2CiCwivo/OFpAICeNre",
    "organization": {
      "id": 1,
      "users": [
        {
          "email": "email@test.ru",
          "full_name": null,
          "vk_link": "https://vk.com/bossofcreeps",
          "image": null,
          "is_department": false
        },
        {
          "email": "2@test.ru",
          "full_name": null,
          "vk_link": null,
          "image": null,
          "is_department": false
        }
      ],
      "full_name": "1",
      "short_name": "Короткое название",
      "address": "Адрес",
      "ogrn": "1",
      "inn": "1",
      "kpp": "1",
      "okpo": "1",
      "director_full_name": "1",
      "director_inn": "1",
      "activities": "1",
      "reg_date": "2023-01-01",
      "phone": "Телефон",
      "email": "Email@x5.ru",
      "description": "Описание",
      "image": "/media/IMG_20210221_131521.jpg"
    },
    "tags": [
      {
        "id": 1,
        "name": "IT"
      },
      {
        "id": 1,
        "name": "экология"
      },
      {
        "id": 1,
        "name": "креатив"
      }
    ]
  },
  {
    "id": 2,
    "name": "b",
    "description": "description",
    "start_date": "2024-01-01T00:00:00+03:00",
    "finish_date": "2024-01-02T00:00:00+03:00",
    "image": "src/assets/main/block2.png",
    "address": "address",
    "latitude": 1,
    "longitude": 1,
    "eco_balance": 1,
    "vk_chat_id": 44,
    "vk_chat_link": "https://vk.me/join/AZQ1d/KQXgiGzloDqT3vw1YV",
    "organization": {
      "id": 2,
      "users": [
        {
          "email": "2@test.ru",
          "full_name": null,
          "vk_link": null,
          "image": null,
          "is_department": false
        },
        {
          "email": "3@test.ru",
          "full_name": null,
          "vk_link": "https://vk.com/bossofcreeps",
          "image": null,
          "is_department": false
        }
      ],
      "full_name": "Первая",
      "short_name": "Первая 1",
      "address": "Адрес",
      "ogrn": "1",
      "inn": "1",
      "kpp": "1",
      "okpo": "1",
      "director_full_name": "1",
      "director_inn": "1",
      "activities": "1",
      "reg_date": "2023-01-01",
      "phone": "Телефон",
      "email": "Email@x5.ru",
      "description": "Описание",
      "image": "/media/IMG_20210309_173858.jpg"
    },
    "tags": [
      {
        "id": 1,
        "name": "IT"
      },
      {
        "id": 1,
        "name": "экология"
      },
      {
        "id": 1,
        "name": "креатив"
      }
    ]
  }
]


  return (
<>
<div className={styles.container} >

    {
        eventsList.map((event, index) => (

            <BlockEvent key={index} event={event} />
        ))

    }

</div>

</>
  )
};

export default BloksEvents;
