## Sample Employee document

> {

    "empName": "ravi",
    "age": 21,
    "skills": ["javascript", "nodejs", "java"],
    "address": { "city": "hyderabad", "pincode": 500085 },
    "experiences": [
      { "companyName": "wipro", "yrsOfExp": 2, "salary": 50000 },
      { "companyName": "cognizant", "yrsOfExp": 3, "salary": 80000 }
    ]

}

# MongoDB queries

---

## Read operations

##### 1. Read emp by name

> db.emps.findOne(condition)

##### 2. Read emp with "nodejs" skill

> db.emps.findOne({skills:"nodejs"})

##### 3. Read emp with "java" & "nodejs" skills

> db.emps.findOne({skills:$all:["nodejs","java"]})

##### 4. Read emps from city "Hyderabad"

> db.emps.findOne({"address.city":"Hyderabad"})

##### 5. Read emps by "companyName"

> db.emps.findOne({"experiences.companyName":"tsc"})

##### 6. Read emps by multiple "companyNames"

> db.emps.findOne({"experiences.companyName":{$all:["tsc","wipro"]}})

## Update operations

##### 1. Update emp name

> db.emps.updateOne(condition,{$set:update})

##### 2. Update emp by adding new skill an end

> db.emps.updateOne(condition,{$push:{skills:"new-skill"}})

##### 3. Update emp by adding multiple new skills at end

> db.emps.updateOne(condition,{\$push:{skills:{\$each:[skill1,skill2,...]}}})

##### 4. Update emp by adding new skill at specific position(index)

> db.emps.updateOne(condition,{\$push:{skills:{\$each:[new-skill],$position:index}}})

##### 5. Update emp by deleting a skill

> db.emps.updateOne(condition,{$pull:{skills:"skill-name}})

##### 6. Update emp by deleting multiple skills

> db.emps.updateOne(condition,{\$pull:{skills:{\$in:[skill1,skill2,..]}}})

##### 7. Update emp by replacing a skill(javascript) with another(python)

> db.emps.updateOne({empName:"",skills:javascript},{\$set:{"skills.$":"python"}})

##### 8. Update emp address by adding new fields or updating exsting field

> db.emps.updateOne(condition,{$set:{"address.field":"new-value"}})

##### 9. Update emp by deleting fields from address

> db.emps.updateOne( condition, {$unset:{"address.field":""}})

##### 10. Update emp by changing "salary" field of a specific emp

> db.emps.updateOne({"experiences.companyName":"wipro"},{\$inc:{"experiences.$.salary":10000}})

##### 11. Update emp by adding new exp to an emp

> db.emps.updateOne(condition, {$push:{experiences:{}}})

##### 12. Update emp by deleting an exp from an emp

> db.emps.updateOne(condition, {$pull:{experiences:{}}})
