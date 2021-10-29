import Book from '../types/Book'
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
interface BookProps{
    book: Book,
    deleteHandler: (e: React.MouseEvent<HTMLElement>) => void
}

const BookListItem: React.FC<BookProps> = props => {
    return (<tr>
                <td>
                    <Link to={'/books/' + props.book.id} style={{ textDecoration: 'none' }}>
                        {props.book.title}
                    </Link>
                </td>
                <td>
                    <Button onClick={props.deleteHandler} value={props.book.id}>Delete</Button>
                </td>
        </tr>)
    }

export default BookListItem;