## Def:Con Web API 가이드

### Base URL

```
https://api.defcon.or.kr
```

### API Functions Summary

| Function             | Description                     | Parameters | Type    |
|----------------------|---------------------------------|------------|---------|
| /common/getMainEvent | Get Event Data on Main Page     | N/A        | Common  |
| /member/getData      | Get Specific Member's Data      | MemberID   | Member  |
| /member/getList      | Get Array of All Member's Data  | N/A        | Member  |
| /project/getData     | Get Specific Project's Data     | ProjectID  | Project |
| /project/getList     | Get Array of All Project's Data | N/A        | Project |

---

## Common Description

### Result Values

| Variable    | Type    | Description               |
|-------------|---------|---------------------------|
| RESULT_CODE | Integer | 200 is OK, Other is Error |
| RESULT_MSG  | String  | Message for Result Check  |
| RESULT_DATA | Object  | Values of API Function    |

---

## Detail Description

### /common/getMainEvent

Input Body : __None__

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
        "title": PROJECT_TITLE,
        "content": PROJECT_CONTENT,
        "image": IMAGE_BASE64
    }
}
```

### /member/getData

Input Body
```json
{
    "MEMBER_ID": MEMBER_ID
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
        "comment": COMMENT,
        "company": COMPANY,
        "name": NAME,
        "profile_img": IMAGE_BASE64,
        "history": [
            {
                "content": HISTORY_CONTENT,
                "date": HISTORY_DATE
            },
            ...
        ],
        "blog": {
            "isEnabled": true | false,
            "url": BLOG_URL
        },
        "boj": {
            "isEnabled": true | false,
            "url": SOLVED_URL
        },
        "facebook": {
            "isEnabled": true | false,
            "url": FACEBOOK_URL
        },
        "github": {
            "isEnabled": true | false,
            "url": GITHUB_URL
        },
        "instagram": {
            "isEnabled": true | false,
            "url": INSTAGRAM_URL
        },
        "twitter": {
            "isEnabled": true | false,
            "url": TWITTER_URL
        }
    }
}
```

### /member/getList

Input Body : __None__

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
        "count": DATA_COUNT(Number),
        "data": [
            {
                "id": MEMBER_ID,
                "data": {
                    "comment": COMMENT,
                    "company": COMPANY,
                    "companyImage": COMPABY_IMAGE_BASE64,
                    "name": NAME,
                    "profile_img": IMAGE_BASE64,
                    "history": [
                    {
                      "content": HISTORY_CONTENT,
                      "date": HISTORY_DATE
                    }
                    ],
                    "blog": {
                    "isEnabled": true | false,
                    "url": BLOG_URL
                    },
                    "boj": {
                    "isEnabled": true | false,
                    "url": SOLVED_URL
                    },
                    "facebook": {
                    "isEnabled": true | false,
                    "url": FACEBOOK_URL
                    },
                    "github": {
                    "isEnabled": true | false,
                    "url": GITHUB_URL
                    },
                    "instagram": {
                    "isEnabled": true | false,
                    "url": INSTAGRAM_URL
                    },
                    "twitter": {
                    "isEnabled": true | false,
                    "url": TWITTER_URL
                    }
                }
                
            },
            ...
        ]
    }
}
```

### /project/getData

Input Body
```json
{
    "PROJECT_ID": PROJECT_ID
}
```

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
        "title": PROJECT_TITLE,
        "date": PROJECT_DATE,
        "category": PROJECT_CATEGORY,
        "content": PROJECT_CONTENT,
        "description" PROJECT_DESCRIPTION,
        "image": [
            IMAGE_BASE64,
            IMAGE_BASE64,
            ...
        ],
        "tech": [
            TECH_STACK,
            TECH_STACK,
            ...
        ],
        "user": [
            {
                "role": USER_ROLE,
                "user": USER_ID
            },
            ...
        ]
    }
}
```

### /project/getList

Input Body : __None__

Response Body
```json
{
    "RESULT_CODE": 200,
    "RESULT_MSG": "Success",
    "RESULT_DATA": {
        "count": DATA_COUNT(Number),
        "data": [
            {
                "id": PROJECT_ID,
                "data": {
                    "title": PROJECT_TITLE,
                    "date": PROJECT_DATE,
                    "category": PROJECT_CATEGORY,
                    "content": PROJECT_CONTENT,
                    "description" PROJECT_DESCRIPTION,
                    "image": [
                        IMAGE_BASE64,
                        IMAGE_BASE64,
                        ...
                    ],
                    "tech": [
                        TECH_STACK,
                        TECH_STACK,
                        ...
                    ],
                    "user": [
                        {
                            "role": USER_ROLE,
                            "user": USER_ID
                        },
                    ...
                    ]
                }
            },
            ...
        ]
    }
}
```
