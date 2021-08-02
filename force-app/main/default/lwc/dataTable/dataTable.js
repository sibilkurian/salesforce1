import { LightningElement,track } from 'lwc';
import uId from '@salesforce/user/Id';
import getProfileName from '@salesforce/apex/getProfileName.getProfile'

export default class DataTable extends LightningElement {
    @track userId = uId;
    async handleClick(){
        console.log("This is a click"+this.userId)
        let data=await getProfileName({userId:this.userId})
        let result=JSON.stringify(data);
        let parseResult=JSON.parse(result);  
    }
}