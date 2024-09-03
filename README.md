#### Notes

#### Prerequisite
* Login Form - email/password
* Create bootstrap navbar
* Menus
  * Login => /login
  * Products => /products  

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



