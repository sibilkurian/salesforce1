public class test_apex_url {
    string url;
    public test_apex_url(){
        url=getUrl();
    }
    public static string getUrl(){
        String baseUrl = URL.getSalesforceBaseUrl().toExternalForm();
        String url=baseUrl+'/apex/link';
		url='https://www.google.com/';
        return url;
    }
}