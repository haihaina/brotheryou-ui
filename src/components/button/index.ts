import BroButton from './bro-button.vue'
BroButton.install = (app:any) =>{
    // console.log('appp',app)
    app.component('BroButton',BroButton)
}
export default BroButton