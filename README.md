# Mini Twitter API Guide

## Table of Contents

- [GET all users](https://wbs-twitter-clone.herokuapp.com/users)
- [GET a random user](https://wbs-twitter-clone.herokuapp.com/me)
- [GET all messages ](https://wbs-twitter-clone.herokuapp.com/messages/)
- [GET messages by handle name](https://wbs-twitter-clone.herokuapp.com/find/message/:id)
- [POST one message](https://wbs-twitter-clone.herokuapp.com/messages)
- [DELETE one message](https://wbs-twitter-clone.herokuapp.com/messages/:id)

## /users

### GET all users

| URL                                           | Method |
| --------------------------------------------- | ------ |
| https://wbs-twitter-clone.herokuapp.com/users | `GET`  |

Returns all users in the database.

### GET one random user

| URL                                        | Method |
| ------------------------------------------ | ------ |
| https://wbs-twitter-clone.herokuapp.com/me | `GET`  |

Returns random user very timeyou do a fetch in the database.

### GET all messages

| URL                                               | Method |
| ------------------------------------------------- | ------ |
| https://wbs-twitter-clone.herokuapp.com/messages/ | `GET`  |

Returns all messages pesent in database

### GET all messages belonging to one common user handle/unique id

| URL                                                      | Method |
| -------------------------------------------------------- | ------ |
| https://wbs-twitter-clone.herokuapp.com/find/message/:id | `GET`  |

Returns all messages for a user whose `user_id` matches the `${id}` provided in the URL.

**Example:**
`https://elak-mini-twitter.herokuapp.com/find/message/@lucifer` would return you an array, with every element being a message object:

```
[
{
"img_url": "https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1",
"_id": "61e2962812b52f59de417a98",
"text": "example test captainamerica",
"user": {
"username": "Julian",
"handle": "@lucifer"
},
"date": "2022-01-14T17:45:43.774Z",
"_twitter_message": 0
},
{
"img_url": "https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1",
"_id": "61e2966c12b52f59de417a99",
"text": "example test captainamerica",
"user": {
"username": "Julian",
"handle": "@lucifer"
},
"date": "2022-01-14T17:45:43.774Z",
"_twitter_message": 0
},
{
"_id": "61e298e23c0a196ed42409b8",
"text": "example with picture",
"user": {
"username": "Julian",
"handle": "@lucifer"
},
"date": "2022-01-15T09:50:26.411Z",
"img_url": "https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1",
"_twitter_message": 0
}
]


### POST one message

| URL  | Method  |
| ------------ | ------------ |
| https://wbs-twitter-clone.herokuapp.com/find/messages  | `POST`  |

Adds a new message to the database. Requires `name`, `profile_pic`. `handle`. Handle can be left empty, and will upload a default image.
**Example:**
`POST`-ing this data:

```

{
"name": "Here's an example message being submitted",
"profile_pic": "",
"handle": @sleepingbeauty
}

```

 will return you an HTTP status code of `200` and the following data:

```

data : [
_id: new ObjectId("61e1e679f9d6a781f2ba03ef"),
name: 'Tanja',
profile_pic: 'https://tvline.com/wp-content/uploads/2016/03/freeform-sleeping-beauty-series.jpg',
handle: '@sleepingbeauty'
}
]

```
### DELETE one message by id

| URL  | Method  |
| ------------ | ------------ |
| hhttps://wbs-twitter-clone.herokuapp.com/messages({id}   | `DELETE`  |

Deletes message whose `message_id` matches the `${id}` provided in the URL. Returns `true`

## /me
| URL  | Method  |
| ------------ | ------------ |
| https://wbs-twitter-clone.herokuapp.com/me  | `GET`  |

Returns a random user from the database.

data :

```

Users data is [
_id: new ObjectId("61e1e679f9d6a781f2ba03ef"),
name: 'Tanja',
profile_pic: 'https://tvline.com/wp-content/uploads/2016/03/freeform-sleeping-beauty-series.jpg',
handle: '@sleepingbeauty'
}
]

```

```
