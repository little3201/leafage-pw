---
title: 'Category Api'
cover: ''
author: {
    nickname: '',
    avatar: ''
}
modifyTime: '2023-01-28'
---

## 分页查询
**URL:** `/categories/`

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
curl -X GET -i /categories/?page=1&size=10
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─count|int64|贴子数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
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
```json
{
    "content": [
        {
            "code": "20C329QX",
            "name": "Lifestyle",
            "count": 0,
            "description": "生活",
            "modifyTime": "2020-12-03T15:08:01"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 1,
        "pageNumber": 1,
        "pageSize": 1,
        "paged": true,
        "unpaged": false
    },
    "totalPages": 7,
    "totalElements": 7,
    "last": false,
    "size": 1,
    "number": 1,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "numberOfElements": 1,
    "first": false,
    "empty": false
}
```

## 根据 code 查询信息
**URL:** `/categories/{code}`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 根据 code 查询信息


**Path-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
code|string|代码|true|-



**Request-example:**
```accesslog
curl -X GET -i /categories/87685
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
code|string|编号|-
name|string|名称|-
count|int64|贴子数|-
description|string|描述|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "code": "87685",
  "name": "erinn.blanda",
  "count": 840,
  "description": "5mdpp1",
  "modifyTime": "2023-02-04 10:39:28"
}
```

## 是否已存在
**URL:** `/categories/exist`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 是否已存在



**Query-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
name|string|名称|true|-


**Request-example:**
```accesslog
curl -X GET -i /categories/exist?name=erinn.blanda
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
-|object|Return object.|-

**Response-example:**
```accesslog
true
```
