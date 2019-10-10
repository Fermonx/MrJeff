import Axios from 'axios'

/*const baseDomain = 'https://ecommerce.v1.backend.pre.mrjeffapp.net'
const path = `${baseDomain}/apps/orders/search/findByCustomerId`*/

export default Axios.create({
    path: `https://ecommerce.v1.backend.pre.mrjeffapp.net/apps/orders/search/findByCustomerId`,
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LWZyb250ZWRAbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQ1VTVE9NRVIiXSwibmFtZSI6IkNhcmxvcyIsImlzcyI6ImJhY2tlbmQubXJqZWZmYXBwLm5ldCIsImlkIjoiMjk3NGQ4NGEtZDBhZS00MTQwLWJlZjktNjRjYWE0NmNmMDFhIiwiZnVsbG5hbWUiOiJDYXJsb3MgSGVybsOhbmRleiIsInR5cGUiOiJjdXN0b21lciIsImV4cCI6MTU3MDAwMTAzMiwiaWF0IjoxNTY5Mzk2MjMyLCJqdGkiOiI2ODE5OWRmNi0yNzljLTQ2ODItYjg4My1hZmIxZDQ5OWRjNWQiLCJlbWFpbCI6InRlc3QtZnJvbnRlZEBtcmplZmZhcHAuY29tIn0.f-CiH4O4MLpVMC3W2XdIVyjxJMSz38dt648Ccs-Kc4gHmvYH2nCZloeyEQOJXYLWTA8gd5_jUY5O937h9mjWrg',
        'Content-Type': 'application/json'
    }
})