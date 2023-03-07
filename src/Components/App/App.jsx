import { useEffect, useState } from "react";
import Pagination from "../Pagination/index.jsx";
import SearchBar from "../SearchBar/index.jsx";
import Table from "../Table/index.jsx";
import "./style.css";
import axios from "axios"

function App() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPostOnPage] = useState(10);
    const getPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data);
    }
    useEffect(() => {
        getPosts()
        console.log(posts)
        console.log(currentPosts)
    }, [])

    const lastPostIndex = currentPage * countPostOnPage;
    const firstPostIndex = lastPostIndex - countPostOnPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
    console.log(currentPosts)

    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
    }

    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1);

    //const

    return (
        <div >
            <SearchBar />
            {posts && <Table currentPosts={currentPosts} />}
            {<Pagination countPostOnPage={countPostOnPage} totalPosts={posts.length} paginate={paginate} />}
            <button onClick={() => { prevPage() }}>Назад</button>
            <button onClick={() => { nextPage() }}>Вперед</button>
        </div>
    );
}

export default App;
