const Row = ({posts}) => {

    return (
        posts && posts.map(post => {
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr >
            )
        })

    );
}

export default Row;