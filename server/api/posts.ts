import data from "./posts.json";

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            if (id) {
                resolve(data.find(post => post.id == id))
            } else {
                resolve(data);
            }
        }, 500);
    });
});