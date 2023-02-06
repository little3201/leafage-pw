---
title: 'Statistics Api'
cover: ''
author: {
    nickname: '',
    avatar: ''
}
modifyTime: '2023-01-28'
---

## 查询
**URL:** `/statistics/`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 查询





**Request-example:**
```accesslog
curl -X GET -i /statistics/
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
post|string|帖子|-
viewed|int32|浏览量|-
likes|int32|点赞量|-
comments|int32|评论量|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "post": "buff1n",
  "viewed": 968,
  "likes": 678,
  "comments": 97,
  "modifyTime": "2023-02-04 10:39:28"
}
```

