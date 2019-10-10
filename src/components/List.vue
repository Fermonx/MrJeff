<template>
  <div id="List">
        <b-container id="ordersContainer" class="mt-4">
          <b-row>
            <b-col cols="8">
              <h5 class="title">INFORMACIÓN DE TUS PEDIDOS</h5>
            </b-col>
          </b-row>
        <hr class="line"/>
        <b-list-group>
            <b-list-group-item style="border: none;" v-for="(order, id) in orders" :key="id">
              <b-row>
                <b-col class="d-none d-sm-block" cols="1" md="1">
                  <div v-if="order.orderStatus.code == 'PICKUP-DELIVERY'">
                    <i class="fa fa-truck fa-3x orderIcons"></i>
                  </div>
                  <div v-else>
                    <i class="fa fa-bookmark fa-3x orderIcons"></i>
                  </div>
                </b-col>
                <b-col class="d-block d-sm-none" cols="1">
                  <div v-if="order.orderStatus.code == 'PICKUP-DELIVERY'">
                    <i class="fa fa-truck fa-3x orderIcons"></i>
                  </div>
                  <div v-else>
                    <i class="fa fa-bookmark fa-3x orderIcons"></i>
                  </div>
                </b-col>
                <b-col cols="8" offset="2"  md="5" offset-md="0">
                  <b-row class="orderCode">Pedido nº {{order.code}}</b-row>
                  <b-row class="date">Fecha Pedido: {{order.orderDate}}</b-row>
                </b-col>
                <b-col align-self="center" sm="2" cols="12" md="6">
                  <b-row align-h="end" class="d-none d-sm-block">
                    <router-link :to="{ path: '/orderId', query: { id: order.id }}" tag="button" class="btn btn-primary px-4 py-2" size="sm">VER PEDIDO</router-link>
                  </b-row>
                  <b-row class="d-block d-sm-none mt-2">
                    <router-link :to="{ path: '/orderId', query: { id: order.id }}" tag="button" class="btn btn-primary px-4 py-1" size="sm">VER PEDIDO</router-link>
                  </b-row>
                </b-col>
              </b-row>
              <hr/>
            </b-list-group-item>     
        </b-list-group>
      </b-container>
  </div>
</template>

<script>
import request from '../services/request'
import Axios from 'axios'

export default {
  name: 'List',

  data() {
    return {
      
    }
  },
  beforeCreate: function() {
    document.body.className = 'list';
  },
  props: {
    orders: null
  },

  computed: {

  },
  methods: {

  },
  mounted: function () {
    Axios.get('https://ecommerce.v1.backend.pre.mrjeffapp.net/apps/orders/search/findByCustomerId', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LWZyb250ZWRAbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQ1VTVE9NRVIiXSwibmFtZSI6IkNhcmxvcyIsImlzcyI6ImJhY2tlbmQubXJqZWZmYXBwLm5ldCIsImlkIjoiMjk3NGQ4NGEtZDBhZS00MTQwLWJlZjktNjRjYWE0NmNmMDFhIiwiZnVsbG5hbWUiOiJDYXJsb3MgSGVybsOhbmRleiIsInR5cGUiOiJjdXN0b21lciIsImV4cCI6MTU3MDcyMDEyNiwiaWF0IjoxNTcwMTE1MzI2LCJqdGkiOiJlYjZhY2QwMS0wNDg2LTRiYzQtOTkwYi03ZmZkZWMwNzM2MGQiLCJlbWFpbCI6InRlc3QtZnJvbnRlZEBtcmplZmZhcHAuY29tIn0.6YR5SZUciZAFxqsWYcU41JtMRV_ewMOiaNpX8oBkHTP1IyM0UadzejL5nhgzYU6hOuQgKC90kAqJaTxY5HMAkw',
        'Content-Type': 'application/json'
      }
    })
    .then(Response => this.orders = Response.data.orders._embedded.orders)
    
  }

}

</script>

<style>


  #List{
    width: 100%;
  }

  hr.line{
    width: 100%;
    border: 0.3px solid;
  }

  .title{
    
    font-weight: bold;
    text-align: left;
  }

  @media only screen and (max-width: 768px){
  #btnMobile{
    display: none;
  }
}

  .orderIcons{
    color: #007bff;
  }

  .date{
    color: gray;
    font-weight: 300
  }

  .leftTxt{
    text-align: left
  }

  .orderBtn{
    display: inherit
  }

  .orderCode{
    font-weight: bold
  }

  
</style>