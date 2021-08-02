trigger FirstTrigger on Test_Object__c (after insert) {

    TriggerClass.testTriggerClass(trigger.new);

}