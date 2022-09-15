class GitHub {
    constructor() {
        this.client_id = 'your_client_id';
        this.client_secret = 'your_client_secret'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}