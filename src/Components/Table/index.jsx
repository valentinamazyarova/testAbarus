import Row from "./Row";
import sortIcon from "./sortIcon.svg"
const Table = ({currentPosts}) => {
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
                <Row currentPosts={currentPosts}/>
            </tbody>
        </table>
    );
}

export default Table;