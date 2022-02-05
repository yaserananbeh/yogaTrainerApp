### **GetAll**

get_method

`/api/users/`

### -----------------------------

### **GetOneById**

get_method

` /api/users/61fe867d37eaec22570685c6`

### -----------------------------

### **CreateOne**

post_method

`/api/users/`

#### _body_

```
{
  "name": "yaseru",
  "email": "yaser@admin.com",
  "password": "123456789",
  "phone": "123456789",
  "userRole": 2
}
```

### -----------------------------

### **UpdateOneById**

put_method

`/api/users/61fe867d37eaec22570685c6`

#### _body_

```
{
  "name": "yaseruasdf",
  "email": "yaser@admin.com",
  "password": "123456789",
  "phone": "123456789",
  "userRole": 2
}
```

### -----------------------------

### **DeleteOneById**

delete_method

`/api/users/61fdd7731eaa0bee93dc34d3`

### -----------------------------

### **FindOneByEmail**

get_method

`/api/users/find/yaser@admin.com`
