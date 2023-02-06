---
title: 'Posts Api'
cover: ''
author: {
    nickname: '',
    avatar: ''
}
modifyTime: '2023-01-28'
---

## 分页查询
**URL:** `/posts/`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 分页查询



**Query-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
page|int32|    页码|true|-
size|int32|    大小|true|-
sort|string|    排序字段|false|-
category|string|分类|false|-


**Request-example:**
```accesslog
curl -X GET -i /posts/?size=10&category=2yqhce&sort=l5x5ot&page=1
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─title|string|标题|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cover|string|封面|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─tags|array|标签|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─category|object|分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|object|内容和目录|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|string|内容|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─catalog|string|目录|-
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
{}
```

## title 关键字查询
**URL:** `/posts/search`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** title 关键字查询



**Query-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
keyword|string|关键字|true|-


**Request-example:**
```accesslog
curl -X GET -i /posts/search?keyword=qkk5q4
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
title|string|标题|-
cover|string|封面|-
tags|array|标签|-
category|object|分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
code|string|编号|-
content|object|内容和目录|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|string|内容|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─catalog|string|目录|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "title": "5hm0ou",
  "cover": "7ahl0w",
  "tags": [
    "9s6z3d"
  ],
  "category": {
    "code": "87685",
    "name": "erinn.blanda"
  },
  "code": "87685",
  "content": {
    "content": "qmi949",
    "catalog": "o2hxlr"
  },
  "modifyTime": "2023-02-04 10:39:28"
}
```

## 根据 code 查询，包含内容
**URL:** `/posts/{code}`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 根据 code 查询，包含内容


**Path-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
code|string|代码|true|-



**Request-example:**
```accesslog
curl -X GET -i /posts/87685
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
title|string|标题|-
cover|string|封面|-
tags|array|标签|-
category|object|分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
code|string|编号|-
content|object|内容和目录|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|string|内容|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─catalog|string|目录|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "title": "cy8uy3",
  "cover": "spp284",
  "tags": [
    "yntle0"
  ],
  "category": {
    "code": "87685",
    "name": "erinn.blanda"
  },
  "code": "87685",
  "content": {
    "content": "h4a565",
    "catalog": "g8ord3"
  },
  "modifyTime": "2023-02-04 10:39:28"
}
```

## 是否已存在
**URL:** `/posts/exist`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 是否已存在



**Query-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
title|string|标题|true|-


**Request-example:**
```accesslog
curl -X GET -i /posts/exist?title=bz13l6
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
-|object|Return object.|-

**Response-example:**
```accesslog
true
```

## 查询下一条记录
**URL:** `/posts/{code}/next`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 查询下一条记录


**Path-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
code|string|代码|true|-



**Request-example:**
```accesslog
curl -X GET -i /posts/87685/next
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
title|string|标题|-
cover|string|封面|-
tags|array|标签|-
category|object|分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
code|string|编号|-
content|object|内容和目录|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|string|内容|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─catalog|string|目录|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "title": "w7fwqv",
  "cover": "nx0ls1",
  "tags": [
    "ccsi5w"
  ],
  "category": {
    "code": "87685",
    "name": "erinn.blanda"
  },
  "code": "87685",
  "content": {
    "content": "4ajyu1",
    "catalog": "z643br"
  },
  "modifyTime": "2023-02-04 10:39:28"
}
```

## 查询上一条记录
**URL:** `/posts/{code}/previous`

**Type:** `GET`

**Content-Type:** `application/x-www-form-urlencoded;charset=utf-8`

**Description:** 查询上一条记录


**Path-parameters:**

Parameter|Type|Description|Required|Since
---|---|---|---|---
code|string|代码|true|-



**Request-example:**
```accesslog
curl -X GET -i /posts/87685/previous
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
title|string|标题|-
cover|string|封面|-
tags|array|标签|-
category|object|分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
code|string|编号|-
content|object|内容和目录|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─content|string|内容|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─catalog|string|目录|-
modifyTime|string|时间|-

**Response-example:**
```json
{
  "title": "lzwx2d",
  "cover": "e7mibo",
  "tags": [
    "px8ixr"
  ],
  "category": {
    "code": "87685",
    "name": "erinn.blanda"
  },
  "code": "87685",
  "content": {
    "content": "fv9m3h",
    "catalog": "em0eay"
  },
  "modifyTime": "2023-02-04 10:39:28"
}
```
