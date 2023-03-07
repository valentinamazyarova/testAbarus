const Row = ({currentPosts}) => {

    return (
        currentPosts && currentPosts.map(post => {
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