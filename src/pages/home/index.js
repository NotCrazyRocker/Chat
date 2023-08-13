import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; // Add this

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate(); // Add this

    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('join_room', { username, room });
        }
        navigate('/chat', { replace: true });
    }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`ChatVortex`}</h1>
        <input className={styles.input} placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />

        <select className={styles.input} onChange={(e) => setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='javascript'>Fun</option>
          <option value='node'>Chat</option>
          <option value='express'>Timepass</option>
          <option value='react'>IDK</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }} onClick={joinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;