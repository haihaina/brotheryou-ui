import BroAlert from './bro-message.vue'
BroAlert.install = (app:any) =>{
    app.component('BroAlert',BroAlert)
}

export default BroAlert