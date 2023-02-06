---
title: 'Comment Api'
cover: ''
author: {
    nickname: '',
    avatar: ''
}
modifyTime: '2023-01-28'
---

## 分页查询
**URL:** `/comments/`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 分页查询



**Query-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
page|int32|分页位置|true|-
size|int32|分页大小|true|-


**Request-example:**
```accesslog
curl -X GET -i /comments/?size=10&page=1
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
totalPages|int32|Returns the number of total pages.|-
totalElements|int64|Returns the total amount of elements.|-
number|int32|Returns the number of the current {@link Slice}. Is always non-negative.|-
size|int32|Returns the size of the {@link Slice}.|-
numberOfElements|int32|Returns the number of elements currently on this {@link Slice}.|-
content|array|Returns the page content as {@link List}.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─posts|string|帖子code|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|string|内容|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─country|string|国家|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─location|string|位置|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─count|int64|回复数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─modifyTime|string|时间|-
sort|object|Returns the sorting parameters for the {@link Slice}.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─empty|boolean|Returns whether the current {@link Streamable} is empty.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─orders|array|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─direction|enum|null(See: Enumeration for sort directions.)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─property|string|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ignoreCase|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nullHandling|enum|null(See: Enumeration for null handling hints that can be used in {@link Order} expressions.)|-
first|boolean|Returns whether the current {@link Slice} is the first one.|-
last|boolean|Returns whether the current {@link Slice} is the last one.|-
pageable|object|Returns the {@link Pageable} that's been used to request the current {@link Slice}.|2.0
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─paged|boolean|Returns whether the current {@link Pageable} contains pagination information.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─unpaged|boolean|Returns whether the current {@link Pageable} does not contain pagination information.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─pageNumber|int32|Returns the page to be returned.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─pageSize|int32|Returns the number of items to be returned.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─offset|int64|Returns the offset to be taken according to the underlying page and page size.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sort|object|Returns the sorting parameters.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─empty|boolean|Returns whether the current {@link Streamable} is empty.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─orders|array|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─direction|enum|null(See: Enumeration for sort directions.)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─property|string|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ignoreCase|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nullHandling|enum|null(See: Enumeration for null handling hints that can be used in {@link Order} expressions.)|-
empty|boolean|Returns whether the current {@link Streamable} is empty.|-

**Response-example:**
```
{}
```

## 根据 code 查询信息
**URL:** `/comments/{code}`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 根据 code 查询信息


**Path-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
code|string|帖子代码|true|-



**Request-example:**
```accesslog
curl -X GET -i /comments/87685
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
code|string|编号|-
posts|string|帖子code|-
content|string|内容|-
country|string|国家|-
location|string|位置|-
count|int64|回复数|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "code": "87685",
  "posts": "mqfbnh",
  "content": "zi3j2g",
  "country": "tzwkjt",
  "location": "pa6ftm",
  "count": 444,
  "modifyTime": "2023-02-04 10:39:28"
}
```

## 根据 code 查询回复信息
**URL:** `/comments/{code}/replies`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 根据 code 查询回复信息


**Path-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
code|string|评论代码|true|-



**Request-example:**
```accesslog
curl -X GET -i /comments/87685/replies
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
code|string|编号|-
posts|string|帖子code|-
content|string|内容|-
country|string|国家|-
location|string|位置|-
count|int64|回复数|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "code": "87685",
  "posts": "oujc83",
  "content": "lnfsh1",
  "country": "6amp5e",
  "location": "dqtrh9",
  "count": 464,
  "modifyTime": "2023-02-04 10:39:28"
}
```

## 添加信息
**URL:** `/comments/`

**Type:** `POST`

**Content-Type:** `application/json; charset=utf-8`

**Description:** 添加信息




**Body-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
posts|string|帖子|true|-
content|string|内容|true|-
replier|string|回复人|false|-

**Request-example:**
```accesslog
curl -X POST -H 'Content-Type: application/json; charset=utf-8' -i /comments/ --data '{
  "posts": "is830g",
  "content": "3rdm0x",
  "replier": "ggot1p"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
code|string|编号|-
posts|string|帖子code|-
content|string|内容|-
country|string|国家|-
location|string|位置|-
count|int64|回复数|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "code": "87685",
  "posts": "ijbnp7",
  "content": "a6vaqn",
  "country": "a61xtr",
  "location": "ewgcw8",
  "count": 988,
  "modifyTime": "2023-02-04 10:39:28"
}
```
