class Config {
    
   public vacationsUrl = "http://localhost:3001/api/vacations/"
   public vacationByCodeUrl ="http://localhost:3001/api/vacations-by-code/"
   public addVacationUrl = "http://localhost:3001/api/vacations/"
   public registerUrl = "http://localhost:3001/api/auth/register/"
   public loginUrl = "http://localhost:3001/api/auth/login/"
   public addFollowUrl = "http://localhost:3001/api/followers/"
   public vacationImageUrl ="http://localhost:3001/api/vacations/images/"
   public getUserUrl  = "http://localhost:3001/api/users/"
   public followersNumber = "http://localhost:3001/api/followersNumber/"
   public getvacationForUser ="http://localhost:3001/api/getVacationsForUser/"
   public removefollowerUrl = "http://localhost:3001/api/removeFollower/"
   }
   const appConfig = new Config()
   export default appConfig;