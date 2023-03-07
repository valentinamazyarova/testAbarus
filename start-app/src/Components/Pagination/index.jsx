const Pagination = ({countPostOnPage, totalPosts}) => {
    console.log(countPostOnPage)
    console.log(totalPosts)
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts/countPostOnPage); i++){
        pageNumbers.push(i)
    }

    console.log(pageNumbers)
    return ( 
        <div>
                {
                    pageNumbers.map(number => (
                       <p key={number}>{number}</p> 
                    ))
                }

        </div>
     );
}
 
export default Pagination;