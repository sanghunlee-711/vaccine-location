
class Repository {
    URL ="";
    constructor(url: string | undefined){
        this.URL = url || this.URL;
    }

    async getData() {
        try{
            const PostResponse = await fetch(this.URL,{

            });
            const post = await PostResponse.json();
            const data = await post;

            return data;
        } catch(error){
            throw new Error(error)
        }
    }
}

export default Repository;