import axios from 'axios'

class RentalService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/rental`

        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getRentals() {
        return this.api.get('/allRentals')
    }

    getRentalDetails(rental_id) {
        return this.api.get(`/${rental_id}`)
    }

    getRentalByOwner(user_id) {
        return this.api.get(`/rentalsByOwner/${user_id}`)
    }

    saveRental(rentalData) {
        return this.api.post(`/newRentalCreated`, rentalData)
    }



    placeBooking(rentalData) {
        return this.api.post('/placeBookingOffer', rentalData)
    }

    joinRental(rental_id) {
        return this.api.put(`/joinRental/${rental_id}`)
    }

    unjoinRental(rental_id) {
        return this.api.put(`/unjoinRental/${rental_id}`)
    }


    editRental(rental_id, rental) {
        return this.api.put(`/edit/${rental_id}`, rental)
    }


    deleteRental(rental_id) {
        return this.api.delete(`/delete/${rental_id}`)

    }

    searchByCity(searchCity) {
        console.log("servicio cliente----", searchCity)
        return this.api.get(`/searchCity?city=${searchCity}`)
    }


    searchByBoat(searchBoatType) {
        console.log("servicio cliente----", searchBoatType)
        return this.api.get(`/searchBoat?boatType=${searchBoatType}`)
    }



    // searchByOwner(searchROwner) {
    //     console.log("servicio cliente----", searchROwner)
    //     return this.api.get(`/searchROwner?dueno=${searchdueno}`)
    // }




    getMyEvents = (req, res, next) => {

        const { _id } = req.payload

        Event
            .find({ organizer: _id })
            .then(response => res.json(response))
            .catch(err => next(err))
    }




    searchByCity(searchCity) {
        console.log("servicio cliente----", searchCity)
        return this.api.get(`/searchCity?city=${searchCity}`)
    }


    filterByPrice(price) {
        console.log('hellegado')
        return this.api.get('filterprice')
    }
}







const rentalServices = new RentalService()

export default rentalServices