<template>
  <div id="detail">
      <h5 class="title">INFORMACIÓN DE TUS PEDIDOS</h5>
        <hr class="line"/>
      <b-container id="ordersContainer" class="mt-5">
        <b-col>
        <b-row class="orderCode" align-h="start">
            <b-col md="9" cols="7">
              Datos del pedido nº {{orderCode}}
            </b-col>
        </b-row>
        <b-row class="date" align-h="start">
          <b-col md="9" cols="7">
            Fecha del Pedido: {{date}}
          </b-col>
        </b-row>
        </b-col>
        <b-row>

            <div id="productsContainer">
              <div >
                <h6 class="title">Productos</h6>
                <hr class="separate">
              </div>
              <div v-for="(product, id) in productsOrder" :key="id" class="productColor">
                <b-row >
                  <b-col md="1" cols="1">
                    {{product.quantity}}
                  </b-col>
                  <b-col md="4" cols="2" class=" textAlignLeft">
                    {{product.name}}
                  </b-col>
                  <b-col md="7" cols="8" class=" textAlignRight">
                    {{product.total}} {{currency}}
                  </b-col>
                </b-row>
              </div>
              <hr/>
              <div>
                <b-row>
                  <h6 class="title ml-2">PRODUCTOS AÑADIDOS</h6>
                </b-row>
                <b-row>

                </b-row>
              </div>
              <hr/>
                <b-row >
                  <b-col md="4" cols="2" class="mt-2 textAlignLeft subtitle">
                    Total
                  </b-col>
                  <b-col md="6" offset-md="2" cols="9" class=" textAlignRight">
                    {{totalPrice}} {{currency}}
                  </b-col>
                </b-row>
            </div>

        </b-row>
        <b-row class="mt-4" align-h="center" fluid>
          <b-button variant="primary" class="timeBtn py-2">
            CAMBIAR HORA DE RECOGIDA Y VENTA
          </b-button>
        </b-row>
        <b-row id="backBtn" class="mt-4" align-h="center" >
          <router-link to="/orders" tag="button" class="btn btn-outline-secondary px-4 py-2" size="lg" ><i class="fa fa-arrow-left fa-1x"></i> VOLVER</router-link>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Detail',

  data() {
    return {
      products: [],
      orders: [],
      productsOrder: [],
      orderCode: null,
      date: null,
      totalPrice: null,
      currency: null,
      i: 0

    }
  },
  props: {

  },
  computed: {
    
  },
  methods: {

  },
  mounted: function () {
    Axios.get('https://ecommerce.v1.backend.pre.mrjeffapp.net/apps/orders/search/findByCustomerId'+'?'+this.$route.query.id, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LWZyb250ZWRAbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQ1VTVE9NRVIiXSwibmFtZSI6IkNhcmxvcyIsImlzcyI6ImJhY2tlbmQubXJqZWZmYXBwLm5ldCIsImlkIjoiMjk3NGQ4NGEtZDBhZS00MTQwLWJlZjktNjRjYWE0NmNmMDFhIiwiZnVsbG5hbWUiOiJDYXJsb3MgSGVybsOhbmRleiIsInR5cGUiOiJjdXN0b21lciIsImV4cCI6MTU3MDcyMDEyNiwiaWF0IjoxNTcwMTE1MzI2LCJqdGkiOiJlYjZhY2QwMS0wNDg2LTRiYzQtOTkwYi03ZmZkZWMwNzM2MGQiLCJlbWFpbCI6InRlc3QtZnJvbnRlZEBtcmplZmZhcHAuY29tIn0.6YR5SZUciZAFxqsWYcU41JtMRV_ewMOiaNpX8oBkHTP1IyM0UadzejL5nhgzYU6hOuQgKC90kAqJaTxY5HMAkw',
        'Content-Type': 'application/json'
      }
    })
    .then(Response => {
        let ordersArr = [];
        let productsArr = [];
        let prodMap = new Map();
        let productData;
        ordersArr.push(Response.data.orders._embedded.orders);
        productsArr.push(Response.data.products._embedded.products);
        for (let element of Response.data.products._embedded.products) { 
        prodMap.set(element.id, element);
        }

        for(let i = 0; i < ordersArr[0].length; i++){
          if(ordersArr[0][i].id === this.$route.query.id){
            this.orderCode = ordersArr[0][i].code;
            this.date = ordersArr[0][i].orderDate;
            this.totalPrice = ordersArr[0][i].totalPrice;
            if (ordersArr[0][i].countryCode === 'CO') this.currency = '$';
            this.orders.push({
              ordProducts: ordersArr[0][i].productsOrder
            })           
            console.log(this.orders[0].ordProducts[i].productId) 
          for(let x = 0; x < this.orders[0].ordProducts.length; x++){
            productData = prodMap.get(this.orders[0].ordProducts[x].productId)
            this.productsOrder.push({
              name: productData.name,
              quantity: this.orders[0].ordProducts[x].quantity,
              total: productData.price * this.orders[0].ordProducts[x].quantity
            })
          }
          }

        }
    })

  }

}

</script>

<style>

  #detail{
    width: 100%;
  }

  .textAlignLeft{
    text-align: left;
  }

  .textAlignRight{
    text-align: right;
  }

@media only screen and (max-width: 768px){
  #productsContainer{
    padding: 2rem;
    border: 1px solid grey;
    border-radius: 4px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

    .timeBtn{
    width: 100%;
  }
}

@media only screen and (min-width: 768px){
    #productsContainer{
    padding: 2rem;
    border: 1px solid grey;
    border-radius: 4px;
    width: 45%;
    height: auto;
    margin: 0 auto;
  }

    .timeBtn{
    width: 45%;
  }
}

  hr.separate{
    display: block;
    height: 100%;
  }

  .title{
    font-weight: bolder;
    text-align: left;
  }

  .subtitle{
    color: black;
  }

  .productColor{
    color: gray;
  }

  .date{
    color: gray;
    font-weight: 300
  }

  .orderBtn{
    display: inherit
  }

  .orderCode{
    font-weight: bold
  }

  
</style>


<!--

  <b-card>
    <template v-slot:header>
      <h6 class="mb-0" >Productos</h6>
    </template>

    <b-card-body>
      <b-card-text v-for="(products, id) in orders" :key="id" class="mt-2">
        <div>
          <b-row>
            <b-col cols="6">
              Productosss
            </b-col>
            <b-col cols="4" offset="2">
              5000€
            </b-col>
          </b-row>
                    <b-row>
            <b-col cols="6">
              Productosss
            </b-col>
            <b-col cols="4" offset="2">
              5000€
            </b-col>
          </b-row>
        </div>

      </b-card-text>

    </b-card-body>


  </b-card>

  -->