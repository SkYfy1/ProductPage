class userDto {
    email;
    id;
    isActivated;
    status

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.status = model.status;
    }
}

export default userDto;