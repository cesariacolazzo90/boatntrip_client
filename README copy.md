SERVER

| VERB   | URI PATH             | DESCRIPTION                       |
| ------ | -------------------- | --------------------------------- |
| GET    | `/allRentals`        | All Rentals list                  |
| POST   | `/newRentalCreated`  | Create a new rental CREATE        |
| GET    | `/:rental_id`        | Matching ID R details DESCRIPTION |
| PUT    | `/edit/:rental_id`   | Matching ID rentaledit UPDATE     |
| DELETE | `/delete/:rental_id` | Delete a Rental REMOVE            |
| POST   | `/login`             | Log in page                       |
| POST   | `/signup`            | Sign up page                      |
| GET    | `/verify`            | Verify auth Token                 |
| GET    | `/allUsersList`      | create a new User                 |
| POST   | `/createUser`        | create a new user                 |
| GET    | `/:user_id`          | Matching ID user detail           |
| PUT    | `/edit/:user_id/`    | Matching ID user edit             |
| DELETE | `/delete/:user_id/`  | Delete a user                     |
| GET    | `/profile`           | logged user detail                |

CLIENT

| URI PATH              | DESCRIPTION                | PROTECTED |
| --------------------- | -------------------------- | --------- |
| `/gallery`            | All Rentals list           |           |
| `/newrental`          | new rental - CREATE        | x         |
| `/details/:rental_id` | Matching ID Rental DETAILS | X         |
| `/edit/:rental_id`    | Matching ID Rental UPDATE  | X         |
| `/login`              | Log in page                |           |
| `/signup`             | Sign up page               |           |
| `/allusers`           | All users list             |           |
| `/user/:user_id`      | Matching ID user detail    | X         |
| `/edit_user/:user_id` | Matching ID user detail    | X         |
| `*`                   | 404 page                   |           |

# boatbooking
