#### Notes

#### Prerequisite
* Login Form - email/password
* Create bootstrap navbar
* Menus
  * Login => /login
  * Products => /products  

##### Prerequisite : LocalStorage in HTML5
* Add Item
```ts
localStorage.setItem("LOGGED_IN", "true");
```
* Get Item
```ts
const isLoggedIn = localStorage.getItem("LOGGED_IN");
console.log(isLoggedIn);
```
* Remove item
```ts
localStorage.removeItem("LOGGED_IN");
```
* Remove all items
```ts
localStorage.clear();
```

#### Task 1: Login Form Angular

* Add FormsModule, CommonModule
* Add ngModel to form fields
* Add ngSubmit and implement onSubmit logic

##### Task 1.1 Form Fields
* ts
```ts
  email!: string;
  password!: string;
```

* Normal Text Box
```html
<input type="email" name="email" id="email" class="form-control">
```
to
* Link Textbox in angular using ngModel
```html
<input type="email" name="email" id="email" class="form-control" [(ngModel)]="email">
```

##### Task 1.2 Form Submission

```ts
  onSubmit() {
     alert('Form is submitted');
   }
```

* html
  
```html
<form onsubmit="onSubmit()">
</form>
```

* In Angular form submission

```html
<form (ngSubmit)="onSubmit()">
</form>
```

#### Task 1.3: Get Form values 

```ts
  onSubmit() {
     alert('Form is submitted');

    //How to get form values in angular
     alert('Email:' + this.email);
     alert('Password:' + this.password);
```

#### Task 1.4 : Store the form data in JSON

```ts
//Convert form values to json data
    const userData = {
      "email": this.email,
      "password": this.password
    };
console.log(userData);

```

##### Task 1.5: Login Logic
```ts
// Login Details: admin@gmail.com/admin
    if (this.email == "admin@gmail.com" && this.password == "admin") {
      alert("Login Successful");
      localStorage.setItem("LOGGED_IN", "true");
      // window.location.href = "/products"; //Page redirection ( html/JS)
      this.router.navigateByUrl('/products'); // recommended - SPA
    } else {
      alert("Invalid Login Credentials");
    }
```

##### Task 1.6 : Page Redirection

```ts
 // window.location.href = "/products"; //Page redirection ( html/JS)
      this.router.navigateByUrl('/products'); // recommended - SPA
```




