
import PlayersCard from './PlayersCard';

const AvailablePlayers = ({ players }) => {
    return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                // ১. সরাসরি () ব্র্যাকেট ব্যবহার করে কোনো এক্সট্রা return ছাড়াই কোডটি ছোট করা হলো
                players.map(player => (
// player অবজেক্ট এবং ইউনিক key প্রপস আকারে পাঠানো হলো
<PlayersCard key={player.id} player={player}></PlayersCard>

                ))
            }
        </div>
    );
};

export default AvailablePlayers;


