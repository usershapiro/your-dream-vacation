class FollowerModel {
    
    public id: number;
    public vacationCode: number;
    

    public constructor(follower: FollowerModel) {
    this.id = follower.id,
    this.vacationCode = follower.vacationCode
    }

   
}

export default FollowerModel;