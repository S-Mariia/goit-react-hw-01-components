import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
        {friends.map(friend => <FriendListItem key={friend.id} friend={friend} />)}   
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};