import BroButton from "./button";
import BroSwitch from './switch'
import BroAlert from "./message";
import BroInput from "./input";
import BroTreeItem from './TreeSelect'
import BroCarousel from './Carousel'
import BroForm from './Form'
import BroFormItem from './FormItem'
const components = [
    BroButton,
    BroSwitch,
    BroAlert,
    BroInput,
    BroTreeItem,
    BroCarousel,
    BroForm,
    BroFormItem
]
const install = (app:any)=>{
    components.forEach(i=>{
        app.use(i)
    })
}
const broUi = {
    version:"3.1.1",
    install
}
export {
    BroButton,
    BroSwitch,
    BroAlert,
    BroInput,
    BroTreeItem,
    BroCarousel,
    BroForm,
    BroFormItem
}
export default broUi
    
