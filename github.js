class GitHub {
    constructor() {
        this.client_id = 'your_client_id';
        this.client_secret = 'your_client_secret';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        const reposResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }

}