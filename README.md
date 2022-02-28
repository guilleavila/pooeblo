
# Pooeblo

A brief description of what this project does and who it's for




## API Reference

#### SERVER

```http
  AUTH /api
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/signup` | Signup |
| `POST` | `/signup` | Signup |
| `GET` | `/login` | Login |
| `POST` | `/login` | Login |
| `POST` | `/logout` | Logout |

```http
  USERS /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Users |
| `PUT` | `/:user_id/edit` | Edit User |
| `DELETE` | `/:user_id/delete` | Delete User |

```http
  TOWNS /api/towns/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Towns |
| `POST` | `/create` | Create Town |
| `PUT` | `/:town_id/edit` | Edit Town |
| `DELETE` | `/:town_id/delete` | Delete Town |
| `PUT` | `/:town_id/follow` | Follow Town |
| `PUT` | `/:town_id/unfollow` | Unfollow Town |


```http
  HOUSES /api/houses/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Houses |
| `POST` | `/create` | Create House |
| `PUT` | `/:house_id/edit` | Edit House |
| `DELETE` | `/:house_id/delete` | Delete House |
| `PUT` | `/:house_id/add-to-fav` | Add House to favs |
| `PUT` | `/:house_id/subtract-from-fav` | Subtract House from favs |


```http
  SUBSCRIPTIONS /api/subscriptions/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Subscriptions |
| `POST` | `/create` | Create Subscription |
| `DELETE` | `/:subscription_id/delete` | Cancel Subscription |


```http
  BOOKINGS /api/bookings/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/` | Get All Bookigns |
| `POST` | `/create` | Create Booking |
| `DELETE` | `/:booking_id/delete` | Delete House |
| `PUT` | `/:booking_id/edit` | Edit House |




#### CLIENT

```http
  HOME
```

| Type     | Description                |
| :------- | :------------------------- |
| `/` | Home |


```http
  PUEBLOS Y CASAS
```
| Type     | Description                |
| :------- | :------------------------- |
| `/pueblos` | Pueblo's search results |
| `pueblos/:pueblo_id`' | Pueblo's details |
| `/pueblos/:pueblo_id/casas` | Pueblo's houses |
| `/pueblos/:pueblo_id/casas/:casa_id` | House detail's |
| `/pueblos/:pueblo_id/casas/:casa_id/reservar` | Rent house |


```http
  PERFILES
```

| Type     | Description                |
| :------- | :------------------------- |
| `/mi-perfil/:user_id` | User's profile |
| `/mi-perfil/:user_id/reserva/reserva_id` | User's bookings |



## Authors

- [Guillermo Ávila & Inés García](https://www.github.com/octokatherine)

