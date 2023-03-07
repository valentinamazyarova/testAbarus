import Row from "./Row";
import sortIcon from "./sortIcon.svg"
const Table = ({posts}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="id">ID
                        <img className="icon" src={sortIcon} alt="" />
                    </th>
                    <th>Заголовок
                        <img className="icon" src={sortIcon} alt="" />
                    </th>
                    <th>Описание
                        <img className="icon" src={sortIcon} alt="" />
                    </th>

                </tr>
            </thead>
            <tbody>
                <Row posts={posts}/>
            </tbody>
        </table>
    );
}

export default Table;