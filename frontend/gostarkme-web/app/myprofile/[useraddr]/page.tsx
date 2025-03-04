import ProgressBar from '@/components/ui/ProgressBar';
import Divider from '@/components/ui/Divider';
import Image from 'next/image';

interface UserProfilePageProps {
  params: {
    useraddr: string;
  };
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ params }) => {
  const { useraddr } = params;

  // Mock data for design purposes
  const totalDonations = 20000;
  const currentLevel = 10;
  const currentPoints = 200;
  const totalPoints = 500;

  // Calculate progress percentage
  const progress = (currentPoints / totalPoints) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        {/* TODO:The navbar can be added here in the future */}
      </header>

      <main className="flex flex-grow w-full items-center justify-center bg-white p-8">
        {/* Profile Section */}
        <section className="w-full max-w-6xl">
          {/* Profile Header */}
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="font-extrabold">
              {useraddr.slice(0, 5)}...{useraddr.slice(-4)}
            </span>
            {"'s Profile "} {'\u2728'}
          </h2>

          <Divider />

          {/* Total Donations and Current Level */}
          <p className="text-2xl text-gray-700 mb-3 flex items-center">
            Total donations:
            <span className="font-semibold ml-2">
              {totalDonations.toLocaleString()}
            </span>
            <Image
              src="/icons/starklogo.png"
              alt="STRKs"
              width={28}
              height={28}
              className="ml-2"
            />
          </p>

          <p className="text-2xl text-gray-700 mb-5">
            Current level: <span className="font-semibold">{currentLevel}</span>
          </p>
          <h2 className="text-2xl font-extrabold text-gray-600 mb-3">
            Your progress to next level
          </h2>

          <Divider />

          <ProgressBar progress={progress} />

          <div className="flex justify-center mt-3 text-xl text-gray-700">
            {currentPoints} / {totalPoints}
            <Image
              src="/icons/starklogo.png"
              alt="STRKs"
              width={28}
              height={28}
              className="ml-2"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfilePage;
