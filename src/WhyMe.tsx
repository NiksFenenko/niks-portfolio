const WhyUs: React.FC = () => {
  const features = [
    { icon: "⚙️", title: "Discipline" },
    { icon: "💰", title: "Skilled" },
    { icon: "⏱️", title: "Punctual" },
    { icon: "🏆", title: "Victory Mentality" },
  ];

  return (
 <div className="py-16 text-center bg-gray-800">
  <h2 className="text-4xl mb-10 text-white text-center">Why Me?</h2>
  <div className="flex justify-center gap-8 flex-wrap">
    {features.map((f) => (
      <div key={f.title} className="w-40 hover:scale-110 transition duration-300">
        <div className="text-5xl mb-3">{f.icon}</div>
        <p className="text-xl text-white">{f.title}</p>
      </div>
    ))}
  </div>
</div>       
  );
};

export default WhyUs;   