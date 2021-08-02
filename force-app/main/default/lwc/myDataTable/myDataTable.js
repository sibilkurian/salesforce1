
import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import COLORS from '@salesforce/resourceUrl/colors'
const columns = [
    { label: 'Label', fieldName: 'name',  cellAttributes:
    { 
        class:{fieldName:'amountColor'},
        iconName: { fieldName: 'trendIcon' }, iconPosition: 'left' }
    },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class MyDataTable extends LightningElement {
    data =[{
        name:'abc',trendIcon:'utility:warning',amountColor:"datatable-orange",phone:'1234'
    },
    {
        name:'bcd',amountColor:"datatable-green",phone:'1234'
    },{
        name:'efg'
    }
    ]
    columns = columns;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        //const data = await fetchDataHelper({ amountOfRecords: 100 });
        //this.data = data;
        
        
    }
    renderedCallback(){ 
        if(this.isCssLoaded) return
        this.isCssLoaded = true
        loadStyle(this, COLORS).then(()=>{
            console.log("Loaded Successfully")
        }).catch(error=>{ 
            console.error("Error in loading the colors")
        })
    }
    

}