import { useEffect, useState } from "react";
import Pagination from "../Pagination/index.jsx";
import SearchBar from "../SearchBar";
import Table from "../Table";
import "./style.css";
// import axios from 'axios';



function App() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPostOnPage] = useState(10);


    let currentPosts;
    const lastPostIndex = currentPage * countPostOnPage;
    const firstPostIndex = lastPostIndex - countPostOnPage;

    const getPosts = async () => {
        try {

            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // console.log(res.data)
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!response.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            let data =  await response.json();
            setPosts(data);
            console.log(data )
            console.log(posts)
            posts && posts.length && (currentPosts = posts.slice(lastPostIndex, firstPostIndex));
       

    } catch (error) {
        alert(error);
        throw error;
    }
}

useEffect(() => {
    getPosts();
    console.log(posts)
    console.log("currentPosts", currentPosts)
}, [])



return (
    <div >
        <SearchBar />
        {currentPosts && <Table posts={currentPosts} />}
        {posts && <Pagination countPostOnPage={countPostOnPage} totalPosts={posts.length} />}
    </div>
);




}

export default App;
