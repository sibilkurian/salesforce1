public class TriggerClass {
    public static void testTriggerClass(List<Test_Object__c> data){
        System.debug('Sibil>>>called trigger class');
        for(Test_Object__c t:data){
            System.debug('>>>Id '+t.Id);
            PageReference ics=Page.default;
            Attachment attach=new Attachment();
            Blob body;
            try{
                body=ics.getContent();
            }catch(exception e){
                System.debug('>>>Exception'+e);
            }
            List<ContentVersion>cvList = new List<ContentVersion>();
            List<ContentDocumentLink> cdlList = new List<ContentDocumentLink>();
            ContentVersion testContentInsert = new ContentVersion();
            testContentInsert.Title = 'invitation'+ String.ValueOf(System.Now());
            testContentInsert.VersionData = body;
            testContentInsert.PathOnClient = '/' + testContentInsert.Title+'.ics' ;
            //cvList.add(testContentInsert);
            cvList.add(testContentInsert);
            insert cvList;
            cvList = [select id, ContentDocumentId from ContentVersion WHERE Id in :cvList];
            for (ContentVersion cv : cvList) {
                ContentDocumentLink cl = new ContentDocumentLink();
                cl.ContentDocumentId = cv.ContentDocumentId;
                cl.LinkedEntityId = t.Id; //Shared with record ID
                cl.ShareType = 'V';
                cl.Visibility = 'AllUsers';
                cdlList.add(cl);
            }
            insert cdlList;
            
        }
    }
    
}