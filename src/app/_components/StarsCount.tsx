import { FaStar } from "react-icons/fa";

export default function PrecisionStars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
        return (
          <div key={i} className="relative inline-block mr-1">
            <FaStar className="text-gray-300" />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
}