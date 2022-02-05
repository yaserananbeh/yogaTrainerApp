### **GetAll**

get_method

`/api/trainers/`

### -----------------------------

### **GetOneById**

get_method

` /api/trainers/61fe89bf37eaec22570685d3`

### -----------------------------

### **CreateOne**

post_method

`/api/trainers/`

#### _body_

```
{
  "name": "trainer",
  "email": "trainer@test.com",
  "password": "456789123",
  "phone": "078565631",
  "city": "Amman",
  "pricePerHour": 50,
  "image": "test.png",
  "yearsOfExperience": 3
}
```

### -----------------------------

### **UpdateOneById**

put_method

`/api/trainers/61fe89bf37eaec22570685d3`

#### _body_

```
{
  "name": "trainer",
  "email": "trainer@test.com",
  "password": "456789123",
  "phone": "078565631",
  "city": "Amman",
  "pricePerHour": 50,
  "image": "test.png",
  "yearsOfExperience": 3
}
```

### -----------------------------

### **DeleteOneById**

delete_method

`/api/trainers/61fe89bf37eaec22570685d3`

### -----------------------------

### **FindAllByName**

get_method

`/api/trainers/find/trainer`

### -----------------------------

### **FindAllByGreaterPrice**

get_method

`/api/trainers/greater/45`

### -----------------------------

### **FindAllByLessPrice**

get_method

`/api/trainers/less/45`
