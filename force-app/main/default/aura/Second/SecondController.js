({
/*	 onCheck: function(cmp, evt) {
		 var checkCmp = cmp.find("checkbox");
		 resultCmp = cmp.find("checkResult");
		 resultCmp.set("v.value", ""+checkCmp.get("v.value"));

	 }*/
onCheck:function(cmp,evt){
    
},onSubmit:function(cmp,evt){
    
},
     myChange: function(component, event, helper){
        //var ele=component.find("myAtt").get("v.input8");
        // cmp.set("v.test",ele);
         //console.log('hi ele'+ele);
        console.log(component.get("v.input8"));
    },
})