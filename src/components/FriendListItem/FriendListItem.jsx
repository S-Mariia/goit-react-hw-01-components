import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClasses = `${css.status} ${isOnline ? css.online : css.ofline}`;
  return (
      <li className={css.item}>
      <span className={statusClasses}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}