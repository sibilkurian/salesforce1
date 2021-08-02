public with sharing class getProfileName {
    public getProfileName() {

    }
    @AuraEnabled
    public static User getProfile(string userId){
        List<User> u =new List<User>();
        u= [SELECT Profile.Name FROM User WHERE Id=:userId];
        System.debug('user list=--->'+u[0]);
        return u[0];
    }
}