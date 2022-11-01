import {useFetch} from "../Hooks/useFetch";


const baseUrl = "https://jsonplaceholder.typicode.com";
function  UseFetch() {
     const {data:useData} =useFetch(baseUrl,"users");
     const {data:postsData} =useFetch(baseUrl,"posts");
    return(
        <div>
            <h1>useFetch</h1>
            {/*<button onClick={() => fetchUrl("users")}>Users</button>*/}
            {/*<button onClick={() => fetchUrl("posts")}>Posts</button>*/}
            {/*<button onClick={() => fetchUrl("todos")}>Todos</button>*/}
            { useData && <pre>{JSON.stringify(useData[0],null,2)}</pre>}
            { useData && <pre>{JSON.stringify(postsData[0],null,2)}</pre>}
        </div>
    )
}
export default  UseFetch;