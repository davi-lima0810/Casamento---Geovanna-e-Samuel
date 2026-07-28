"use client";

const hearts = [
  { left: "8%", delay: "0s", duration: "16s", size: "18px" },
  { left: "18%", delay: "4s", duration: "20s", size: "24px" },
  { left: "30%", delay: "2s", duration: "18s", size: "16px" },
  { left: "42%", delay: "7s", duration: "22s", size: "20px" },
  { left: "55%", delay: "1s", duration: "17s", size: "26px" },
  { left: "68%", delay: "5s", duration: "21s", size: "18px" },
  { left: "80%", delay: "3s", duration: "19s", size: "22px" },
  { left: "92%", delay: "6s", duration: "23s", size: "16px" },
];

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {hearts.map((heart, index) => (
        <span
          key={index}
          className="absolute select-none animate-floating-heart opacity-20"
          style={{
            left: heart.left,
            bottom: "-40px",
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          🤍
        </span>
      ))}

    </div>
  );
}