### **GetAll**

get_method

`/api/appointments/`

### -----------------------------

### **GetOneById**

get_method

` /api/appointments/61fde1e54d1585a39cefc787`

### -----------------------------

### **CreateOne**

post_method

`/api/appointments/`

#### _body_

```
{
  "status": 0,
  "userId": "111111",
  "trainerId": "989898",
  "appointmentDate": "15-10-2021",
  "appointmentHour": "5:00"
}
```

### -----------------------------

### **UpdateOneById**

put_method
`/api/appointments/61fde1e54d1585a39cefc787`

#### _body_

```
{
  "status": 0,
  "userId": "111111",
  "trainerId": "989898",
  "appointmentDate": "15-10-2021",
  "appointmentHour": "5:00"
}
```

### -----------------------------

### **DeleteOneById**

delete_method

`/api/appointments/61fde1e54d1585a39cefc787`

### -----------------------------

### **FindAllByUserId**

get_method

`/api/appointments/ufind/111111`

### -----------------------------

### **FindAllByTrainerId**

get_method

`/api/appointments/tfind/989898`
