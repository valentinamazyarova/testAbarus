const Pagination = ({countPostOnPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(totalPosts/countPostOnPage); i++){
        pageNumbers.push(i)
    }

    console.log(pageNumbers)
    return ( 
        <div>
                {
                    pageNumbers.map(number => (
                       <button key={number} onClick={()=>{paginate(number)}}>{number}</button> 
                    ))
                }

        </div>
     );
}
 
export default Pagination;