Functionalities:
Admin and editor can add books
Publisher can add post book (pending)
Admin or editor can accept/reject book add request
Normal user can see book and can search different way
Normal user can give review/rating
Every publisher/writer/translator/cover designer has a profile
Normal user can buy book
Easy filtering options everywhere
Easy book add system
Admin or editor update any book information 
Add categories/tags 

**Account information**

**Admin**:
Name 
userName 
Password
Email
Role 

**Editor**:
name
userName
Password
Email
Role 

**User:**
name
userName
Password
Email
Role 


**Data model **

**Book** 

Book Title: Stirng
Author: Array
Translator:  Array ObjectIds
Category: Array String
Ratings and Reviews: array of ObjectIds
Availability Status: string 
Price: number
Book Length: number 
First Published: date
EditionAndDate: object
-	Edition
-	date
Publication: string
ISBN: string
Language: array of string
Format: string 
Summary : object
-	Short summery
-	Long summery
Cover designer: Object Id


**Author profile **
Name: string
Image: string
Bio text: object(short and long)
Total book: number
Review and ratings


**Publisher profile **
Name: string
Image: string
Bio text: object(short and long)
Total book: number
Review and ratings

**Translator profile **
Name: string
Image: string
Bio text: object(short and long)
Total book: number
Review and ratings

**Cover designer profile **
Name: string
Image: string
Bio text: object(short and long)
Total book: number
Review and ratings

**Api Endpoints **
**Main route**
‘api/v1’

**Books endpoints**
//Get all books with filter or no filter, dynamic
GET: ‘/books’

// Get book by _id
GET: ‘/books/:id’

// create book 
POST : ‘/books’

//update book by _id
PATCH: ‘/books/:id’

/Delete book by _id
DELETE: ‘/books/:id’

// DELETE books by _ids
DELETE: 


**Profiles endpoints**

**Author profile**

// get all author profile
GET: ‘/authosr’

// get a author profile
GET: ‘/authors/:id’

// create a author profile
POST: ‘/authors’

// update a author profile 
PATCH: ‘/authors/:id’

// delete a author profile
DELETE: ‘/authors/:id’


**Translator profile**

// get all Translator profile
GET: ‘/translators’ 

// get a translators profile
GET: ‘/translators/:id’

// create a translators profile
POST: ‘/translators’

// update a translators profile 
PATCH: ‘/translators/:id’

// delete a translators profile
DELETE: ‘/translators/:id’


**Publisher profile**

// get all Publisher profile
GET: ‘/publishers’ 

// get a publisher profile
GET: ‘/publishers/:id’

// create a publishers profile
POST: ‘/publishers’

// update a publisher profile 
PATCH: ‘/publishers/:id’

// delete a publisher profile
DELETE: ‘/publishers/:id’


**Cover designer profile**

// get all Cover designer profile
GET: ‘/designers’ 

// get a designer profile
GET: ‘/designers/:id’

// create a designer profile
POST: ‘/designers’

// update a designer profile 
PATCH: ‘/designers/:id’

// delete a designer profile
DELETE: ‘/designers/:id’



**User endpoints**

// get all user
GET: ‘/users’

// get a user by _id
GET: ‘/users/:id’

//  create a user
POST: ‘/users’

// update user by _id
PATCH: ‘/users/:id’

// delete user by _id
DELETE: ‘/users/:id’

// delete users by _ids
DELETE: 



—-------------------------------------Latest Development UPDATE—----------------------------------------------------





—----------------------------------------------------TODO—--------------------------------------------------------



